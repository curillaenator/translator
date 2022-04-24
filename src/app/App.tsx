import React, { FC, useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';

import { Button } from '@src/components/button';
import { Dropdown } from '@src/components/dropdown';
import { Textarea } from '@src/components/textarea';
import { Scrollbar } from '@src/components/scrollbar';
import { Loader } from '@src/components/loader';

import {
  setText,
  setSourceLanguage,
  setTargetLanguage,
  translateStore,
  getLanguages,
  getTranslate,
} from '@src/store/translate';

import bg from '../assets/langs.jpeg';
import s from './styles/app.module.scss';

export const App: FC = () => {
  useEffect(() => {
    getLanguages();
  }, []);

  const { text, langugages, source, target, result } = useStore(translateStore);
  const translatePending = useStore(getTranslate.pending);

  const handleTranslate = useCallback(() => {
    if (!source || !target || !text) return;

    const translateArgs = {
      text,
      source: Object.keys(source)[0],
      target: Object.keys(target)[0],
    };

    getTranslate(translateArgs);
  }, [text, source, target]);

  return (
    <div className={s.app}>
      <img className={s.background} src={bg} alt="Background" />

      <div className={s.framework}>
        <div className={s.block}>
          <Dropdown
            title="Select source language"
            selected={source}
            list={langugages}
            onSelect={setSourceLanguage}
          />

          <Textarea
            value={text}
            placeholder="Type here your source text"
            minRows={8}
            onChange={setText}
            onBlur={handleTranslate}
          />
        </div>

        <div className={s.block}>
          <Dropdown
            title="Select target language"
            selected={target}
            list={langugages}
            onSelect={setTargetLanguage}
          />

          <div className={s.result}>
            <Scrollbar maxHeight={336}>{result}</Scrollbar>
          </div>
        </div>
      </div>

      <div className={s.footings}>
        <div>{translatePending && <Loader />}</div>

        <Button iconName="translate" disabled={!text} onClick={handleTranslate}>
          Translate
        </Button>
      </div>
    </div>
  );
};
