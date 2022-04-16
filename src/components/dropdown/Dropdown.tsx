import React, { FC } from "react";
import cn from "classnames";

import { useDropdown } from "./hooks/useDropdown";

import { Trigger, List } from "./components";

import { DropdownProps } from "./interfaces";

import s from "./styles/dropdown.module.scss";

export const Dropdown: FC<DropdownProps> = (props) => {
  const { title, list = [] } = props;

  const { listRef, isOpen, onOpen, onClose } = useDropdown();

  return (
    <div
      className={cn(s.dropdown, {
        [s.dropdown_active]: isOpen,
      })}
    >
      <Trigger title={title} onOpen={onOpen} />

      {isOpen && <List list={list} onClose={onClose} ref={listRef} />}
    </div>
  );
};
