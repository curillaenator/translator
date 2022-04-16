import React, { FC } from "react";
import cn from "classnames";

import { Shape } from "@src/components/shape";
import { Icon } from "@src/components/icon";

import { ButtonProps } from "./interfaces";

import s from "./styles/button.module.scss";

export const Button: FC<ButtonProps> = (props) => {
  const {
    iconName,
    disabled = false,
    type = "button",
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      disabled={disabled}
      type={type}
      className={cn(s.button, className)}
    >
      <Shape className={s.button_shape} isAdaptive />

      {iconName && <Icon iconName={iconName} className={s.button_icon} />}

      {children || ""}
    </button>
  );
};
