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
    ru: 'Russian',
  },
  source: {
    en: 'English',
  },
  target: {
    ru: 'Russian',
  },
  text: '',
  result: '',
};

// ACTIONS

export const setSourceLanguage = createEvent<Record<string, string>>();
export const setTargetLanguage = createEvent<Record<string, string>>();
export const setText = createEvent<string>();
export const setResult = createEvent<string>();

export const getLanguages = createEffect(async () => await api.getLanguages());
export const getTranslate = createEffect(
  async (args: TranslateArgs) => await api.translate(args)
);

// STORES

export const translateStore = createStore<Translate>(INITIAL_TRANSLATE)
  .on(setSourceLanguage, (state, source) => ({ ...state, source }))
  .on(setTargetLanguage, (state, target) => ({ ...state, target }))
  .on(setText, (state, text) => ({ ...state, text }))
  .on(setResult, (state, result) => ({ ...state, result }))
  .on(getLanguages.pending, (state) => ({ ...state, pending: true }))
  .on(getLanguages.doneData, (state, langs) => ({
    ...state,
    langugages: langs.data,
  }))
  .on(getTranslate.doneData, (state, res) => ({
    ...state,
    result: res.data.translation,
  }));
