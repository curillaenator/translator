import { ReactText } from 'react';
// import { ListItem } from "../interfaces";

export interface TriggerProps {
  title: ReactText;
  isOpen: boolean;
  search: string;
  onSearch: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

export interface ListProps {
  list: Record<string, string>;
  maxItems: number;
  onSelect: (item: Record<string, string>) => void;
  onClose: () => void;
}
