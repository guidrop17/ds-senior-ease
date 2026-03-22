import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

export type FontSize = 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
export type Theme = 'default' | 'high-contrast' | 'soft';

const FONT_CLASS_MAP: Record<FontSize, string[]> = {
  small: ['ui-font-small', 'font-small'],
  medium: [],
  large: ['ui-font-large', 'font-large'],
  'x-large': ['ui-font-x-large', 'font-x-large'],
  'xx-large': ['ui-font-xx-large', 'font-xx-large'],
};

const THEME_CLASS_MAP: Record<Theme, string[]> = {
  default: [],
  'high-contrast': ['ui-theme-high-contrast', 'theme-high-contrast'],
  soft: ['ui-theme-soft', 'theme-soft'],
};

const FONT_CLASSES = [
  'ui-font-small',
  'ui-font-large',
  'ui-font-x-large',
  'ui-font-xx-large',
  'font-small',
  'font-large',
  'font-x-large',
  'font-xx-large',
];

const THEME_CLASSES = ['ui-theme-high-contrast', 'ui-theme-soft', 'theme-high-contrast', 'theme-soft'];
const DYSLEXIA_CLASSES = ['ui-dyslexia-font', 'dyslexia-font'];

const VALID_FONTS: FontSize[] = ['small', 'medium', 'large', 'x-large', 'xx-large'];
const VALID_THEMES: Theme[] = ['default', 'high-contrast', 'soft'];

const FONT_KEY = 'accessibility-font-size';
const THEME_KEY = 'accessibility-theme';
const VOICE_KEY = 'accessibility-voice-reading';
const SPEECH_RATE_KEY = 'accessibility-speech-rate';
const DYSLEXIA_KEY = 'accessibility-dyslexia-font';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  private readonly document = inject(DOCUMENT);
  private readonly storage = getStorage();
  private readonly classList = this.document.documentElement.classList;

  readonly fontSize = signal<FontSize>(this.loadFont());
  readonly theme = signal<Theme>(this.loadTheme());
  readonly voiceReading = signal<boolean>(this.loadVoiceReading());
  readonly speechRate = signal<number>(this.loadSpeechRate());
  readonly dyslexiaFont = signal<boolean>(this.loadDyslexiaFont());

  private readonly _fontEffect = effect(() => {
    this.classList.remove(...FONT_CLASSES);
    this.classList.add(...FONT_CLASS_MAP[this.fontSize()]);
    this.storage?.setItem(FONT_KEY, this.fontSize());
  });

  private readonly _themeEffect = effect(() => {
    this.classList.remove(...THEME_CLASSES);
    this.classList.add(...THEME_CLASS_MAP[this.theme()]);
    this.storage?.setItem(THEME_KEY, this.theme());
  });

  private readonly _voiceEffect = effect(() => {
    this.storage?.setItem(VOICE_KEY, String(this.voiceReading()));
  });

  private readonly _speechRateEffect = effect(() => {
    this.storage?.setItem(SPEECH_RATE_KEY, String(this.speechRate()));
  });

  private readonly _dyslexiaEffect = effect(() => {
    const enabled = this.dyslexiaFont();
    this.classList.remove(...DYSLEXIA_CLASSES);
    if (enabled) {
      this.classList.add(...DYSLEXIA_CLASSES);
    }
    this.storage?.setItem(DYSLEXIA_KEY, String(enabled));
  });

  private loadFont(): FontSize {
    const stored = this.storage?.getItem(FONT_KEY) as FontSize | null;
    return stored && VALID_FONTS.includes(stored) ? stored : 'medium';
  }

  private loadTheme(): Theme {
    const stored = this.storage?.getItem(THEME_KEY) as Theme | null;
    return stored && VALID_THEMES.includes(stored) ? stored : 'default';
  }

  private loadVoiceReading(): boolean {
    return this.storage?.getItem(VOICE_KEY) === 'true';
  }

  private loadDyslexiaFont(): boolean {
    return this.storage?.getItem(DYSLEXIA_KEY) === 'true';
  }

  private loadSpeechRate(): number {
    const stored = Number.parseFloat(this.storage?.getItem(SPEECH_RATE_KEY) ?? '');
    return Number.isNaN(stored) ? 0.9 : Math.min(1.5, Math.max(0.5, stored));
  }
}

function getStorage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}
