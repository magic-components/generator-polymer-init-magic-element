'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the bedazzling ${chalk.red(
          'generator-polymer-init-magic-element'
        )} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of the element?',
        default: 'magic-element'
      },
      {
        type: 'input',
        name: 'elementDesc',
        message: 'What is the description of the element?',
        default: 'Awesome magic element'
      },
      {
        type: 'input',
        name: 'elementGithubRepo',
        message: 'What is the name of the element repository?',
        default: 'magic-element'
      },
      {
        type: 'input',
        name: 'githubAccount',
        message: 'What is your github username/organization?',
        default: 'magic-components'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const elementName = this.props.elementName;

    this.fs.copyTpl(
      this.templatePath('demo/index.html'),
      this.destinationPath('demo/index.html'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('_element.js'),
      this.destinationPath(`${elementName}.js`),
      this.props
    );

    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));

    this.fs.copy(
      this.templatePath('CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md')
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('LICENSE.md'),
      this.destinationPath('LICENSE.md'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
