export const LOADERS = [
  {
    name: 'circle',
    order: 1,
    loadStyles: () => import('./circle').then((m) => m.loadCircleStyles()),
  },
  {
    name: 'bubble',
    order: 2,
    loadStyles: () => import('./bubble').then((m) => m.loadBubbleStyles()),
  },
  {
    name: 'rect',
    order: 3,
    loadStyles: () => import('./rect').then((m) => m.loadRectStyles()),
  },
  {
    name: 'line',
    order: 4,
    loadStyles: () => import('./line').then((m) => m.loadLineStyles()),
  },
  {
    name: 'progress',
    order: 5,
    loadStyles: () => import('./progress').then((m) => m.loadProgressStyles()),
  },
  {
    name: 'text',
    order: 6,
    loadStyles: () => import('./text').then((m) => m.loadTextStyles()),
  },
  {
    name: 'objects',
    order: 7,
    loadStyles: () => import('./objects').then((m) => m.loadObjectsStyles()),
  },
  {
    name: 'graph',
    order: 8,
    loadStyles: () => import('./graph').then((m) => m.loadGraphStyles()),
  },
  {
    name: 'skeleton',
    order: 9,
    loadStyles: () => import('./skeleton').then((m) => m.loadSkeletonStyles()),
  },
];
