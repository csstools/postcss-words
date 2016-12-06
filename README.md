# Words <a href="https://github.com/postcss/postcss"><img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Words] lets you transform CSS words into custom values in CSS.

```json
{
    "midnight-moss": "#041004",
    "red": "#ce2029"
}
```

```css
/* before */

.hero {
    box-shadow: 0 0 0 0 midnight-moss;
    background-color: red;
    color: blue;
}

/* after */

.hero {
    box-shadow: 0 0 0 0 #041004;
    background-color: #ce2029;
    color: blue;
}
```

## Options

#### `words`

Type: `Object|String`  
Default: `.csswords.json`

The file or object to reference when updating CSS words.

#### `functions`

Type: `Array|String`  
Default: `["url"]`

A list of functions to avoid parsing within.

## Usage

Add [Words] to your build tool:

```bash
npm install postcss-words --save-dev
```

#### Node

```js
require('postcss-words').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Words] as a PostCSS plugin:

```js
postcss([
	require('postcss-words')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Words] within your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
	return gulp.src('./src/*.css').pipe(
		postcss([
			require('postcss-words')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Enable [Words] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			use: [
				require('postcss-words')({ /* options */ })
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[npm-url]: https://www.npmjs.com/package/postcss-words
[npm-img]: https://img.shields.io/npm/v/postcss-words.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-words
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-words.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/postcss-words.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[Words]: https://github.com/jonathantneal/postcss-words
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
