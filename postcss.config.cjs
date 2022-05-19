const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssNormalize = require('postcss-normalize');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		autoprefixer,
		postcssImport,
		postcssNormalize,
		postcssFlexbugsFixes,
		postcssPresetEnv({
			autoprefixer: {
				flexbox: 'no-2009'
			},
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-properties': false
			}
		})
	]
};
