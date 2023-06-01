import type { ReactElement } from './reactHelpers.types';
import type * as Z from '../components';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-button>` */
  ['z-button']: ReactElement<Z.ZButtonProps>;
  /** ## `<z-icon>` */
  ['z-icon']: ReactElement<Z.ZIconProps>;
}