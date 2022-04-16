import React, { FC, useEffect, useCallback } from "react";
import { useStore } from "effector-react";

import { Button } from "@src/components/button";
import { Dropdown } from "@src/components/dropdown";
import { Textarea } from "@src/components/textarea";

import {
  setText,
  setSourceLanguage,
  setTargetLanguage,
  translateStore,
  // getLanguages,
  // getTranslate,
} from "@src/store/translate";

import s from "./styles/app.module.scss";

export const App: FC = () => {
  useEffect(() => {
    console.log("render");
    // getLanguages();
  }, []);

  const { text, langugages, source, target, result } = useStore(translateStore);

  const handleTranslate = useCallback(() => {
    if (!source || !target) return;

    const translateArgs = {
      text,
      source: Object.keys(source)[0],
      target: Object.keys(target)[0],
    };

    console.log(translateArgs);

    // getTranslate(translateArgs);
  }, [text, source, target]);

  return (
    <div className={s.app}>
      <div className={s.headings}>
        <Dropdown
          title="Select source language"
          selected={source}
          list={langugages}
          onSelect={setSourceLanguage}
        />

        <Dropdown
          title="Select target language"
          selected={target}
          list={langugages}
          onSelect={setTargetLanguage}
        />

        <Button onClick={handleTranslate}>Translate</Button>
      </div>

      <div className={s.framework}>
        <Textarea value={text} onChange={setText} />

        <div className={s.result}>{result}</div>
      </div>
    </div>
  );
};
