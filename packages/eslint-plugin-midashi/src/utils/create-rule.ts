import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/bmthd/midashi/tree/main/packages/eslint-plugin-midashi/docs/rules/${name}.md`
);