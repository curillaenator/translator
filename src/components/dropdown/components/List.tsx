import React, { forwardRef, useCallback } from "react";

import { Shape } from "@src/components/shape";

import { ListProps } from "./interfaces";

import s from "../styles/dropdown.module.scss";

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { list, onClose } = props;

  const handleClick = useCallback(
    (itemClick: () => void) => {
      itemClick();
      onClose();
    },
    [onClose]
  );

  return (
    <div className={s.list} ref={ref}>
      <Shape className={s.list_shape} borderRadius={16} isAdaptive />

      {list.map((item) => (
        <button
          key={item.title}
          className={s.list_item}
          onClick={() => handleClick(item.onClick)}
          type="button"
        >
          {item.title}
        </button>
      ))}
    </div>
  );
});

List.displayName = "List";

export { List };
