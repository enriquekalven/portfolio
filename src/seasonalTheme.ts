import type { Language } from './i18n';

export type SeasonThemeId =
  | 'spring'
  | 'summer'
  | 'fall'
  | 'winter'
  | 'new-year'
  | 'mlk-day'
  | 'lunar-new-year'
  | 'valentines'
  | 'presidents-day'
  | 'holi'
  | 'st-patricks'
  | 'easter'
  | 'mothers-day'
  | 'memorial-day'
  | 'juneteenth'
  | 'fathers-day'
  | 'independence-day'
  | 'labor-day'
  | 'mid-autumn'
  | 'indigenous-peoples-day'
  | 'halloween'
  | 'diwali'
  | 'veterans-day'
  | 'thanksgiving'
  | 'christmas';

export type SeasonSelection = 'auto' | SeasonThemeId;

export type ParticleEffectKind =
  | 'leaves'
  | 'sakura'
  | 'fireflies'
  | 'snow'
  | 'christmas-snow'
  | 'lanterns'
  | 'holi-colors'
  | 'diyas'
  | 'halloween'
  | 'fireworks'
  | 'hearts'
  | 'clovers'
  | 'blossoms'
  | 'poppies'
  | 'stars';

export interface LocalizedThemeCopy {
  name: string;
  shortLabel: string;
  greeting: string;
  dateHint: string;
}

export interface SeasonThemeDefinition {
  id: SeasonThemeId;
  category: 'season' | 'holiday';
  emoji: string;
  effect: ParticleEffectKind;
  particleColors: string[];
  confettiColors: string[];
  copy: Record<Language, LocalizedThemeCopy>;
}

export const SEASON_THEMES: readonly SeasonThemeDefinition[] = [
  /* ===================== 4 SEASONS ===================== */
  {
    id: 'spring',
    category: 'season',
    emoji: '🌸',
    effect: 'sakura',
    particleColors: ['#f9a8d4', '#f472b6', '#fbcfe8', '#6ee7b7', '#fda4af'],
    confettiColors: ['#f472b6', '#fbcfe8', '#34d399', '#38bdf8'],
    copy: {
      en: {
        name: 'Spring Blossom',
        shortLabel: 'Spring',
        greeting: 'Spring in full bloom — drifting sakura petals & fresh beginnings',
        dateHint: 'Mar 20 – Jun 19'
      },
      es: {
        name: 'Primavera en Flor',
        shortLabel: 'Primavera',
        greeting: 'Primavera en flor — pétalos de cerezo y nuevos comienzos',
        dateHint: '20 mar – 19 jun'
      },
      zh: {
        name: '春暖花开',
        shortLabel: '春季',
        greeting: '春风拂面，樱花漫舞 · 万象更新的季节',
        dateHint: '3月20日 – 6月19日'
      }
    }
  },
  {
    id: 'summer',
    category: 'season',
    emoji: '☀️',
    effect: 'fireflies',
    particleColors: ['#fde047', '#2dd4bf', '#fb923c', '#38bdf8', '#fef08a'],
    confettiColors: ['#fbbf24', '#2dd4bf', '#fb7185', '#38bdf8'],
    copy: {
      en: {
        name: 'Golden Summer',
        shortLabel: 'Summer',
        greeting: 'Long Pacific Northwest summer days — coastal sunbeams & fireflies',
        dateHint: 'Jun 20 – Sep 21'
      },
      es: {
        name: 'Verano Dorado',
        shortLabel: 'Verano',
        greeting: 'Días soleados de verano — brisa costera y luciérnagas doradas',
        dateHint: '20 jun – 21 sep'
      },
      zh: {
        name: '盛夏流光',
        shortLabel: '夏季',
        greeting: '盛夏海岸阳光与流萤微光 · 活力满载',
        dateHint: '6月20日 – 9月21日'
      }
    }
  },
  {
    id: 'fall',
    category: 'season',
    emoji: '🍂',
    effect: 'leaves',
    particleColors: ['#ea580c', '#d97706', '#dc2626', '#f59e0b', '#b45309'],
    confettiColors: ['#ea580c', '#f59e0b', '#dc2626', '#fbbf24'],
    copy: {
      en: {
        name: 'Crisp Autumn',
        shortLabel: 'Autumn',
        greeting: 'Cozy Seattle autumn — crisp air, spiced amber & tumbling maple leaves',
        dateHint: 'Sep 22 – Dec 20'
      },
      es: {
        name: 'Otoño Dorado',
        shortLabel: 'Otoño',
        greeting: 'Otoño acogedor en Seattle — aire fresco, ámbar y hojas de arce',
        dateHint: '22 sep – 20 dic'
      },
      zh: {
        name: '金秋枫韵',
        shortLabel: '秋季',
        greeting: '西雅图金秋时节 · 枫叶翩跹与温暖琥珀色',
        dateHint: '9月22日 – 12月20日'
      }
    }
  },
  {
    id: 'winter',
    category: 'season',
    emoji: '❄️',
    effect: 'snow',
    particleColors: ['#e0f2fe', '#bae6fd', '#7dd3fc', '#c4b5fd', '#ffffff'],
    confettiColors: ['#7dd3fc', '#c4b5fd', '#e0f2fe', '#38bdf8'],
    copy: {
      en: {
        name: 'Winter Wonderland',
        shortLabel: 'Winter',
        greeting: 'Crisp winter skies — softly falling snow & northern aurora glow',
        dateHint: 'Dec 21 – Mar 19'
      },
      es: {
        name: 'Invierno Boreal',
        shortLabel: 'Invierno',
        greeting: 'Cielos invernales — copos de nieve suaves y destellos de aurora',
        dateHint: '21 dic – 19 mar'
      },
      zh: {
        name: '冬日雪境',
        shortLabel: '冬季',
        greeting: '静谧冬日极光与漫天飞雪 · 银装素裹',
        dateHint: '12月21日 – 3月19日'
      }
    }
  },

  /* ===================== GLOBAL & USA HOLIDAYS ===================== */
  {
    id: 'new-year',
    category: 'holiday',
    emoji: '🎆',
    effect: 'fireworks',
    particleColors: ['#fde047', '#f8fafc', '#c084fc', '#38bdf8', '#fb7185'],
    confettiColors: ['#fbbf24', '#f8fafc', '#a855f7', '#38bdf8'],
    copy: {
      en: {
        name: "New Year's Day",
        shortLabel: 'New Year',
        greeting: 'Happy New Year! Wishing you bold ideas, joy & breakthroughs ahead',
        dateHint: 'Jan 1'
      },
      es: {
        name: 'Año Nuevo',
        shortLabel: 'Año Nuevo',
        greeting: '¡Feliz Año Nuevo! Por un año lleno de salud, alegría e innovación',
        dateHint: '1 ene'
      },
      zh: {
        name: '元旦迎新',
        shortLabel: '元旦',
        greeting: '新年快乐！愿新的一年灵感迸发、万事胜意',
        dateHint: '1月1日'
      }
    }
  },
  {
    id: 'mlk-day',
    category: 'holiday',
    emoji: '🕊️',
    effect: 'stars',
    particleColors: ['#fbbf24', '#93c5fd', '#fde68a', '#c4b5fd', '#f8fafc'],
    confettiColors: ['#fbbf24', '#60a5fa', '#a78bfa', '#f8fafc'],
    copy: {
      en: {
        name: 'MLK Jr. Day',
        shortLabel: 'MLK Day',
        greeting: 'Honoring Dr. Martin Luther King Jr. — courage, empathy, service & community',
        dateHint: '3rd Mon in Jan'
      },
      es: {
        name: 'Día de MLK Jr.',
        shortLabel: 'Día MLK',
        greeting: 'Honrando al Dr. Martin Luther King Jr. — empatía, justicia y servicio',
        dateHint: '3.er lun de ene'
      },
      zh: {
        name: '马丁·路德·金纪念日',
        shortLabel: 'MLK 纪念日',
        greeting: '致敬马丁·路德·金博士 · 勇气、同理心与平等之光',
        dateHint: '1月第三个周一'
      }
    }
  },
  {
    id: 'lunar-new-year',
    category: 'holiday',
    emoji: '🏮',
    effect: 'lanterns',
    particleColors: ['#ef4444', '#fbbf24', '#dc2626', '#fde047', '#fb923c'],
    confettiColors: ['#dc2626', '#fbbf24', '#ef4444', '#fde047'],
    copy: {
      en: {
        name: 'Lunar / Chinese New Year',
        shortLabel: 'Lunar NY',
        greeting: 'Happy Lunar New Year · 新春快乐, 恭喜发财! Wishing abundance & good fortune',
        dateHint: 'Jan / Feb (Lunar)'
      },
      es: {
        name: 'Año Nuevo Lunar / Chino',
        shortLabel: 'Año Lunar',
        greeting: '¡Feliz Año Nuevo Lunar · 新春快乐! Prosperidad, salud y buena fortuna',
        dateHint: 'Ene / Feb (Lunar)'
      },
      zh: {
        name: '农历春节',
        shortLabel: '春节',
        greeting: '新春快乐 · 恭喜发财，阖家安康，万事如意！',
        dateHint: '正月初一'
      }
    }
  },
  {
    id: 'valentines',
    category: 'holiday',
    emoji: '💝',
    effect: 'hearts',
    particleColors: ['#fb7185', '#f43f5e', '#fda4af', '#f9a8d4', '#fecdd3'],
    confettiColors: ['#f43f5e', '#fb7185', '#f472b6', '#fda4af'],
    copy: {
      en: {
        name: "Valentine's Day",
        shortLabel: "Valentine's",
        greeting: "Happy Valentine's Day — celebrating love, family, kindness & connection",
        dateHint: 'Feb 14'
      },
      es: {
        name: 'Día de San Valentín',
        shortLabel: 'San Valentín',
        greeting: '¡Feliz Día de San Valentín! Celebrando el amor, la familia y la amistad',
        dateHint: '14 feb'
      },
      zh: {
        name: '情人节',
        shortLabel: '情人节',
        greeting: '情人节快乐 · 感恩爱与陪伴，温暖常驻心间',
        dateHint: '2月14日'
      }
    }
  },
  {
    id: 'presidents-day',
    category: 'holiday',
    emoji: '🏛️',
    effect: 'stars',
    particleColors: ['#60a5fa', '#f87171', '#fbbf24', '#e2e8f0', '#3b82f6'],
    confettiColors: ['#2563eb', '#dc2626', '#fbbf24', '#f8fafc'],
    copy: {
      en: {
        name: "Presidents' Day",
        shortLabel: "Presidents'",
        greeting: "Presidents' Day — reflecting on leadership, civic service & history",
        dateHint: '3rd Mon in Feb'
      },
      es: {
        name: 'Día de los Presidentes',
        shortLabel: 'Presidentes',
        greeting: 'Día de los Presidentes — liderazgo, historia y servicio público',
        dateHint: '3.er lun de feb'
      },
      zh: {
        name: '美国总统日',
        shortLabel: '总统日',
        greeting: '总统日 · 铭记历史传承、公共服务与领导力',
        dateHint: '2月第三个周一'
      }
    }
  },
  {
    id: 'holi',
    category: 'holiday',
    emoji: '🎨',
    effect: 'holi-colors',
    particleColors: ['#f43f5e', '#facc15', '#06b6d4', '#a855f7', '#10b981', '#fb923c'],
    confettiColors: ['#f43f5e', '#facc15', '#06b6d4', '#a855f7', '#10b981'],
    copy: {
      en: {
        name: 'Holi · Festival of Colors',
        shortLabel: 'Holi',
        greeting: 'Happy Holi! Splash into vibrant colors, spring joy, laughter & togetherness',
        dateHint: 'Mar (Full Moon)'
      },
      es: {
        name: 'Holi · Festival de Colores',
        shortLabel: 'Holi',
        greeting: '¡Feliz Holi! Celebrando la primavera con colores vibrantes y alegría',
        dateHint: 'Mar (Luna llena)'
      },
      zh: {
        name: '洒红节 (Holi)',
        shortLabel: '洒红节',
        greeting: '洒红节快乐！绚丽色彩绽放春日欢笑与团聚',
        dateHint: '3月满月'
      }
    }
  },
  {
    id: 'st-patricks',
    category: 'holiday',
    emoji: '☘️',
    effect: 'clovers',
    particleColors: ['#10b981', '#34d399', '#fbbf24', '#6ee7b7', '#059669'],
    confettiColors: ['#10b981', '#34d399', '#fbbf24', '#059669'],
    copy: {
      en: {
        name: "St. Patrick's Day",
        shortLabel: "St. Paddy's",
        greeting: "Happy St. Patrick's Day! Emerald shamrocks & a dash of golden luck",
        dateHint: 'Mar 17'
      },
      es: {
        name: 'Día de San Patricio',
        shortLabel: 'San Patricio',
        greeting: '¡Feliz Día de San Patricio! Tréboles esmeralda y buena suerte',
        dateHint: '17 mar'
      },
      zh: {
        name: '圣帕特里克节',
        shortLabel: '三叶草节',
        greeting: '圣帕特里克节快乐 · 翡翠四叶草带来满满好运',
        dateHint: '3月17日'
      }
    }
  },
  {
    id: 'easter',
    category: 'holiday',
    emoji: '🌷',
    effect: 'blossoms',
    particleColors: ['#c084fc', '#fde047', '#6ee7b7', '#f9a8d4', '#93c5fd'],
    confettiColors: ['#c084fc', '#fde047', '#6ee7b7', '#f9a8d4'],
    copy: {
      en: {
        name: 'Easter Sunday',
        shortLabel: 'Easter',
        greeting: 'Happy Easter! Pastel spring blossoms, renewal, hope & family warmth',
        dateHint: 'Spring Sunday'
      },
      es: {
        name: 'Domingo de Pascua',
        shortLabel: 'Pascua',
        greeting: '¡Felices Pascuas! Renovación, esperanza y flores de primavera',
        dateHint: 'Dom de primavera'
      },
      zh: {
        name: '复活节',
        shortLabel: '复活节',
        greeting: '复活节快乐 · 春日繁花、新生与温暖希望',
        dateHint: '春季主日'
      }
    }
  },
  {
    id: 'mothers-day',
    category: 'holiday',
    emoji: '💐',
    effect: 'blossoms',
    particleColors: ['#f472b6', '#fda4af', '#fbcfe8', '#fde68a', '#c4b5fd'],
    confettiColors: ['#f472b6', '#fb7185', '#fde68a', '#c4b5fd'],
    copy: {
      en: {
        name: "Mother's Day",
        shortLabel: "Mother's Day",
        greeting: "Happy Mother's Day! Celebrating moms everywhere with gratitude & love",
        dateHint: '2nd Sun in May'
      },
      es: {
        name: 'Día de la Madre',
        shortLabel: 'Día Madre',
        greeting: '¡Feliz Día de la Madre! Con todo el cariño y gratitud para las mamás',
        dateHint: '2.º dom de may'
      },
      zh: {
        name: '母亲节',
        shortLabel: '母亲节',
        greeting: '母亲节快乐 · 致敬世间所有温柔而伟大的母亲',
        dateHint: '5月第二个周日'
      }
    }
  },
  {
    id: 'memorial-day',
    category: 'holiday',
    emoji: '🌺',
    effect: 'poppies',
    particleColors: ['#ef4444', '#dc2626', '#60a5fa', '#f8fafc', '#fbbf24'],
    confettiColors: ['#dc2626', '#3b82f6', '#f8fafc', '#fbbf24'],
    copy: {
      en: {
        name: 'Memorial Day',
        shortLabel: 'Memorial Day',
        greeting: 'Memorial Day — remembering and honoring those who served and sacrificed',
        dateHint: 'Last Mon in May'
      },
      es: {
        name: 'Día de los Caídos',
        shortLabel: 'Memorial Day',
        greeting: 'Memorial Day — recordando con gratitud a quienes sirvieron',
        dateHint: 'Últ. lun de may'
      },
      zh: {
        name: '阵亡将士纪念日',
        shortLabel: '纪念日',
        greeting: '阵亡将士纪念日 · 铭记奉献与守护，致以崇高敬意',
        dateHint: '5月最后一个周一'
      }
    }
  },
  {
    id: 'juneteenth',
    category: 'holiday',
    emoji: '✊🏿',
    effect: 'fireworks',
    particleColors: ['#ef4444', '#fbbf24', '#10b981', '#f59e0b', '#34d399'],
    confettiColors: ['#ef4444', '#fbbf24', '#10b981', '#f97316'],
    copy: {
      en: {
        name: 'Juneteenth',
        shortLabel: 'Juneteenth',
        greeting: 'Happy Juneteenth! Celebrating freedom, resilience, culture & progress',
        dateHint: 'Jun 19'
      },
      es: {
        name: 'Juneteenth',
        shortLabel: 'Juneteenth',
        greeting: '¡Feliz Juneteenth! Celebrando la libertad, la cultura y la resiliencia',
        dateHint: '19 jun'
      },
      zh: {
        name: '六月节 (Juneteenth)',
        shortLabel: '六月节',
        greeting: '六月节 · 礼赞自由、坚韧精神与多元文化传承',
        dateHint: '6月19日'
      }
    }
  },
  {
    id: 'fathers-day',
    category: 'holiday',
    emoji: '🌟',
    effect: 'stars',
    particleColors: ['#38bdf8', '#fbbf24', '#60a5fa', '#f59e0b', '#bae6fd'],
    confettiColors: ['#38bdf8', '#fbbf24', '#2563eb', '#f59e0b'],
    copy: {
      en: {
        name: "Father's Day",
        shortLabel: "Father's Day",
        greeting: "Happy Father's Day! Here's to dads, mentors & curious family adventures",
        dateHint: '3rd Sun in Jun'
      },
      es: {
        name: 'Día del Padre',
        shortLabel: 'Día Padre',
        greeting: '¡Feliz Día del Padre! Celebrando a los papás, mentores y aventuras en familia',
        dateHint: '3.er dom de jun'
      },
      zh: {
        name: '父亲节',
        shortLabel: '父亲节',
        greeting: '父亲节快乐 · 致敬每一位用爱守护家庭的父亲与榜样',
        dateHint: '6月第三个周日'
      }
    }
  },
  {
    id: 'independence-day',
    category: 'holiday',
    emoji: '🎇',
    effect: 'fireworks',
    particleColors: ['#ef4444', '#f8fafc', '#3b82f6', '#60a5fa', '#fde047'],
    confettiColors: ['#ef4444', '#f8fafc', '#2563eb', '#fbbf24'],
    copy: {
      en: {
        name: 'Independence Day (4th of July)',
        shortLabel: 'July 4th',
        greeting: 'Happy 4th of July! Summer skies, starlight & celebratory fireworks',
        dateHint: 'Jul 4'
      },
      es: {
        name: 'Día de la Independencia (4 de Julio)',
        shortLabel: '4 de Julio',
        greeting: '¡Feliz 4 de Julio! Noche de verano y fuegos artificiales',
        dateHint: '4 jul'
      },
      zh: {
        name: '美国独立日 (7月4日)',
        shortLabel: '独立日',
        greeting: '独立日快乐 · 夏夜星空与绚烂烟花盛典',
        dateHint: '7月4日'
      }
    }
  },
  {
    id: 'labor-day',
    category: 'holiday',
    emoji: '🛠️',
    effect: 'stars',
    particleColors: ['#f59e0b', '#38bdf8', '#fb923c', '#fde047', '#93c5fd'],
    confettiColors: ['#f59e0b', '#38bdf8', '#fb923c', '#2563eb'],
    copy: {
      en: {
        name: 'Labor Day',
        shortLabel: 'Labor Day',
        greeting: 'Happy Labor Day! Celebrating builders, creators, craft & hard work',
        dateHint: '1st Mon in Sep'
      },
      es: {
        name: 'Día del Trabajo',
        shortLabel: 'Día Trabajo',
        greeting: '¡Feliz Día del Trabajo! Celebrando a quienes crean, construyen e innovan',
        dateHint: '1.er lun de sep'
      },
      zh: {
        name: '美国劳工节',
        shortLabel: '劳工节',
        greeting: '劳工节快乐 · 致敬每一位创造者、建设者与匠心精神',
        dateHint: '9月第一个周一'
      }
    }
  },
  {
    id: 'mid-autumn',
    category: 'holiday',
    emoji: '🥮',
    effect: 'lanterns',
    particleColors: ['#fbbf24', '#f59e0b', '#fde047', '#fb923c', '#fef08a'],
    confettiColors: ['#fbbf24', '#f59e0b', '#ef4444', '#fde047'],
    copy: {
      en: {
        name: 'Mid-Autumn Moon Festival',
        shortLabel: 'Mid-Autumn',
        greeting: 'Happy Mid-Autumn Festival · 中秋快乐! Full harvest moon, lanterns & reunion',
        dateHint: 'Sep / Oct (Lunar)'
      },
      es: {
        name: 'Festival del Medio Otoño',
        shortLabel: 'Medio Otoño',
        greeting: '¡Feliz Festival de la Luna · 中秋快乐! Linternas doradas y unión familiar',
        dateHint: 'Sep / Oct (Lunar)'
      },
      zh: {
        name: '中秋佳节',
        shortLabel: '中秋节',
        greeting: '中秋快乐 · 花好月圆，灯火可亲，阖家团圆！',
        dateHint: '农历八月十五'
      }
    }
  },
  {
    id: 'indigenous-peoples-day',
    category: 'holiday',
    emoji: '🌾',
    effect: 'leaves',
    particleColors: ['#d97706', '#0d9488', '#ea580c', '#fbbf24', '#2dd4bf'],
    confettiColors: ['#d97706', '#14b8a6', '#ea580c', '#fbbf24'],
    copy: {
      en: {
        name: "Indigenous Peoples' Day",
        shortLabel: 'Indigenous Day',
        greeting: "Honoring Indigenous Peoples' heritage, stewardship, artistry & stories",
        dateHint: '2nd Mon in Oct'
      },
      es: {
        name: 'Día de los Pueblos Indígenas',
        shortLabel: 'Pueblos Indígenas',
        greeting: 'Honrando la cultura, historia y sabiduría de los Pueblos Indígenas',
        dateHint: '2.º lun de oct'
      },
      zh: {
        name: '原住民纪念日',
        shortLabel: '原住民日',
        greeting: '致敬原住民多元文化传承、自然守护与历史记忆',
        dateHint: '10月第二个周一'
      }
    }
  },
  {
    id: 'halloween',
    category: 'holiday',
    emoji: '🎃',
    effect: 'halloween',
    particleColors: ['#fb923c', '#a855f7', '#f97316', '#84cc16', '#fde047'],
    confettiColors: ['#f97316', '#a855f7', '#84cc16', '#fbbf24'],
    copy: {
      en: {
        name: 'Halloween',
        shortLabel: 'Halloween',
        greeting: 'Happy Halloween! Glowing jack-o’-lanterns, swooping bats & spooky fun',
        dateHint: 'Oct 31'
      },
      es: {
        name: 'Halloween · Noche de Brujas',
        shortLabel: 'Halloween',
        greeting: '¡Feliz Halloween! Calabazas brillantes, murciélagos y diversión misteriosa',
        dateHint: '31 oct'
      },
      zh: {
        name: '万圣奇妙夜',
        shortLabel: '万圣节',
        greeting: '万圣节快乐！南瓜灯闪烁、飞蝠穿梭的奇幻之夜',
        dateHint: '10月31日'
      }
    }
  },
  {
    id: 'diwali',
    category: 'holiday',
    emoji: '🪔',
    effect: 'diyas',
    particleColors: ['#fbbf24', '#f97316', '#ec4899', '#fde047', '#a855f7'],
    confettiColors: ['#fbbf24', '#f97316', '#ec4899', '#a855f7'],
    copy: {
      en: {
        name: 'Diwali · Festival of Lights',
        shortLabel: 'Diwali',
        greeting: 'Shubh Deepawali · Happy Diwali! Glowing diyas, rangoli & light over darkness',
        dateHint: 'Oct / Nov'
      },
      es: {
        name: 'Diwali · Festival de las Luces',
        shortLabel: 'Diwali',
        greeting: '¡Feliz Diwali! Diyas doradas, rangoli y el triunfo de la luz',
        dateHint: 'Oct / Nov'
      },
      zh: {
        name: '排灯节 (Diwali)',
        shortLabel: '排灯节',
        greeting: '排灯节快乐！万盏明灯点亮希望、光明与喜悦',
        dateHint: '10月 / 11月'
      }
    }
  },
  {
    id: 'veterans-day',
    category: 'holiday',
    emoji: '🎖️',
    effect: 'stars',
    particleColors: ['#fbbf24', '#60a5fa', '#ef4444', '#f8fafc', '#d97706'],
    confettiColors: ['#fbbf24', '#2563eb', '#dc2626', '#f8fafc'],
    copy: {
      en: {
        name: 'Veterans Day',
        shortLabel: 'Veterans Day',
        greeting: 'Veterans Day — with gratitude to all veterans and military families',
        dateHint: 'Nov 11'
      },
      es: {
        name: 'Día de los Veteranos',
        shortLabel: 'Veteranos',
        greeting: 'Día de los Veteranos — gratitud a quienes han servido y a sus familias',
        dateHint: '11 nov'
      },
      zh: {
        name: '退伍军人节',
        shortLabel: '退伍军人节',
        greeting: '退伍军人节 · 向所有退伍军人与军属致以诚挚感谢',
        dateHint: '11月11日'
      }
    }
  },
  {
    id: 'thanksgiving',
    category: 'holiday',
    emoji: '🦃',
    effect: 'leaves',
    particleColors: ['#d97706', '#b45309', '#dc2626', '#f59e0b', '#ea580c'],
    confettiColors: ['#d97706', '#dc2626', '#f59e0b', '#ea580c'],
    copy: {
      en: {
        name: 'Thanksgiving Harvest',
        shortLabel: 'Thanksgiving',
        greeting: 'Happy Thanksgiving! Grateful for family, community, curiosity & shared tables',
        dateHint: '4th Thu in Nov'
      },
      es: {
        name: 'Día de Acción de Gracias',
        shortLabel: 'Acción de Gracias',
        greeting: '¡Feliz Día de Acción de Gracias! Gratitud por la familia y la comunidad',
        dateHint: '4.º jue de nov'
      },
      zh: {
        name: '感恩节',
        shortLabel: '感恩节',
        greeting: '感恩节快乐 · 心怀感恩，珍惜家人、伙伴与每一份温暖相遇',
        dateHint: '11月第四个周四'
      }
    }
  },
  {
    id: 'christmas',
    category: 'holiday',
    emoji: '🎄',
    effect: 'christmas-snow',
    particleColors: ['#f8fafc', '#ef4444', '#10b981', '#fbbf24', '#bae6fd'],
    confettiColors: ['#dc2626', '#10b981', '#fbbf24', '#f8fafc'],
    copy: {
      en: {
        name: 'Christmas & Holidays',
        shortLabel: 'Christmas',
        greeting: 'Merry Christmas & Happy Holidays! Evergreen warmth, peace & snowy magic',
        dateHint: 'Dec 25'
      },
      es: {
        name: 'Navidad y Fiestas',
        shortLabel: 'Navidad',
        greeting: '¡Feliz Navidad y Felices Fiestas! Paz, calidez familiar y magia invernal',
        dateHint: '25 dic'
      },
      zh: {
        name: '圣诞与节日季',
        shortLabel: '圣诞节',
        greeting: '圣诞快乐 · 炉火松香、漫天瑞雪与岁末温情',
        dateHint: '12月25日'
      }
    }
  }
] as const;

export const SEASON_PICKER_UI: Record<
  Language,
  {
    buttonAria: string;
    autoLabel: string;
    autoSub: string;
    seasonsGroup: string;
    holidaysGroup: string;
    celebrateBtn: string;
    effectsLabel: string;
    effectsOn: string;
    effectsOff: string;
    liveTodayBadge: string;
    previewingBadge: string;
  }
> = {
  en: {
    buttonAria: 'Choose season or holiday theme',
    autoLabel: 'Auto · Live Calendar',
    autoSub: 'Matches today’s season & holidays automatically',
    seasonsGroup: 'Four Seasons',
    holidaysGroup: 'Global & USA Holidays',
    celebrateBtn: 'Celebrate!',
    effectsLabel: 'Sky Effects',
    effectsOn: 'On',
    effectsOff: 'Calm',
    liveTodayBadge: 'Live Season',
    previewingBadge: 'Time-Travel Preview'
  },
  es: {
    buttonAria: 'Elegir tema de estación o festividad',
    autoLabel: 'Auto · Calendario Vivo',
    autoSub: 'Cambia automáticamente según la estación o fiesta de hoy',
    seasonsGroup: 'Las Cuatro Estaciones',
    holidaysGroup: 'Festividades del Mundo y EE. UU.',
    celebrateBtn: '¡Celebrar!',
    effectsLabel: 'Efectos',
    effectsOn: 'Activos',
    effectsOff: 'Calma',
    liveTodayBadge: 'Tema de Hoy',
    previewingBadge: 'Vista Previa'
  },
  zh: {
    buttonAria: '选择四季或节日主题',
    autoLabel: '自动 · 实时节日日历',
    autoSub: '根据当日节气与全球节日自动切换',
    seasonsGroup: '四季风物',
    holidaysGroup: '全球与美国特色节日',
    celebrateBtn: '放飞庆典!',
    effectsLabel: '动态氛围',
    effectsOn: '开启',
    effectsOff: '静谧',
    liveTodayBadge: '今日时令',
    previewingBadge: '主题漫游'
  }
};

const THEME_MAP = new Map<SeasonThemeId, SeasonThemeDefinition>(
  SEASON_THEMES.map((theme) => [theme.id, theme])
);

export function isSeasonThemeId(value: string | null | undefined): value is SeasonThemeId {
  return typeof value === 'string' && THEME_MAP.has(value as SeasonThemeId);
}

export function getSeasonTheme(id: SeasonThemeId): SeasonThemeDefinition {
  return THEME_MAP.get(id) ?? SEASON_THEMES[2]; // fallback: fall
}

/* --- Movable Holiday Astronomical & Calendar Helpers --- */

const LUNAR_NEW_YEAR_DATES: Record<number, [number, number]> = {
  2025: [1, 29],
  2026: [2, 17],
  2027: [2, 6],
  2028: [1, 26],
  2029: [2, 13],
  2030: [2, 3],
  2031: [1, 23],
  2032: [2, 11],
  2033: [1, 31],
  2034: [2, 19],
  2035: [2, 8],
  2036: [1, 28]
};

const HOLI_DATES: Record<number, [number, number]> = {
  2025: [3, 14],
  2026: [3, 4],
  2027: [3, 22],
  2028: [3, 11],
  2029: [3, 1],
  2030: [3, 20],
  2031: [3, 9],
  2032: [2, 27],
  2033: [3, 16],
  2034: [3, 5],
  2035: [3, 24],
  2036: [3, 12]
};

const MID_AUTUMN_DATES: Record<number, [number, number]> = {
  2025: [10, 6],
  2026: [9, 25],
  2027: [9, 15],
  2028: [10, 3],
  2029: [9, 22],
  2030: [9, 12],
  2031: [10, 1],
  2032: [9, 19],
  2033: [9, 8],
  2034: [9, 27],
  2035: [9, 16],
  2036: [10, 4]
};

const DIWALI_DATES: Record<number, [number, number]> = {
  2025: [10, 20],
  2026: [11, 8],
  2027: [10, 29],
  2028: [10, 17],
  2029: [11, 5],
  2030: [10, 26],
  2031: [11, 14],
  2032: [11, 2],
  2033: [10, 22],
  2034: [11, 10],
  2035: [10, 30],
  2036: [11, 17]
};

function nthWeekdayOfMonth(year: number, month1Based: number, weekday0Sun: number, nth: number): number {
  const firstDay = new Date(year, month1Based - 1, 1).getDay();
  const offset = (weekday0Sun - firstDay + 7) % 7;
  return 1 + offset + (nth - 1) * 7;
}

function lastWeekdayOfMonth(year: number, month1Based: number, weekday0Sun: number): number {
  const lastDate = new Date(year, month1Based, 0);
  const diff = (lastDate.getDay() - weekday0Sun + 7) % 7;
  return lastDate.getDate() - diff;
}

function getEasterSunday(year: number): [number, number] {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return [month, day];
}

function daysBetween(y1: number, m1: number, d1: number, y2: number, m2: number, d2: number): number {
  const utc1 = Date.UTC(y1, m1 - 1, d1);
  const utc2 = Date.UTC(y2, m2 - 1, d2);
  return Math.round((utc1 - utc2) / 86_400_000);
}

/**
 * Resolves the live holiday or astronomical season for a given date.
 * Holiday windows cover the day itself plus its natural festive eve/weekend window.
 */
export function resolveCalendarSeason(now: Date = new Date()): SeasonThemeId {
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1..12
  const day = now.getDate();

  // 1. New Year's (Dec 31 – Jan 2)
  if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
    return 'new-year';
  }

  // 2. Christmas & Yuletide (Dec 21 – Dec 26)
  if (month === 12 && day >= 21 && day <= 26) {
    return 'christmas';
  }

  // 3. Lunar / Chinese New Year (Eve through Day 5: -1 to +4 days)
  const lny = LUNAR_NEW_YEAR_DATES[year];
  if (lny) {
    const diff = daysBetween(year, month, day, year, lny[0], lny[1]);
    if (diff >= -1 && diff <= 4) return 'lunar-new-year';
  } else {
    try {
      const parts = new Intl.DateTimeFormat('en-u-ca-chinese', { month: 'numeric', day: 'numeric' }).formatToParts(now);
      const cMonth = Number(parts.find((p) => p.type === 'month')?.value);
      const cDay = Number(parts.find((p) => p.type === 'day')?.value);
      if (cMonth === 1 && cDay >= 1 && cDay <= 5) return 'lunar-new-year';
    } catch {
      // Ignore if Chinese calendar is unavailable in older runtimes.
    }
  }

  // 4. MLK Jr. Day (3rd Monday of January, Sat–Mon)
  if (month === 1) {
    const mlk = nthWeekdayOfMonth(year, 1, 1, 3);
    if (day >= mlk - 2 && day <= mlk) return 'mlk-day';
  }

  // 5. Valentine's Day (Feb 13 – Feb 14)
  if (month === 2 && (day === 13 || day === 14)) {
    return 'valentines';
  }

  // 6. Presidents' Day (3rd Monday of February, Sat–Mon)
  if (month === 2) {
    const pres = nthWeekdayOfMonth(year, 2, 1, 3);
    if (day >= pres - 2 && day <= pres) return 'presidents-day';
  }

  // 7. Holi (Festival of Colors: -1 to +1 days)
  const holi = HOLI_DATES[year];
  if (holi) {
    const diff = daysBetween(year, month, day, year, holi[0], holi[1]);
    if (diff >= -1 && diff <= 1) return 'holi';
  }

  // 8. St. Patrick's Day (Mar 16 – Mar 17)
  if (month === 3 && (day === 16 || day === 17)) {
    return 'st-patricks';
  }

  // 9. Easter (Good Friday through Easter Monday: -2 to +1 days)
  const [easterM, easterD] = getEasterSunday(year);
  {
    const diff = daysBetween(year, month, day, year, easterM, easterD);
    if (diff >= -2 && diff <= 1) return 'easter';
  }

  // 10. Mother's Day (2nd Sunday of May, Sat–Sun)
  if (month === 5) {
    const mothers = nthWeekdayOfMonth(year, 5, 0, 2);
    if (day === mothers - 1 || day === mothers) return 'mothers-day';

    // 11. Memorial Day (Last Monday of May, Sat–Mon)
    const memorial = lastWeekdayOfMonth(year, 5, 1);
    if (day >= memorial - 2 && day <= memorial) return 'memorial-day';
  }

  // 12. Juneteenth (Jun 18 – Jun 20)
  if (month === 6 && day >= 18 && day <= 20) {
    return 'juneteenth';
  }

  // 13. Father's Day (3rd Sunday of June, Sat–Sun)
  if (month === 6) {
    const fathers = nthWeekdayOfMonth(year, 6, 0, 3);
    if (day === fathers - 1 || day === fathers) return 'fathers-day';
  }

  // 14. Independence Day / 4th of July (Jul 2 – Jul 5)
  if (month === 7 && day >= 2 && day <= 5) {
    return 'independence-day';
  }

  // 15. Labor Day (1st Monday of September, Sat–Mon)
  if (month === 9) {
    const labor = nthWeekdayOfMonth(year, 9, 1, 1);
    if (day >= labor - 2 && day <= labor) return 'labor-day';
  }

  // 16. Mid-Autumn Festival (-1 to +1 days)
  const midAutumn = MID_AUTUMN_DATES[year];
  if (midAutumn) {
    const diff = daysBetween(year, month, day, year, midAutumn[0], midAutumn[1]);
    if (diff >= -1 && diff <= 1) return 'mid-autumn';
  }

  // 17. Indigenous Peoples' Day (2nd Monday of October, Sun–Mon)
  if (month === 10) {
    const indigenous = nthWeekdayOfMonth(year, 10, 1, 2);
    if (day === indigenous - 1 || day === indigenous) return 'indigenous-peoples-day';
  }

  // 18. Diwali (-2 to +2 days — checked around Oct/Nov; on exact Oct 31 Halloween takes precedence)
  if (!(month === 10 && day >= 29)) {
    const diwali = DIWALI_DATES[year];
    if (diwali) {
      const diff = daysBetween(year, month, day, year, diwali[0], diwali[1]);
      if (diff >= -2 && diff <= 2) return 'diwali';
    }
  }

  // 19. Halloween (Oct 25 – Nov 1)
  if ((month === 10 && day >= 25) || (month === 11 && day === 1)) {
    return 'halloween';
  }

  // Check Diwali again for early-Nov dates (after Nov 1)
  {
    const diwali = DIWALI_DATES[year];
    if (diwali) {
      const diff = daysBetween(year, month, day, year, diwali[0], diwali[1]);
      if (diff >= -2 && diff <= 2) return 'diwali';
    }
  }

  // 20. Veterans Day (Nov 10 – Nov 11)
  if (month === 11 && (day === 10 || day === 11)) {
    return 'veterans-day';
  }

  // 21. Thanksgiving (4th Thursday of November: Tue through Sun of Thanksgiving week)
  if (month === 11) {
    const thanksgiving = nthWeekdayOfMonth(year, 11, 4, 4);
    if (day >= thanksgiving - 2 && day <= thanksgiving + 3) {
      return 'thanksgiving';
    }
  }

  // Astronomical Seasons (Northern Hemisphere)
  if ((month === 3 && day >= 20) || month === 4 || month === 5 || (month === 6 && day <= 19)) {
    return 'spring';
  }
  if ((month === 6 && day >= 20) || month === 7 || month === 8 || (month === 9 && day <= 21)) {
    return 'summer';
  }
  if ((month === 9 && day >= 22) || month === 10 || month === 11 || (month === 12 && day <= 20)) {
    return 'fall';
  }
  return 'winter';
}
