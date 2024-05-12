"use client";

import { createContext, useContext, useMemo, type FC, type ReactNode } from "react";

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
