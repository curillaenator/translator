import React, { FC } from 'react';

import { TextareaProps } from './interfaces';

import s from './styles/textarea.module.scss';

export const Textarea: FC<TextareaProps> = (props) => {
  const { value, onChange } = props;
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={s.textarea}
    />
  );
};
