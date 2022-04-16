import { ReactText } from "react";
import { ListItem } from "../interfaces";

export interface TriggerProps {
  title: ReactText;
  onOpen: () => void;
}

export interface ListProps {
  list: ListItem[];
  onClose: () => void;
}
