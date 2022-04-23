import React, { FC } from 'react';

import { spinners } from './assets/spinners';

import { LoaderProps } from './interfaces';

import s from './styles/loader.module.scss';

export const Loader: FC<LoaderProps> = ({ spinner = 'default' }) => {
  const Spinner = spinners[spinner] as React.ElementType;

  return (
    <Spinner
      className={s.loader}
      primaryCn={s.primaryColor}
      neutralCn={s.neutralColor}
    />
  );
};
