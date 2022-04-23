import { MutableRefObject, useEffect, useCallback } from 'react';

export const useClickAway = (
  refs: MutableRefObject<HTMLDivElement | HTMLButtonElement | null>[],
  onOutsideClick: () => void,
  block?: boolean
): void => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      const checkTargets = refs.every(
        (ref) => !ref.current?.contains(e.target as HTMLElement)
      );

      if (!block && checkTargets) {
        onOutsideClick();
      }
    },
    [block, refs, onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [refs, handleOutsideClick]);
};
