import { ReactText } from "react";

export interface ListItem {
  title: ReactText;
  onClick: () => void;
}

export interface DropdownProps {
  title: ReactText;
  list: ListItem[];
}
