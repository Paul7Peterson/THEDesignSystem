// import type { IEffectStyle } from '../../../figma/Style';

export interface SurfaceValue {
  readonly level: number; // IEffectStyle['level'];
  readonly type: string; // IEffectStyle['effectType'];
  readonly boxShadow: readonly [string, string, string];
  readonly token: string; // IEffectStyle['token'];
}
