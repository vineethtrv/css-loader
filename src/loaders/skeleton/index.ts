import { getDynamicStyle } from '../../util';
const styleModules = import.meta.glob('./*.module.css');
const rawModules = import.meta.glob('./*.module.css', { query: '?raw', import: 'default' });

export const loadSkeletonStyles = getDynamicStyle(styleModules, rawModules);
