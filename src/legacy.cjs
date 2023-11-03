/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
    rules: {
        "comma-dangle": "error",
        "curly": "error",
        "eqeqeq": ["error", "smart"],
        "keyword-spacing": "error",
        "no-array-constructor": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-cond-assign": ["error", "always"],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": "error",
        "no-use-before-define": "error",
        "no-with": "error",
        "one-var": ["error", { "var": "always", "let": "never", "const": "never" }],
        "quote-props": ["error", "as-needed", {"keywords": true, "unnecessary": false}],
        "radix": "error",
        "semi": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "wrap-iife": 2
    }
};
