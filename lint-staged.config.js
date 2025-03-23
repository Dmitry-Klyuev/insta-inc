/** @type {import('lint-staged').Configuration} */

export default {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix --no-error-on-unmatched-pattern',
    'prettier --write --ignore-unknown',
  ],
  '*.{css,scss}': 'stylelint --fix --allow-empty-input',
};
