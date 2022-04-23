import React, { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Scrollbar } from '../scrollbar';

import { TextareaProps } from './interfaces';

import s from './styles/textarea.module.scss';

export const Textarea: FC<TextareaProps> = (props) => {
  const { onChange, onBlur, ...rest } = props;
  return (
    <div className={s.wrapper}>
      <Scrollbar maxHeight={336}>
        <TextareaAutosize
          {...rest}
          // maxRows={}
          className={s.textarea}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
      </Scrollbar>
    </div>
  );
};
