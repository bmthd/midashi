import type { FC, HTMLProps } from "react";
import { NextHeadingProvider } from "./context";

/**
 * main element wrapped with `NextHeadingProvider`
 */
export const Main: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <main {...props} />
  </NextHeadingProvider>
);

/**
 * section element wrapped with `NextHeadingProvider`
 */
export const Section: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <section {...props} />
  </NextHeadingProvider>
);

/**
 * header element wrapped with `NextHeadingProvider`
 */
export const Header: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <header {...props} />
  </NextHeadingProvider>
);

/**
 * footer element wrapped with `NextHeadingProvider`
 */
export const Footer: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <footer {...props} />
  </NextHeadingProvider>
);

/**
 * article element wrapped with `NextHeadingProvider`
 */
export const Article: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <article {...props} />
  </NextHeadingProvider>
);

/**
 * aside element wrapped with `NextHeadingProvider`
 */
export const Aside: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <aside {...props} />
  </NextHeadingProvider>
);

/**
 * nav element wrapped with `NextHeadingProvider`
 */
export const Nav: FC<HTMLProps<HTMLElement>> = (props) => (
  <NextHeadingProvider>
    <nav {...props} />
  </NextHeadingProvider>
);
