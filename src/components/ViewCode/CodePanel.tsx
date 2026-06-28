import { FC, useCallback, useEffect, useRef, useState } from 'react';

interface CodePanelProps {
  cssString: string;
  content?: string;
  styles: CSSModuleClasses;
}

interface CodeBlockProps {
  title: string;
  code: string;
  styles: CSSModuleClasses;
}

const CodeBlock: FC<CodeBlockProps> = ({ title, code, styles }) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {

    if(title === 'CSS') {
      // Remove the @content comment from the CSS code block since it doesn't add value there and just clutters the code. 
      // The content is already rendered in the preview and shown as a tooltip on the HTML code block.
      // Remove codes between @Hide and @HideEnds comments as well
      const cleanedCode = code
        .replace(/\/\*\s*@content:\s*"([^"]+)"\s*\*\/\n?/, '')
        .replace(/\/\*\s*@Hide\s*\*\/[\s\S]*?\/\*\s*@HideEnds\s*\*\//g, '');

      if (codeRef.current) {
        codeRef.current.textContent = cleanedCode;
      }
    }


  },[title, code])

  const handleCopy = useCallback(async () => {
    const node = codeRef.current;
    if (!node) return;

    // Highlight the code text so the user can see what was copied
    const selection = window.getSelection();
    if (selection) {
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    }

    try {
      await navigator.clipboard.writeText(code);
    } catch {
      try {
        document.execCommand('copy');
      } catch {
        return;
      }
    }

    setCopied(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 1500);
  }, [code]);

  return (
    <div className={styles.code_panel}>
      <header className={styles.code_panel_header}>
        <span className={styles.code_title}>{title}</span>
        <button
          type="button"
          className={`${styles.code_copy_button} ${copied ? styles.code_copy_button_copied : ''}`}
          onClick={handleCopy}
          aria-label={`Copy ${title} to clipboard`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </header>
      <code data-title={title} ref={codeRef} className={styles.code_block}>
        {code}
      </code>
    </div>
  );
};

const CodePanel: FC<CodePanelProps> = ({ cssString, content, styles }) => {
  return (
    <div className={styles.inspect_code}>
      <CodeBlock title="HTML" code={`<span class="loader">${content ?? ''}</span>`} styles={styles} />
      <CodeBlock title="CSS" code={cssString} styles={styles} />
    </div>
  );
};

export default CodePanel;
