import { render, renderHook, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { H, Main, NextHeadingLevelProvider, Section, useCurrentLevel, useNextLevel } from "../lib";

describe('e2e', () => {
    it('should render all headings', () => {
        const expected = render(<>
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
            </main></>)

        const result = render(<>
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
        </>)

        screen.debug(result.container)

        expect(expected.container.innerHTML).toBe(result.container.innerHTML);
    })
})

describe("NextHeadingLevelProvider component", () => {
    it("should render only children", () => {
        const result = render(
            <NextHeadingLevelProvider>
                <div />
            </NextHeadingLevelProvider>)
        expect(result.container).toContainHTML('<div></div>');
    });

    it("should render children with the next heading level", () => {
        const result = render(
            <NextHeadingLevelProvider>
                <H />
            </NextHeadingLevelProvider>)
        expect(result.container.querySelector('h2')).toContainHTML('<h2></h2>');
    });
});

describe("Main component", () => {
    it("should render main element", () => {
        const result = render(<Main />);
        expect(result.container.querySelector('main')).toContainHTML('<main></main>');
    });

    it("reflected the change of heading level", () => {
        const result = render(
            <Main>
                <H />
            </Main>
        );
        expect(result.container.querySelector('h2')).toContainHTML('<h2></h2>');
    });

    it("reflects the attribute of the main element", () => {
        const result = render(
            <Main id="main" />
        );
        expect(result.container.querySelector('main')).toHaveAttribute('id', 'main');
    });
});

describe("Section component", () => {
    it("should render section element", () => {
        const result = render(<Section />);
        expect(result.container.querySelector('section')).toContainHTML('<section></section>');
    });

    it("reflected the change of heading level", () => {
        const result = render(
            <Section>
                <H />
            </Section>
        );
        expect(result.container.querySelector('h2')).toContainHTML('<h2></h2>');
    });

    it("reflects the attribute of the section element", () => {
        const result = render(
            <Section className="section" />
        );
        expect(result.container.querySelector('section')).toHaveClass('section');
    });
});

describe("H component", () => {
    it("should render h1 element", () => {
        const result = render(<H />);
        expect(result.container.querySelector('h1')).toContainHTML('<h1></h1>');
    });

    it("should render h2 element when surrounded by Provider once", () => {
        const result = render(<NextHeadingLevelProvider><H /></NextHeadingLevelProvider>);
        expect(result.container.querySelector('h2')).toContainHTML('<h2></h2>');
    });
    it('should render h6 element when surrounded by Provider more than 5 times', () => {
        const result = render(
            <NextHeadingLevelProvider>
                <NextHeadingLevelProvider>
                    <NextHeadingLevelProvider>
                        <NextHeadingLevelProvider>
                            <NextHeadingLevelProvider>
                                <NextHeadingLevelProvider>
                                    <H />
                                </NextHeadingLevelProvider>
                            </NextHeadingLevelProvider>
                        </NextHeadingLevelProvider>
                    </NextHeadingLevelProvider>
                </NextHeadingLevelProvider>
            </NextHeadingLevelProvider>)
        expect(result.container.querySelector('h6')).toContainHTML('<h6></h6>');
    });
});

describe('useCurrentLevel', () => {
    it('should return 1 by default', () => {
        const result = renderHook(() => useCurrentLevel());
        expect(result.result.current).toBe(1);
    });

    it('should return 2 when surrounded by Provider once', () => {
        const result = renderHook(() => useCurrentLevel(), {
            wrapper: ({ children }) => <NextHeadingLevelProvider>{children}</NextHeadingLevelProvider>
        });
        expect(result.result.current).toBe(2);
    });

    it('should return 6 when surrounded by Provider more than 5 times', () => {
        const result = renderHook(() => useCurrentLevel(), {
            wrapper: ({ children }) => (
                <NextHeadingLevelProvider>
                    <NextHeadingLevelProvider>
                        <NextHeadingLevelProvider>
                            <NextHeadingLevelProvider>
                                <NextHeadingLevelProvider>
                                    <NextHeadingLevelProvider>
                                        {children}
                                    </NextHeadingLevelProvider>
                                </NextHeadingLevelProvider>
                            </NextHeadingLevelProvider>
                        </NextHeadingLevelProvider>
                    </NextHeadingLevelProvider>
                </NextHeadingLevelProvider>
            )
        });
        expect(result.result.current).toBe(6);
    }
    )
})

describe('useNextLevel', () => {
    it('should return 2 by default', () => {
        const result = renderHook(() => useNextLevel());
        expect(result.result.current).toBe(2);
    });

    it('should return 3 when surrounded by Provider once', () => {
        const result = renderHook(() => useNextLevel(), {
            wrapper: ({ children }) => <NextHeadingLevelProvider>{children}</NextHeadingLevelProvider>
        });
        expect(result.result.current).toBe(3);
    });

    it('should return 6 when surrounded by Provider more than 5 times', () => {
        const result = renderHook(() => useNextLevel(), {
            wrapper: ({ children }) => (
                <NextHeadingLevelProvider>
                    <NextHeadingLevelProvider>
                        <NextHeadingLevelProvider>
                            <NextHeadingLevelProvider>
                                <NextHeadingLevelProvider>
                                    <NextHeadingLevelProvider>
                                        {children}
                                    </NextHeadingLevelProvider>
                                </NextHeadingLevelProvider>
                            </NextHeadingLevelProvider>
                        </NextHeadingLevelProvider>
                    </NextHeadingLevelProvider>
                </NextHeadingLevelProvider>
            )
        });
        expect(result.result.current).toBe(6);
    }
    )
})
