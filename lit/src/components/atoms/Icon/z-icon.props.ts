
import { ICON } from './IconList';

export type Icon = keyof typeof ICON;

/** */
export interface ZIconProps {
  /** Icon value */
  icon: Icon;
}
