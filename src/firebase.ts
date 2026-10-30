// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, isSupported, type Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUVvpqRf2kbE40arZiTdL6dxPM9Ikvg5o",
  authDomain: "esai-31177.firebaseapp.com",
  projectId: "esai-31177",
  storageBucket: "esai-31177.firebasestorage.app",
  messagingSenderId: "251665972970",
  appId: "1:251665972970:web:b8389e5784dc92b977e193",
  measurementId: "G-3MB351MP32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

let analyticsInstance: Analytics | null = null;

if (typeof window !== "undefined") {
  try {
    analyticsInstance = getAnalytics(app);
  } catch {
    // Fallback check if synchronous init fails in restricted browser environments
    isSupported()
      .then((supported) => {
        if (supported) {
          analyticsInstance = getAnalytics(app);
        }
      })
      .catch(() => {
        // Ignore analytics initialization errors (e.g., strict ad-blockers)
      });
  }
}

export const analytics = analyticsInstance;

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

/**
 * Logs a custom Google Analytics 4 / Firebase Analytics event for GRAD & portfolio reporting.
 */
export function trackEvent(eventName: string, params?: AnalyticsParams): void {
  try {
    if (analyticsInstance) {
      logEvent(analyticsInstance, eventName, params);
    } else if (typeof window !== "undefined") {
      const win = window as Window & { gtag?: (...args: unknown[]) => void };
      if (typeof win.gtag === "function") {
        win.gtag("event", eventName, params);
      }
    }
  } catch {
    // Fail silently if blocked by client extensions
  }
}

/**
 * Logs virtual page/route views and hash section navigation.
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== "undefined" ? document.title : ""),
    page_location: typeof window !== "undefined" ? window.location.href : pagePath
  });
}

