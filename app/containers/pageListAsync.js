import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';
// Landing Page
export const Landing = loadable(() => import('./Landing'), {
  fallback: <Loading />,
});

// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});

export const First = loadable(() => import('./First'), {
  fallback: <Loading />,
});
export const Second = loadable(() => import('./Second'), {
  fallback: <Loading />,
});
export const ThirdPage = loadable(() => import('./ThirdPage'), {
  fallback: <Loading />,
});
export const Four = loadable(() => import('./Four'), {
  fallback: <Loading />,
});
export const Five = loadable(() => import('./Five'), {
  fallback: <Loading />,
});
export const Six = loadable(() => import('./Six'), {
  fallback: <Loading />,
});
export const Purchase = loadable(() => import('./Purchase'), {
  fallback: <Loading />,
});
