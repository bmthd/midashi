import type { FC, HTMLProps } from "react";
import { NextHeadingLevelProvider, useCurrentLevel, type HeadingLevel } from "./context";

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

const Case = {
  1: (props) => <h1 {...props} />,
  2: (props) => <h2 {...props} />,
  3: (props) => <h3 {...props} />,
  4: (props) => <h4 {...props} />,
  5: (props) => <h5 {...props} />,
  6: (props) => <h6 {...props} />,
} as const satisfies Record<HeadingLevel, (props: HTMLProps<HTMLHeadingElement>) => JSX.Element>;

/**
 * Renders the heading component according to the number of times the `NextHeadingLevelProvider` is nested.
 *
 * usage:
 * ```tsx
 * export const Page: React.FC = () => (
 *  <>
 *   <H>Heading</H> // this will render <h1>Heading</h1>
 *   <NextHeadingLevelProvider>
 *    <H>Heading2</H> // this will render <h2>Heading2</h2>
 *    <NextHeadingLevelProvider>
 *     <H>Heading3</H> // this will render <h3>Heading3</h3>
 *    </NextHeadingLevelProvider>
 *   </NextHeadingLevelProvider>
 *  </>
 * )
 * ```
 */
export const H: FC<HTMLProps<HTMLHeadingElement>> = ({ children, ...props }) => {
  const level = useCurrentLevel();
  const Component = Case[level];
  return <Component {...props}>{children}</Component>;
};
