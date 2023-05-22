import type { IEffectStyle } from '../../../figma/Style';

export interface SurfaceValue {
  readonly level: IEffectStyle['level'];
  readonly type: IEffectStyle['effectType'];
  readonly boxShadow: readonly [string, string, string];
  readonly token: IEffectStyle['token'];
}
