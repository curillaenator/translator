import { MutableRefObject } from 'react';

export interface ShapeProps {
  borderRadius?: number;
  isAdaptive?: boolean;
  height?: number;
  className?: string;
}

export type UseShapeParams = (
  isAdaptive: boolean,
  radius: number,
  height?: number
) => [number, number, string, MutableRefObject<SVGSVGElement | null>];
