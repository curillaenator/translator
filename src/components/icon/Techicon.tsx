import React, { FC } from "react";

import { webIcons } from "@src/assets/webIcons";
import { TechiconProps } from "./interfaces";

import s from "./styles/icon.module.scss";

export const Techicon: FC<TechiconProps> = ({ iconName }) => {
  return (
    <div className={s.techIcon}>
      <img
        className={s.techIcon_image}
        src={webIcons[iconName]}
        alt={iconName}
      />

      <span className={s.techIcon_title}>{iconName}</span>
    </div>
  );
};
