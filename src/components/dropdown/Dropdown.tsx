import React, { FC } from "react";
import cn from "classnames";

import { useDropdown } from "./hooks/useDropdown";

import { Trigger, List } from "./components";

import { DropdownProps } from "./interfaces";

import s from "./styles/dropdown.module.scss";

export const Dropdown: FC<DropdownProps> = (props) => {
  const { title, selected, list = {}, maxItems = 6, onSelect } = props;

  const { listRef, filteredList, isOpen, search, onSearch, onOpen, onClose } =
    useDropdown(list);

  return (
    <div
      className={cn(s.dropdown, {
        [s.dropdown_active]: isOpen,
      })}
    >
      <Trigger
        title={selected ? Object.values(selected)[0] : title}
        search={search}
        isOpen={isOpen}
        onSearch={onSearch}
        onOpen={onOpen}
        onClose={onClose}
      />

      {isOpen && (
        <List
          list={filteredList}
          onClose={onClose}
          onSelect={onSelect}
          maxItems={maxItems}
          ref={listRef}
        />
      )}
    </div>
  );
};
