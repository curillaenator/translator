import { MutableRefObject, useEffect, useCallback } from 'react';

export const useClickAway = (
  ref: MutableRefObject<HTMLDivElement | null>,
  onOutsideClick: () => void,
  block?: boolean
): void => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!block && !ref.current?.contains(e.target as HTMLElement)) {
        onOutsideClick();
      }
    },
    [block, ref, onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [ref, handleOutsideClick]);
};
