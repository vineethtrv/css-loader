import { useCallback, useEffect, useMemo, useState } from 'react';
import { LOADERS } from './loaders';
import { Tile, Menu } from './components';
import { useScrollSpy } from './hooks';
import type { LoadedStyle } from './util';
import ViewCode from './components/ViewCode/ViewCode';
import './App.scss';

function App() {
  const [styleSheets, setStyleSheets] = useState<Record<string, LoadedStyle[]>>({});
  const [loadError, setLoadError] = useState<string | null>(null);
  const [viewCodeVisible, setViewCodeVisible] = useState(false);
  const [currentCssString, setCurrentCssString] = useState('');

  const sortedLoaders = useMemo(() => [...LOADERS].sort((a, b) => a.order - b.order), []);

  useEffect(() => {
    Promise.all(
      LOADERS.map(async (loader) => {
        const loaded = await loader.loadStyles();
        return [loader.name, loaded as LoadedStyle[]] as const;
      })
    )
      .then((entries) => setStyleSheets(Object.fromEntries(entries)))
      .catch((err) => {
        console.error('Failed to load loader styles', err);
        setLoadError(err instanceof Error ? err.message : 'Failed to load loaders');
      });
  }, []);

  const visibleLoaders = useMemo(
    () => sortedLoaders.filter((loader) => styleSheets[loader.name]),
    [sortedLoaders, styleSheets]
  );
  const loaderIds = useMemo(() => visibleLoaders.map((loader) => loader.name), [visibleLoaders]);
  const activeId = useScrollSpy(loaderIds);

  const menuItems = useMemo(
    () =>
      visibleLoaders.map((loader) => ({
        name: loader.name,
        order: loader.order,
        count: styleSheets[loader.name]?.length ?? 0,
      })),
    [visibleLoaders, styleSheets]
  );

  const handleTileClick = useCallback((cssString: string) => {
    setCurrentCssString(cssString);
    setViewCodeVisible(true);
  }, []);

  const handleCloseViewCode = useCallback(() => setViewCodeVisible(false), []);

  const handleRetry = useCallback(() => window.location.reload(), []);

  return (
    <div className="layout">
      <Menu menuItems={menuItems} activeId={activeId} />
      <ViewCode
        cssString={currentCssString}
        show={viewCodeVisible}
        onClose={handleCloseViewCode}
      />

      <div className="container">
        {loadError && (
          <div className="load-error" role="alert">
            <p>Couldn&apos;t load loaders: {loadError}</p>
            <button type="button" onClick={handleRetry}>
              Retry
            </button>
          </div>
        )}
        {visibleLoaders.map((loader) => (
          <section className="section" id={loader.name} key={loader.name}>
            {[...styleSheets[loader.name]]
              .sort((a, b) => a.fileName.localeCompare(b.fileName))
              .map((styleSheet) => (
                <Tile
                  key={styleSheet.fileName}
                  filename={styleSheet.fileName}
                  cssString={styleSheet.raw}
                  styleSheet={styleSheet.styles}
                  onClick={handleTileClick}
                />
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
