"use client";

import {
  type FC,
  type HTMLProps,
  type ReactNode,
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  useMemo,
  useRef,
  useEffect,
} from "react";

/** String literal type for heading levels */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const nextLevel = (level: HeadingLevel): HeadingLevel => Math.min(level + 1, 6) as HeadingLevel;

type ContextProps = {
  level: HeadingLevel;
  hasHeading: boolean;
  setHasHeading: Dispatch<SetStateAction<boolean>>;
};

const LevelContext = createContext<ContextProps>({
  level: 1,
  hasHeading: false,
  setHasHeading: () => {},
});

/**
 * Get the current heading level of current context.
 */
export const useCurrentLevel = () => useContext(LevelContext);

/**
 * Get the next heading level of current context.
 */
export const useNextLevel = () => {
  const { level } = useCurrentLevel();
  return nextLevel(level);
};

type LevelProviderProps =
  | {
      children: ReactNode;
      reset: boolean;
      level?: undefined;
    }
  | {
      children: ReactNode;
      level: HeadingLevel;
      reset?: undefined;
    }
  | {
      children: ReactNode;
      reset?: undefined;
      level?: undefined;
    };

/**
 * Provider for the next heading level.
 */
export const LevelProvider: FC<LevelProviderProps> = ({ level: Level, reset, ...props }) => {
  const { level: parentLevel } = useCurrentLevel();
  const count = useH1Count();
  const [hasHeading, setHasHeading] = useState(false);
  const shouldNotIncrement = count === 0 && parentLevel === 1;
  const level = Level ?? !shouldNotIncrement ? nextLevel(parentLevel) : parentLevel;
  const value = useMemo(() => ({ level, hasHeading, setHasHeading }), [level, hasHeading]);
  return <LevelContext.Provider {...{ value, ...props }} />;
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

const useH1Count = (level?: HeadingLevel) => {
  const countRef = useRef(0);

  useEffect(() => {
    if (level === 1) {
      countRef.current += 1;

      return () => {
        countRef.current -= 1;
      };
    }
  }, [level]);

  return countRef.current;
};

/**
 * Renders the heading component according to the number of times the `LevelProvider` is nested.
 *
 * usage:
 * ```tsx
 * export const Page: React.FC = () => (
 *  <>
 *   <H>Heading</H> // this will render <h1>Heading</h1>
 *   <LevelProvider>
 *    <H>Heading2</H> // this will render <h2>Heading2</h2>
 *    <LevelProvider>
 *     <H>Heading3</H> // this will render <h3>Heading3</h3>
 *    </LevelProvider>
 *   </LevelProvider>
 *  </>
 * )
 * ```
 */
export const H: FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  const { level } = useCurrentLevel();
  const count = useH1Count(level);
  if (count > 1) {
    throw new Error("Only one <h1> is allowed in the document");
  }
  const Component = Case[level];
  return <Component {...props} />;
};
