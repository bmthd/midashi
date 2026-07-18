import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
// biome-ignore lint/correctness/noUnusedImports: Required for JSX
import React from "react";
import { SimpleExample, WebsiteExample } from "../sample";

describe("Sample Examples", () => {
  describe("SimpleExample", () => {
    it("should render with proper heading hierarchy", () => {
      const result = render(<SimpleExample />);
      
      // Check that all heading levels are present and in correct order
      expect(result.container.querySelector("h1")).toHaveTextContent("Page Title");
      expect(result.container.querySelector("h2")).toHaveTextContent("Main Content");
      expect(result.container.querySelector("h3")).toHaveTextContent("First Section");
      expect(result.container.querySelector("h4")).toHaveTextContent("Subsection");
      
      // Check document structure
      expect(result.container.querySelector("main")).toBeInTheDocument();
      expect(result.container.querySelectorAll("section")).toHaveLength(3); // 2 direct + 1 nested
    });

    it("should render valid HTML structure", () => {
      const result = render(<SimpleExample />);
      
      // Verify the main element contains the h2
      const main = result.container.querySelector("main");
      expect(main?.querySelector("h2")).toHaveTextContent("Main Content");
      
      // Verify sections contain their respective headings - get direct children of main
      const mainSections = result.container.querySelectorAll("main > section");
      expect(mainSections[0].querySelector("h3")).toHaveTextContent("First Section");
      expect(mainSections[0].querySelector("h4")).toHaveTextContent("Subsection");
      expect(mainSections[1].querySelector("h3")).toHaveTextContent("Second Section");
    });
  });

  describe("WebsiteExample", () => {
    it("should render all semantic elements", () => {
      const result = render(<WebsiteExample />);
      
      // Check all semantic elements are present
      expect(result.container.querySelector("header")).toBeInTheDocument();
      expect(result.container.querySelector("nav")).toBeInTheDocument();
      expect(result.container.querySelector("main")).toBeInTheDocument();
      expect(result.container.querySelector("article")).toBeInTheDocument();
      expect(result.container.querySelector("aside")).toBeInTheDocument();
      expect(result.container.querySelector("footer")).toBeInTheDocument();
    });

    it("should have proper heading hierarchy", () => {
      const result = render(<WebsiteExample />);
      
      // Verify heading structure:
      // - h1: Page title (sr-only)
      // - header h2: Welcome to Our Website
      // - nav h2: Navigation  
      // - main sections h3: About Us, Our Services, etc.
      expect(result.container.querySelector("h1")).toHaveTextContent("Welcome to Our Website");
      expect(result.container.querySelector("header h2")).toHaveTextContent("Welcome to Our Website");
      expect(result.container.querySelector("nav h2")).toHaveTextContent("Navigation");
      
      // Check main content headings (About Us, Our Services sections, Featured Project article, Testimonials aside)
      const mainContent = result.container.querySelector("main");
      const h3s = mainContent?.querySelectorAll("h3");
      expect(h3s).toHaveLength(4); // About Us, Our Services, Featured Project, Testimonials
    });

    it("should have corrected className attributes", () => {
      const result = render(<WebsiteExample />);
      
      // Verify CSS classes are properly applied (no 'classname' attributes)
      expect(result.container.querySelector("header")).toHaveClass("bg-gray-900", "text-white");
      expect(result.container.querySelector("nav")).toHaveClass("bg-gray-900", "text-white", "w-64");
      expect(result.container.querySelector("main")).toHaveClass("flex-1", "py-8", "px-6");
    });
  });

  describe("HTML Output Validation", () => {
    it("SimpleExample should match expected HTML structure", () => {
      const result = render(<SimpleExample />);
      
      // Verify the exact HTML structure matches what's documented
      const h1 = result.container.querySelector("h1");
      const main = result.container.querySelector("main");
      const h2 = main?.querySelector("h2");
      const mainSections = main?.querySelectorAll("main > section");
      
      expect(h1).toHaveTextContent("Page Title");
      expect(h2).toHaveTextContent("Main Content");
      expect(mainSections).toHaveLength(2); // Direct children of main
      
      // Verify nested structure
      const firstSection = mainSections?.[0];
      const nestedSection = firstSection?.querySelector("section");
      expect(firstSection?.querySelector("h3")).toHaveTextContent("First Section");
      expect(nestedSection?.querySelector("h4")).toHaveTextContent("Subsection");
    });

    it("should demonstrate heading level progression", () => {
      const result = render(<SimpleExample />);
      
      // Verify progressive heading levels
      const headings = result.container.querySelectorAll("h1, h2, h3, h4, h5, h6");
      const headingLevels = Array.from(headings).map(h => h.tagName.toLowerCase());
      
      expect(headingLevels).toEqual(["h1", "h2", "h3", "h4", "h3"]);
    });
  });
});