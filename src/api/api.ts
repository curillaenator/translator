import axios from 'axios';

const base = axios.create({
  baseURL: 'https://google-translate20.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com',
    'X-RapidAPI-Key': 'bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e',
  },
});

interface LanguagesResponse {
  code: number;
  data: Record<string, string>;
  message: string;
}

export interface TranslateArgs {
  text: string;
  target: string;
  source: string;
}

interface TranslateResponce {
  code: number;
  data: {
    pairs: { s: string; t: string }[];
    pronunciation: string;
    source: unknown;
    translation: string;
  };
  message: string;
}

export const api = {
  getLanguages: (): Promise<LanguagesResponse> => {
    return base
      .get('/languages')
      .then((r) => r.data)
      .catch((err) => {
        alert('Error! See console!!!');
        console.error(err);
      });
  },

  translate: (args: TranslateArgs): Promise<TranslateResponce> => {
    const { text, target, source } = args;

    return base
      .get(`/translate?text=${text}&tl=${target}&sl=${source}`)
      .then((r) => r.data)
      .catch((err) => {
        alert('Error! See console!!!');
        console.error(err);
      });
  },
};
