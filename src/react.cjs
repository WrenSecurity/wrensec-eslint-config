/*
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.1.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.1.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2024 Wren Security.
 * Portions copyright 2017 ForgeRock AS (based on ISC licensed eslint-config-forgerock package).
 */

/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
    plugins: [
        "react"
    ],
    rules: {
        "react/jsx-boolean-value": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-curly-spacing": ["error", "always"],
        "react/jsx-equals-spacing": "error",
        "react/jsx-filename-extension": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": "error",
        "react/jsx-indent-props": "error",
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": "off", // Left to the developers judgement
        "react/jsx-no-bind": ["error", {
            // Current react version does not support "useCallback" hook yet and we need to use arrow functions in functional components
            "allowArrowFunctions": true
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "off", // No literal issue have been encountered so not enforced
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "error",
        "react/jsx-space-before-closing": "off", // Superseded by react/jsx-tag-spacing
        "react/jsx-tag-spacing": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react/display-name": "error",
        "react/forbid-component-props": "off", // We have nothing explicit we wish to forbid ATM
        "react/forbid-prop-types": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off", // We require setState in our components
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": ["error", {
            "skipShapeProps": true
        }],
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "error",
        "react/require-default-props": "off", // defaultsProps aren't currently used in our components
        "react/require-optimization": "off", // shouldComponentUpdate aren't current used in our components
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "error",
        "react/sort-prop-types": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error"
    }
};
