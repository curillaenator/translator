import React, { FC, useState, useCallback } from 'react';
import cn from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import { Scrollbar } from '../scrollbar';

import { TextareaProps } from './interfaces';

import s from './styles/textarea.module.scss';

export const Textarea: FC<TextareaProps> = (props) => {
  const { onChange, onBlur = () => {}, ...rest } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    onBlur();
    setIsFocused(false);
  }, []);

  return (
    <div
      className={cn(s.wrapper, {
        [s.wrapper_focused]: isFocused,
      })}
    >
      <Scrollbar maxHeight={336}>
        <TextareaAutosize
          {...rest}
          className={s.textarea}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </Scrollbar>
    </div>
  );
};
