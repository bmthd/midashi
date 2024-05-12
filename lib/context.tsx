"use client";

import { createContext, useContext, useMemo, type FC, type HTMLProps, type ReactNode } from "react";

/** Number applicable to headings. */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HeadingLevelContext = createContext<HeadingLevel>(1);

/**
 * Get the current heading level of current context.
 */
export const useCurrentLevel = () => useContext(HeadingLevelContext);

/**
 * Get the next heading level of current context.
 */
export const useNextLevel = (): HeadingLevel => {
  const level = useCurrentLevel();
  return useMemo(() => Math.min(6, level + 1), [level]) as HeadingLevel;
};

/**
 * Provider for the next heading level.
 */
export const NextHeadingLevelProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const level = useNextLevel();
  return <HeadingLevelContext.Provider value={level}>{children}</HeadingLevelContext.Provider>;
};

const Case = {
  1: (props) => <h1 {...props} />,
  2: (props) => <h2 {...props} />,
  3: (props) => <h3 {...props} />,
  4: (props) => <h4 {...props} />,
  5: (props) => <h5 {...props} />,
  6: (props) => <h6 {...props} />,
} as const satisfies Record<
  HeadingLevel,
  (props: HTMLProps<HTMLHeadingElement>) => React.JSX.Element
>;

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
export const H: FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  const level = useCurrentLevel();
  const Component = Case[level];
  return <Component {...props} />;
};
