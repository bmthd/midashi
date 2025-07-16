import { execSync } from 'child_process';
import { writeFileSync, unlinkSync } from 'fs';
import { describe, it, expect, afterEach } from 'vitest';

describe('ESLint rules for primitive HTML elements', () => {
  const testFileName = 'eslint-test-file.tsx';

  afterEach(() => {
    try {
      unlinkSync(testFileName);
    } catch (_e) {
      // File might not exist, ignore error
    }
  });

  it('should forbid primitive heading elements', () => {
    const testCode = `
import React from 'react';
export const Component = () => <h1>Bad heading</h1>;
`;
    writeFileSync(testFileName, testCode);
    
    let eslintOutput = '';
    try {
      execSync(`npx eslint ${testFileName}`, { cwd: process.cwd(), encoding: 'utf8' });
    } catch (error) {
      eslintOutput = error.stdout || error.message;
    }
    
    expect(eslintOutput).toContain('react/forbid-elements');
    expect(eslintOutput).toContain('<h1> is forbidden');
    expect(eslintOutput).toContain('Use <H> component from midashi');
  });

  it('should forbid primitive semantic elements', () => {
    const testCode = `
import React from 'react';
export const Component = () => (
  <main>
    <section>Content</section>
  </main>
);
`;
    writeFileSync(testFileName, testCode);
    
    let eslintOutput = '';
    try {
      execSync(`npx eslint ${testFileName}`, { cwd: process.cwd(), encoding: 'utf8' });
    } catch (error) {
      eslintOutput = error.stdout || error.message;
    }
    
    expect(eslintOutput).toContain('react/forbid-elements');
    expect(eslintOutput).toContain('<main> is forbidden');
    expect(eslintOutput).toContain('<section> is forbidden');
  });

  it('should allow midashi components', () => {
    const testCode = `
import React from 'react';
import { H, Main, Section } from 'midashi';
export const Component = () => (
  <Main>
    <H>Good heading</H>
    <Section>Content</Section>
  </Main>
);
`;
    writeFileSync(testFileName, testCode);
    
    let eslintOutput = '';
    let exitCode = 0;
    try {
      execSync(`npx eslint ${testFileName}`, { cwd: process.cwd(), encoding: 'utf8' });
    } catch (error) {
      eslintOutput = error.stdout || error.message;
      exitCode = error.status;
    }
    
    expect(exitCode).toBe(0);
    expect(eslintOutput).not.toContain('react/forbid-elements');
  });
});