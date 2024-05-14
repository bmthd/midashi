import type { FC, HTMLProps } from "react";
import { NextHeadingLevelProvider } from "./context";

/**
 * main element wrapped with `NextHeadingLevelProvider`
 */
export const Main: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <main {...props} />
  </NextHeadingLevelProvider>
);

/**
 * section element wrapped with `NextHeadingLevelProvider`
 */
export const Section: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <section {...props} />
  </NextHeadingLevelProvider>
);

/**
 * header element wrapped with `NextHeadingLevelProvider`
 */
export const Header: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <header {...props} />
  </NextHeadingLevelProvider>
);

/**
 * footer element wrapped with `NextHeadingLevelProvider`
 */
export const Footer: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <footer {...props} />
  </NextHeadingLevelProvider>
);

/**
 * article element wrapped with `NextHeadingLevelProvider`
 */
export const Article: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <article {...props} />
  </NextHeadingLevelProvider>
);

/**
 * aside element wrapped with `NextHeadingLevelProvider`
 */
export const Aside: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <aside {...props} />
  </NextHeadingLevelProvider>
);

/**
 * nav element wrapped with `NextHeadingLevelProvider`
 */
export const Nav: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingLevelProvider>
    <nav {...props} />
  </NextHeadingLevelProvider>
);