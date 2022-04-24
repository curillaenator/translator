import { createStore, createEvent, createEffect } from 'effector';
import { api, TranslateArgs } from '@src/api/api';

interface Translate {
  langugages: Record<string, string>;
  source: Record<string, string> | null;
  target: Record<string, string> | null;
  text: string;
  result: string;
}

const INITIAL_TRANSLATE: Translate = {
  langugages: {
    en: 'English',
  },
  source: {
    en: 'English',
  },
  target: {
    en: 'English',
  },
  text: '',
  result: '',
};

// ACTIONS

export const setSourceLanguage = createEvent<Record<string, string>>();
export const setTargetLanguage = createEvent<Record<string, string>>();
export const setText = createEvent<string>();

// ASYNC ACTIONS

export const getLanguages = createEffect(async () => await api.getLanguages());
export const getTranslate = createEffect(
  async (args: TranslateArgs) => await api.translate(args)
);

// STORES

export const translateStore = createStore<Translate>(INITIAL_TRANSLATE)
  .on(setSourceLanguage, (state, source) => ({ ...state, source }))
  .on(setTargetLanguage, (state, target) => ({ ...state, target }))
  .on(setText, (state, text) => ({ ...state, text }))
  .on(getLanguages.doneData, (state, langs) => ({
    ...state,
    langugages: langs.data,
  }))
  .on(getTranslate.doneData, (state, res) => ({
    ...state,
    result: res.data.translation,
  }));
