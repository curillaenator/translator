import React, { FC } from 'react';
import cn from 'classnames';
import { useShapeParams } from './hooks/useShapeParams';

import { ShapeProps } from './interfaces';

import s from './styles/shape.module.scss';

export const Shape: FC<ShapeProps> = ({
  borderRadius = 24,
  isAdaptive = false,
  height,
  className = 'rounded-shape',
}) => {
  const [W, H, path, ref] = useShapeParams(isAdaptive, borderRadius, height);

  return (
    <svg
      ref={ref}
      className={cn(s.shape, className)}
      version="1.1"
      shapeRendering="geometricPrecision"
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};
