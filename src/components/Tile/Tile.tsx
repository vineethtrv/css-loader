import { FC, memo, useMemo } from 'react';
import styles from './Tile.module.scss';
import { parseLoaderContent } from '../../util';

interface TileProps {
  styleSheet: CSSModuleClasses;
  cssString: string;
  filename: string;
  onClick: (cssString: string) => void;
}

const Tile: FC<TileProps> = ({ styleSheet, cssString, filename,  onClick }) => {
  const content = useMemo(() => parseLoaderContent(cssString), [cssString]);

  return (
    <div data-ref={filename} onClick={() => onClick(cssString)} className={styles.tile}>
      <span className={styleSheet.loader}>{content}</span>
    </div>
  );
};

export default memo(Tile);
