import React, { useRef, useEffect, forwardRef } from 'react';

import { Shape } from '@src/components/shape';
import { Icon } from '@src/components/icon';

import s from '../styles/dropdown.module.scss';
import { TriggerProps } from './interfaces';

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>((props, ref) => {
  const { title, isOpen, search, onSearch, onOpen, onClose } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isOpen && inputRef.current?.focus();
  }, [isOpen]);

  return (
    <button
      ref={ref}
      className={s.trigger}
      onClick={isOpen ? onClose : onOpen}
      type="button"
    >
      <Shape className={s.trigger_shape} isAdaptive />

      {isOpen && (
        <div className={s.trigger_search}>
          <Icon iconName="search" className={s.trigger_search_icon} />

          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            ref={inputRef}
          />
        </div>
      )}

      {!isOpen && <span className={s.trigger_title}>{title}</span>}

      <svg
        className={s.trigger_icon}
        width="8"
        height="6"
        viewBox="0 0 8 6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.706206 2.41374L3.29621 5.00374C3.68621 5.39374 4.31621 5.39374 4.70621 5.00374L7.29621 2.41374C7.92621 1.78374 7.47621 0.703735 6.58621 0.703735H1.40621C0.516206 0.703735 0.0762062 1.78374 0.706206 2.41374Z" />
      </svg>
    </button>
  );
});

Trigger.displayName = 'Trigger';

export { Trigger };
