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
