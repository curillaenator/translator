import { useState, useRef } from "react";
// import { useClickAway } from "@src/utils";

export const useDropdown = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  // useClickAway(listRef, onClose, !isOpen);

  return {
    listRef,
    isOpen,
    onOpen,
    onClose,
  };
};
