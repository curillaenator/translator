import { MouseEventHandler } from "react";
import { IconNames } from "@src/assets/icons";

export type ButtonAppearances =
  | "primary"
  | "secondary"
  | "positive"
  | "attention"
  | "negative";

export type ButtonSizes = "2xl" | "xl" | "l" | "m" | "s" | "xs";

export interface ButtonProps {
  size?: ButtonSizes;
  isGhost?: boolean;
  appearance?: ButtonAppearances;
  iconName?: IconNames;
  reversed?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
  children?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
