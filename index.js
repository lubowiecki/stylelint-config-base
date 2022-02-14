module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-prettier/recommended',
	],
	rules: {
		'no-empty-source': null,
		'scss/at-rule-no-unknown': null,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'use',
					'forward',
					'mixin',
					'include',
					'at-root',
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'layer',
				],
			},
		],
	},
};
