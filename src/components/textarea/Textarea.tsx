import React, { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { TextareaProps } from './interfaces';

import s from './styles/textarea.module.scss';

export const Textarea: FC<TextareaProps> = (props) => {
  const { value, placeholder, onChange, onBlur } = props;
  return (
    <TextareaAutosize
      className={s.textarea}
      minRows={8}
      maxRows={16}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
};
