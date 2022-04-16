import axios from "axios";

const base = axios.create({
  baseURL: "https://google-translate20.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Host": "google-translate20.p.rapidapi.com",
    "X-RapidAPI-Key": "bf0cc8809fmsh7ea2aa3b64ea954p18a4d1jsne0cc0aff369e",
  },
});

interface LanguagesResponse {
  code: number;
  data: Record<string, string>;
  messager: string;
}

interface TranslateArgs {
  text: string;
  target: string;
  source: string;
}

export const api = {
  getLanguages: (): Promise<LanguagesResponse> => {
    return base
      .get("/languages")
      .then((r) => r.data)
      .catch((err) => {
        alert("Error! See console!!!");
        console.error(err);
      });
  },

  translate: (args: TranslateArgs) => {
    const { text, target, source } = args;

    return base
      .post(`/translate?text=${text}&tl=${target}&sl=${source}`)
      .then((r) => r.data)
      .catch((err) => {
        alert("Error! See console!!!");
        console.error(err);
      });
  },
};
