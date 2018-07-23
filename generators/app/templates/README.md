# <%= elementName %>

> <%= elementDesc %>

[![npm](https://img.shields.io/npm/v/<%= elementName %>.svg)](https://www.npmjs.com/package/<%= elementName %>)

## How to install and use:

1 - Install the element using [Yarn](http://yarn.io/):

```sh
$ yarn add <%= elementName %>
```

2 -  Import the element:

```html
<script type="module" src="node_modules/<%= elementName %>/<%= elementName %>.js"></script>
```

or in your javascript file

```js
import "<%= elementName %>/<%= elementName %>.js";
```

3 - Start using it!

```html
<<%= elementName %>></<%= elementName %>>
```

## Styling

The following custom properties and mixins are available for styling:

Custom property           | Default                   | Description
:---                      |:---                       |:---
--<%= elementName %>-color| `#000`                 | <%= elementName %> color

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Verify if you have [node](http://nodejs.org/) and [yarn](http://yarn.io/) installed.

2 - Install [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add polymer-cli
```

3 - Install local dependencies:

```sh
$ yarn install
```

4 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/<%= elementName %>/](http://localhost:8080/components/<%= elementName %>/)

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/<%= githubAccount %>/<%= elementGithubRepo %>/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/<%= githubAccount %>/<%= elementGithubRepo %>/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/<%= githubAccount %>/<%= elementGithubRepo %>/releases) for detailed changelog.

## License

[MIT License](https://github.com/<%= githubAccount %>/<%= elementGithubRepo %>/blob/master/LICENSE.md) © [<%= githubAccount %>](https://github.com/<%= githubAccount %>/people)
