export interface ZImageSource {
  /** */
  minWidth: number;
  /** */
  src: string;
}

export interface ZImageProps {
  /** Source of he biggest image to present */
  src: string;
  /** */
  alt: string;
  /** */
  sources?: ZImageSource[];
  /** */
  ratio?: `${number}:${number}` | number | 'auto';
}
