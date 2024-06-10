import { render, renderHook, screen } from "@testing-library/react";
import type { FC, HTMLProps } from "react";
import { describe, expect, it } from "vitest";
import { H, Main, LevelProvider, Section, useCurrentLevel, useNextLevel } from "../lib";
import { Article, Aside, Footer, Header, Nav } from "../lib/components";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

describe("e2e", () => {
  it("should render all headings", () => {
    const expected = render(
      <>
        <h1>Heading 1</h1>
        <main>
          <h2>Heading 2</h2>
          <section>
            <h3>Heading 3</h3>
            <section>
              <h4>Heading 4</h4>
              <section>
                <h5>Heading 5</h5>
                <section>
                  <h6>Heading 6</h6>
                </section>
              </section>
            </section>
          </section>
        </main>
      </>,
    );

    const result = render(
      <>
        <H>Heading 1</H>
        <Main>
          <H>Heading 2</H>
          <Section>
            <H>Heading 3</H>
            <Section>
              <H>Heading 4</H>
              <Section>
                <H>Heading 5</H>
                <Section>
                  <H>Heading 6</H>
                </Section>
              </Section>
            </Section>
          </Section>
        </Main>
      </>,
    );

    screen.debug(result.container);

    expect(expected.container.innerHTML).toBe(result.container.innerHTML);
  });
});

describe("LevelProvider component", () => {
  it("should render only children", () => {
    const result = render(
      <LevelProvider>
        <div />
      </LevelProvider>,
    );
    expect(result.container).toContainHTML("<div></div>");
  });

  it("should render children with the next heading level", () => {
    const result = render(
      <LevelProvider>
        <H />
      </LevelProvider>,
    );
    expect(result.container.querySelector("h2")).toContainHTML("<h2></h2>");
  });
});

const cases: { Target: FC<HTMLProps<HTMLElement>>; expected: string }[] = [
  {
    Target: Main,
    expected: "<main></main>",
  },
  {
    Target: Section,
    expected: "<section></section>",
  },
  {
    Target: Header,
    expected: "<header></header>",
  },
  {
    Target: Footer,
    expected: "<footer></footer>",
  },
  {
    Target: Article,
    expected: "<article></article>",
  },
  {
    Target: Aside,
    expected: "<aside></aside>",
  },
  {
    Target: Nav,
    expected: "<nav></nav>",
  },
];

describe.each(cases)("$Target.name Component", ({ Target, expected }) => {
  it(`should render ${expected}`, () => {
    const result = render(<Target />);
    expect(result.container).toContainHTML(expected);
  });

  it("should reflect the change of heading level", () => {
    const result = render(
      <>
        <H />
        <Target>
          <H />
        </Target>
      </>,
    );
    expect(result.container.querySelector("h2")).toContainHTML("<h2></h2>");
  });

  it("should reflect the attribute of the element", () => {
    const result = render(<Target className="target" />);
    expect(result.container.querySelector(Target.name.toLowerCase())).toHaveClass("target");
  });
});

describe("H component", () => {
  it("should render h1 element", () => {
    const result = render(<H />);
    expect(result.container.querySelector("h1")).toContainHTML("<h1></h1>");
  });

  it("should render h2 element when surrounded by Provider once", () => {
    const result = render(
      <>
        <H />
        <LevelProvider>
          <H />
        </LevelProvider>
      </>,
    );
    screen.debug(result.container);
    expect(result.container.querySelector("h2")).toContainHTML("<h2></h2>");
  });
  it("should render h6 element when surrounded by Provider more than 5 times", () => {
    const result = render(
      <LevelProvider>
        <LevelProvider>
          <LevelProvider>
            <LevelProvider>
              <LevelProvider>
                <LevelProvider>
                  <H />
                </LevelProvider>
              </LevelProvider>
            </LevelProvider>
          </LevelProvider>
        </LevelProvider>
      </LevelProvider>,
    );
    expect(result.container.querySelector("h6")).toContainHTML("<h6></h6>");
  });

  it("should throw an error when h1 is already rendered", () => {
    expect(() =>
      render(
        <>
          <H />
          <H />
        </>,
      ),
    ).toThrowError("Only one <h1> is allowed in the document");
  });
});

describe("useCurrentLevel", () => {
  it("should return 1 by default", () => {
    const result = renderHook(() => useCurrentLevel());
    expect(result.result.current).toBe("h1");
  });

  it("should return 2 when surrounded by Provider once", () => {
    const result = renderHook(() => useCurrentLevel(), {
      wrapper: ({ children }) => <LevelProvider>{children}</LevelProvider>,
    });
    expect(result.result.current).toBe("h2");
  });

  it("should return 6 when surrounded by Provider more than 5 times", () => {
    const result = renderHook(() => useCurrentLevel(), {
      wrapper: ({ children }) => (
        <LevelProvider>
          <LevelProvider>
            <LevelProvider>
              <LevelProvider>
                <LevelProvider>
                  <LevelProvider>{children}</LevelProvider>
                </LevelProvider>
              </LevelProvider>
            </LevelProvider>
          </LevelProvider>
        </LevelProvider>
      ),
    });
    expect(result.result.current).toBe("h6");
  });
});

describe("useNextLevel", () => {
  it("should return 2 by default", () => {
    const result = renderHook(() => useNextLevel());
    expect(result.result.current).toBe("2");
  });

  it("should return 3 when surrounded by Provider once", () => {
    const result = renderHook(() => useNextLevel(), {
      wrapper: ({ children }) => <LevelProvider>{children}</LevelProvider>,
    });
    expect(result.result.current).toBe("h3");
  });

  it("should return 6 when surrounded by Provider more than 5 times", () => {
    const result = renderHook(() => useNextLevel(), {
      wrapper: ({ children }) => (
        <LevelProvider>
          <LevelProvider>
            <LevelProvider>
              <LevelProvider>
                <LevelProvider>
                  <LevelProvider>{children}</LevelProvider>
                </LevelProvider>
              </LevelProvider>
            </LevelProvider>
          </LevelProvider>
        </LevelProvider>
      ),
    });
    expect(result.result.current).toBe("h6");
  });
});
