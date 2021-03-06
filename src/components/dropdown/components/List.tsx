import React, { forwardRef, useCallback } from 'react';

import { Scrollbar } from '@src/components/scrollbar';

import s from '../styles/dropdown.module.scss';
import { ListProps } from './interfaces';

const ITEM_H = 40;
const PADDING_H = 16;

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { list, maxItems, onSelect, onClose } = props;

  const handleClick = useCallback(
    (item: Record<string, string>) => {
      onSelect(item);
      onClose();
    },
    [onClose, onSelect]
  );

  return (
    <div
      className={s.list}
      style={{ maxHeight: ITEM_H * maxItems + PADDING_H }}
      ref={ref}
    >
      <Scrollbar>
        {Object.entries(list).map(([key, value], i) => (
          <button
            key={`${value}${i}`}
            className={s.list_item}
            onClick={() => handleClick({ [key]: value })}
            type="button"
          >
            {value}
          </button>
        ))}
      </Scrollbar>
    </div>
  );
});

List.displayName = 'List';

export { List };
