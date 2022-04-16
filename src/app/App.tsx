import React, { FC } from "react";

import { Button } from "@src/components/button";
import { Dropdown } from "@src/components/dropdown";

import s from "./styles/app.module.scss";

export const App: FC = () => {
  return (
    <div className={s.app}>
      <div className={s.headings}>
        <Dropdown title="sdfsdg" list={[{ title: "qwe", onClick: () => {} }]} />

        <Dropdown title="sdfsdg" list={[{ title: "qwe", onClick: () => {} }]} />

        <Button>Translate</Button>
      </div>

      <div className={s.framework}></div>
    </div>
  );
};
