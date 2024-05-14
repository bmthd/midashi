"use client";

import { type FC, type HTMLProps, type ReactNode, createContext, useContext } from "react";

const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

/** String literal type for heading levels */
export type HeadingLevel = (typeof headingLevels)[number];

const getNextLevel = (level: HeadingLevel): HeadingLevel => {
  const index = headingLevels.indexOf(level);
  return headingLevels[index + 1] || level;
};

const HeadingLevelContext = createContext<HeadingLevel>("h1");

/**
 * Get the current heading level of current context.
 */
export const useCurrentLevel = () => useContext(HeadingLevelContext);

/**
 * Get the next heading level of current context.
 */
export const useNextLevel = () => {
  const level = useCurrentLevel();
  return getNextLevel(level);
};

/**
 * Provider for the next heading level.
 */
export const NextHeadingLevelProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const level = useNextLevel();
  return <HeadingLevelContext.Provider value={level}>{children}</HeadingLevelContext.Provider>;
};

const Case = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
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
