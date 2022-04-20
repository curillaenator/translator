import { ReactText } from 'react';

export interface DropdownProps {
  title: ReactText;
  selected: Record<string, string> | null;
  list: Record<string, string>;
  maxItems?: number;
  onSelect: (item: Record<string, string>) => void;
}
