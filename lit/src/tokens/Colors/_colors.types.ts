import type { IColorStyle } from '../../../figma/Style';

export interface ColorValue {
  readonly color: IColorStyle['color'];
  readonly shade: number;
  readonly HSL: string;
  readonly HEX: string;
  readonly RGB: string;
  readonly RGBChannels: readonly [number, number, number];
  readonly token: string;
}
