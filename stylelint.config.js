/** @type {import('stylelint').Config} */

export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
    ],
    rules: {
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes'],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'value-keyword-case': null,
    },
}