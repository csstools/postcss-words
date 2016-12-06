// tooling
const fs      = require('fs');
const path    = require('path');
const parser  = require('postcss-value-parser');
const postcss = require('postcss');

// plugin
module.exports = postcss.plugin('postcss-words', ({
	functions = ['url'],
	keywords = '.csswords.json'
}) => {
	return (css) => {
		// get the current file path
		const cwf = css.source.input.file;

		// directory by current file or current working directory
		const dir = cwf ? path.dirname(cwf) : process.cwd();

		return (
			typeof keywords === 'string' ? readFile(path.resolve(dir, keywords)).then(
				(json) => JSON.parse(json)
			) : Promise.resolve(keywords)
		).then(
			(words) => {
				css.walkDecls(
					(decl) => {
						const value = parser(decl.value).walk(
							(node) => {
								if (node.type !== 'function' || functions.indexOf(node.value) > -1) {
									if (node.type === 'word' && node.value in words) {
										node.value = words[node.value];
									}
								}
							}
						).toString();

						if (value !== decl.value) {
							decl.value = value;
						}
					}
				);
			}
		);
	};
});

// promise read file
const readFile = (file) => new Promise(
	(resolve, reject) => fs.readFile(
		file,
		'utf8',
		(error, data) => error ? reject(error) : resolve(data)
	)
);
