import type { FC, HTMLProps } from "react";
import { LevelProvider } from "./context";

/**
 * main element wrapped with `LevelProvider`
 */
export const Main: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <main {...props} />
  </LevelProvider>
);

/**
 * section element wrapped with `LevelProvider`
 */
export const Section: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <section {...props} />
  </LevelProvider>
);

/**
 * header element wrapped with `LevelProvider`
 */
export const Header: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <header {...props} />
  </LevelProvider>
);

/**
 * footer element wrapped with `LevelProvider`
 */
export const Footer: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <footer {...props} />
  </LevelProvider>
);

/**
 * article element wrapped with `LevelProvider`
 */
export const Article: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <article {...props} />
  </LevelProvider>
);

/**
 * aside element wrapped with `LevelProvider`
 */
export const Aside: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <aside {...props} />
  </LevelProvider>
);

/**
 * nav element wrapped with `LevelProvider`
 */
export const Nav: FC<HTMLProps<HTMLElement>> = (props) => (
  <LevelProvider>
    <nav {...props} />
  </LevelProvider>
);
