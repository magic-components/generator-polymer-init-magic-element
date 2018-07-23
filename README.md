# generator-polymer-init-magic-element

> A generator for magic web components using Polymer 3

[![NPM version][npm-image]][npm-url]
[![Dependency Status][daviddm-image]][daviddm-url]

## Table of contents

- [generator-polymer-init-magic-element](#generator-polymer-init-magic-element)
	- [Table of contents](#table-of-contents)
	- [How to install and use](#how-to-install-and-use)
	- [The generated element](#the-generated-element)
			- [Stack / Features:](#stack--features)
			- [Folders Structure:](#folders-structure)
			- [UI Docs:](#ui-docs)
	- [Development](#development)
			- [Run the project locally](#run-the-project-locally)
	- [Versioning](#versioning)
	- [Contributing](#contributing)
	- [History](#history)
	- [License](#license)


## How to install and use

Verify if you have [node](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/) installed.

1 - Install [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli):

```sh
$ yarn global add polymer-cli
```

2 - Install the magic-element generator:

```sh
$ yarn global add generator-polymer-init-magic-element
```

3 - Then generate your new element:

```sh
$ polymer init
```

## The generated element

#### Stack / Features:

- Polymer **3.x**
- **Yarn** for dependencies
- Provide **UI docs**
- **Docs** for all
- Styling API with **custom properties**
- more...

#### Folders Structure:

	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENSE.md
	├── demo/
	|   └── index.html
	├── .gitignore
	├── you-element.js
	├── index.html
	├── index.js
	└── package.json

#### UI Docs:

Provide by [iron-demo-helpers](https://github.com/PolymerElements/iron-demo-helpers).

## Development

#### Run the project locally

1 - Prepare the environment:

```sh
$ yarn global add polymer-cli
```

2 - Clone the project and install the dependencies:

```sh
$ git clone https://github.com/magic-components/generator-polymer-init-magic-element.git
$ cd generator-polymer-init-magic-element
$ yarn
```

3 - Link the generator locally:

```sh
$ npm link
```

4 - Run the generator:

```sh
$ polymer init
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/magic-components/generator-polymer-init-magic-element/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/magic-components/generator-polymer-init-magic-element/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/magic-components/generator-polymer-init-magic-element/releases) for detailed changelog.

## License

MIT © [Larissa Abreu](https://larissaabreu.github.io/)

[npm-image]: https://badge.fury.io/js/generator-polymer-init-magic-element.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-magic-element
[daviddm-image]: https://david-dm.org/magic-components/generator-polymer-init-magic-element.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/magic-components/generator-polymer-init-magic-element
