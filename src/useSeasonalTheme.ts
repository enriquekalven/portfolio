import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { trackEvent } from './firebase';
import {
  getSeasonTheme,
  isSeasonThemeId,
  resolveCalendarSeason,
  type SeasonSelection,
  type SeasonThemeDefinition,
  type SeasonThemeId
} from './seasonalTheme';

const STORAGE_SEASON_KEY = 'portfolio-season-selection';
const STORAGE_MOTION_KEY = 'portfolio-season-motion';
const SYNC_EVENT = 'portfolio-season-sync';
export const BURST_EVENT = 'portfolio-season-burst';

function readInitialSelection(): SeasonSelection {
  if (typeof window === 'undefined') return 'auto';
  try {
    const param = new URLSearchParams(window.location.search).get('season');
    if (param === 'auto') return 'auto';
    if (isSeasonThemeId(param)) return param;
    const saved = window.localStorage.getItem(STORAGE_SEASON_KEY);
    if (saved === 'auto') return 'auto';
    if (isSeasonThemeId(saved)) return saved;
  } catch {
    // Ignore storage access errors in restricted browsing modes.
  }
  return 'auto';
}

function readInitialMotion(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const saved = window.localStorage.getItem(STORAGE_MOTION_KEY);
    if (saved === 'calm') return false;
    if (saved === 'on') return true;
  } catch {
    // Ignore storage access errors.
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useSeasonalTheme() {
  const [selection, setSelectionState] = useState<SeasonSelection>(readInitialSelection);
  const [motionEnabled, setMotionState] = useState<boolean>(readInitialMotion);
  const [calendarThemeId, setCalendarThemeId] = useState<SeasonThemeId>(() => resolveCalendarSeason());

  const activeThemeId: SeasonThemeId = selection === 'auto' ? calendarThemeId : selection;
  const activeTheme: SeasonThemeDefinition = getSeasonTheme(activeThemeId);

  useEffect(() => {
    document.documentElement.setAttribute('data-season', activeThemeId);
  }, [activeThemeId]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCalendarThemeId(resolveCalendarSeason());
    }, 60_000 * 15);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onSync = () => {
      setSelectionState(readInitialSelection());
      setMotionState(readInitialMotion());
    };
    window.addEventListener(SYNC_EVENT, onSync);
    window.addEventListener('storage', onSync);
    return () => {
      window.removeEventListener(SYNC_EVENT, onSync);
      window.removeEventListener('storage', onSync);
    };
  }, []);

  const setSelection = useCallback((next: SeasonSelection, source = 'picker') => {
    setSelectionState(next);
    try {
      window.localStorage.setItem(STORAGE_SEASON_KEY, next);
      const url = new URL(window.location.href);
      if (next === 'auto') url.searchParams.delete('season');
      else url.searchParams.set('season', next);
      window.history.replaceState(window.history.state, '', url);
    } catch {
      // Ignore URL/storage errors.
    }
    window.dispatchEvent(new CustomEvent(SYNC_EVENT));
    trackEvent('season_theme_change', {
      selection: next,
      resolved_theme: next === 'auto' ? resolveCalendarSeason() : next,
      source
    });
  }, []);

  const setMotionEnabled = useCallback((enabled: boolean) => {
    setMotionState(enabled);
    try {
      window.localStorage.setItem(STORAGE_MOTION_KEY, enabled ? 'on' : 'calm');
    } catch {
      // Ignore storage errors.
    }
    window.dispatchEvent(new CustomEvent(SYNC_EVENT));
    trackEvent('season_motion_toggle', { motion: enabled ? 'on' : 'calm' });
  }, []);

  const triggerCelebration = useCallback(
    (originX?: number, originY?: number) => {
      const theme = getSeasonTheme(selection === 'auto' ? resolveCalendarSeason() : selection);
      window.dispatchEvent(
        new CustomEvent(BURST_EVENT, {
          detail: {
            x: originX ?? window.innerWidth * 0.5,
            y: originY ?? window.innerHeight * 0.32
          }
        })
      );
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confetti({
          particleCount: 55,
          spread: 78,
          startVelocity: 32,
          origin: {
            x: originX !== undefined ? originX / Math.max(1, window.innerWidth) : 0.5,
            y: originY !== undefined ? originY / Math.max(1, window.innerHeight) : 0.28
          },
          colors: [...theme.confettiColors]
        });
      }
      trackEvent('season_celebrate_click', { theme: theme.id });
    },
    [selection]
  );

  return {
    selection,
    activeThemeId,
    activeTheme,
    calendarThemeId,
    motionEnabled,
    setSelection,
    setMotionEnabled,
    triggerCelebration
  };
}
