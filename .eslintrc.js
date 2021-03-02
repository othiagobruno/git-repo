module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier/prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    },
};
