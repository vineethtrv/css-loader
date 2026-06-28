import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { RgbaColorPicker, HexColorPicker } from 'react-colorful';

interface Props {
  cssString: string;
  onCssChange: (next: string) => void;
  styles: CSSModuleClasses;
}

interface ColorVar {
  name: string; // e.g. "--color-1"
  value: string; // raw value as written in CSS
  format: 'hex' | 'rgba';
}

interface Rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}

const COLOR_VAR_RE = /(--[\w-]+)\s*:\s*([^;]+);/g;

const parseColor = (value: string): { rgba: Rgba; format: 'hex' | 'rgba' } | null => {
  const trimmed = value.trim();
  const hexMatch = trimmed.match(/^#([0-9a-fA-F]{3,8})$/);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3 || hex.length === 4) {
      hex = hex
        .split('')
        .map((c) => c + c)
        .join('');
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
    return { rgba: { r, g, b, a }, format: 'hex' };
  }
  const rgbaMatch = trimmed.match(
    /^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+%?))?\s*\)$/i
  );
  if (rgbaMatch) {
    const r = Number(rgbaMatch[1]);
    const g = Number(rgbaMatch[2]);
    const b = Number(rgbaMatch[3]);
    let a = 1;
    if (rgbaMatch[4] !== undefined) {
      a = rgbaMatch[4].endsWith('%')
        ? parseFloat(rgbaMatch[4]) / 100
        : parseFloat(rgbaMatch[4]);
    }
    return { rgba: { r, g, b, a }, format: 'rgba' };
  }
  return null;
};

const toHex = ({ r, g, b }: Rgba): string => {
  const h = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`.toUpperCase();
};

const toRgba = ({ r, g, b, a }: Rgba): string =>
  `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Number(a.toFixed(2))})`;

const formatColor = (rgba: Rgba, format: 'hex' | 'rgba'): string => {
  // Hex can't represent alpha < 1 cleanly — fall back to rgba when alpha is reduced.
  if (format === 'hex' && rgba.a < 1) return toRgba(rgba);
  return format === 'hex' ? toHex(rgba) : toRgba(rgba);
};

const SettingsPanel: FC<Props> = ({ cssString, onCssChange, styles }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const colorVars = useMemo<ColorVar[]>(() => {
    const result: ColorVar[] = [];
    let match: RegExpExecArray | null;
    COLOR_VAR_RE.lastIndex = 0;
    while ((match = COLOR_VAR_RE.exec(cssString)) !== null) {
      const value = match[2].trim();
      const parsed = parseColor(value);
      if (parsed) {
        result.push({ name: match[1], value, format: parsed.format });
      }
    }
    return result;
  }, [cssString]);

  // Parse current `--size` value (in px). Defaults to 1 if absent or unparseable.
  const sizeValue = useMemo(() => {
    const match = cssString.match(/--size\s*:\s*([\d.]+)px\s*;/);
    return match ? parseFloat(match[1]) : 1;
  }, [cssString]);
  const hasSizeVar = /--size\s*:/.test(cssString);

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openIndex]);

  const handleChange = (varName: string, nextValue: string) => {
    // Hyphens have no special meaning outside character classes, so no escaping needed.
    const re = new RegExp(`(${varName}\\s*:\\s*)([^;]+)(;)`);
    onCssChange(cssString.replace(re, `$1${nextValue}$3`));
  };

  const handleSizeChange = (next: number) => {
    handleChange('--size', `${next}px`);
  };

  return (
    <div className={styles.inspect_settings}>
      <h2>
        Customize
      </h2>
      <h3 className={styles.subtitle}>Color </h3>
      <div className={styles.color_variable}>
        {colorVars.map((variable, index) => {
          const parsed = parseColor(variable.value);
          const rgba = parsed?.rgba ?? { r: 0, g: 0, b: 0, a: 1 };
          const isOpen = openIndex === index;
          const useHexPicker = variable.format === 'hex' && rgba.a === 1;

          return (
            <div
              key={variable.name}
              className={styles.color_variable_wrap}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <button
                type="button"
                className={styles.color_variable_switch}
                style={{ background: variable.value }}
                title={`${variable.name}: ${variable.value}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              />
              {isOpen && (
                <div ref={popoverRef} className={styles.color_picker_popover}>
                  {useHexPicker ? (
                    <HexColorPicker
                      color={toHex(rgba)}
                      onChange={(hex) => handleChange(variable.name, hex.toUpperCase())}
                    />
                  ) : (
                    <RgbaColorPicker
                      color={rgba}
                      onChange={(next) =>
                        handleChange(variable.name, formatColor(next, variable.format))
                      }
                    />
                  )}
                  <input
                    type="text"
                    className={styles.color_value_input}
                    value={variable.value}
                    onChange={(e) => handleChange(variable.name, e.target.value)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {hasSizeVar && (
        <div className={styles.size_control}>
          <h3 className={styles.subtitle}>
            Size
            <span className={styles.size_value}>{sizeValue}px</span>
          </h3>
          <input
            type="range"
            min={0.25}
            max={4}
            step={0.05}
            value={sizeValue}
            onChange={(e) => handleSizeChange(parseFloat(e.target.value))}
            className={styles.size_slider}
          />
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
