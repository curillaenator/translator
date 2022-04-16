import { createStore, createEvent } from "effector";

interface Translate {
  langugages: Record<string, string>;
  source: string;
  target: string;
  text: string;
  result: string;
}

const INITIAL_TRANSLATE: Translate = {
  langugages: {},
  source: "en",
  target: "en",
  text: "",
  result: "",
};

// ACTIONS

export const setLanguages = createEvent<Record<string, string>>();
export const setSourceLanguage = createEvent<string>();
export const setTargetLanguage = createEvent<string>();
export const setQueryString = createEvent<string>();
export const setResult = createEvent<string>();

// STORE

export const translateStore = createStore<Translate>(INITIAL_TRANSLATE)
  .on(setLanguages, (state, langugages) => ({ ...state, langugages }))
  .on(setSourceLanguage, (state, source) => ({ ...state, source }))
  .on(setTargetLanguage, (state, target) => ({ ...state, target }))
  .on(setQueryString, (state, text) => ({ ...state, text }))
  .on(setResult, (state, result) => ({ ...state, result }));
