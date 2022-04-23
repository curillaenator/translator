import { useState, useRef, useCallback } from 'react';
import { useClickAway } from '@src/utils';

export const useDropdown = (list: Record<string, string>) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState<string>('');
  const onSearch = useCallback((value: string) => setSearch(value), []);

  const onClose = useCallback(() => setIsOpen(false), []);

  const onOpen = useCallback(() => {
    if (isOpen) return;
    setIsOpen(true);
  }, [isOpen]);

  const filteredList = !!search
    ? Object.fromEntries(
        Object.entries(list).filter(([key, value]) =>
          (key + value).toLowerCase().includes(search)
        )
      )
    : list;

  useClickAway([listRef, triggerRef], onClose, !isOpen);

  return {
    listRef,
    triggerRef,
    isOpen,
    search,
    filteredList,
    onOpen,
    onClose,
    onSearch,
  };
};
