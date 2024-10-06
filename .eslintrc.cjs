module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/prettier',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
        'prettier'
    ],
    //ignorePatterns: ['*.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        {
            files: ['*.svelte.js'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        },
        {
            files: ['*.svelte.ts'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    rules: {
        'import/no-unresolved': [0, { caseSensitive: false }],
        'svelte/no-unused-svelte-ignore': 'off'
    },
    settings: {}
};
