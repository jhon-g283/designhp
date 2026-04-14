// @splidejs/react-splide の package.json exports フィールドに "types" 条件がないため
// moduleResolution: "bundler" で型解決できない。パッケージ本来の型を参照して再定義する。
declare module '@splidejs/react-splide' {
  import type { ComponentType, FC, HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react';

  export interface SplideOptions {
    type?: 'slide' | 'loop' | 'fade';
    rewind?: boolean;
    speed?: number;
    height?: string | number;
    width?: string | number;
    gap?: string | number;
    perPage?: number;
    perMove?: number;
    autoplay?: boolean | 'pause';
    interval?: number;
    arrows?: boolean;
    pagination?: boolean;
    lazyLoad?: boolean | 'nearby' | 'sequential';
    padding?: string | number | { left?: string | number; right?: string | number };
    breakpoints?: Record<number, Omit<SplideOptions, 'breakpoints'>>;
    [key: string]: unknown;
  }

  export interface SplideProps extends HTMLAttributes<HTMLElement> {
    options?: SplideOptions;
    hasTrack?: boolean;
    tag?: 'div' | 'section' | 'header' | 'footer' | 'nav';
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: FC<LiHTMLAttributes<HTMLLIElement>>;
  export const SplideTrack: FC<HTMLAttributes<HTMLDivElement>>;
}

declare module '@splidejs/react-splide/css';
declare module '@splidejs/react-splide/css/core';
declare module '@splidejs/react-splide/css/*';
