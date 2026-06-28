import { FC, useEffect, useMemo, useState } from 'react';
import styles from './ViewCode.module.scss';
import CodePanel from './CodePanel';
import SettingsPanel from './SettingsPanel';
import { parseLoaderContent } from '../../util';

type PreviewTheme = 'dark' | 'light';

interface ViewCodeProps {
  cssString: string;
  show: boolean;
  onClose: () => void;
}

const ViewCode: FC<ViewCodeProps> = ({ cssString, show, onClose }) => {
  // Editable copy of the CSS so the color picker, code panel and preview all stay in sync.
  const [editableCss, setEditableCss] = useState(cssString);
  const [previewTheme, setPreviewTheme] = useState<PreviewTheme>('dark');

  // Reset whenever the source CSS (i.e. selected loader) changes.
  useEffect(() => {
    setEditableCss(cssString);
  }, [cssString]);

  const content = useMemo(() => parseLoaderContent(editableCss), [editableCss]);

  if (!show) return null;

  return (
    <div className={`${styles.overlay} ${show ? styles.show : ''}`}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.inspect}>
          <SettingsPanel
            cssString={editableCss}
            onCssChange={setEditableCss}
            styles={styles}
          />
          <CodePanel cssString={editableCss} content={content} styles={styles} />
        </div>

        <div className={`${styles.preview} ${styles[`preview_${previewTheme}`]}`}>
          <button
            type="button"
            className={styles.preview_theme_toggle}
            onClick={() => setPreviewTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch preview background to ${previewTheme === 'dark' ? 'light' : 'dark'}`}
            title={`Switch to ${previewTheme === 'dark' ? 'light' : 'dark'} background`}
          >
            {previewTheme === 'dark' ? '☀️' : '🌙'}
          </button>
          <style>{editableCss}</style>
          <span className="loader">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewCode;