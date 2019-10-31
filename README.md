# Spook

A starter Ghost theme built using Bootstrap 4 and Font Awesome.

Make the most of styling with SASS and building with Webpack.

![demo image](http://i.imgur.com/DQe5DjF.png)

## Features
* Use Webpack to compile your JS and SCSS easily that gets pulled in by the theme.
* Comes with jQuery enabled out of the box for your JS needs.
  * If you hate jQuery, this is easily disabled in your `webpack.config.js`. Keep in mind jQuery is a dependency for all Bootstrap plugins.
* Write your JS using ES2015 with Babel support.
* Use the beauty of Font Awesome all over to add some pizaaz to your theme.
* Barebones theme, the perfect base to begin building off of.

## How To Install

1. Move into your ghost themes directory.
2. Clone the repo.
  * `git clone https://github.com/calebanthony/spook.git`
3. Move into the `spook` directory.
4. Run `yarn install`
5. To set up Font Awesome, create an account at fontawesome.com and create a Kit. Use that code to replace the default in `default.hbs` in the `<head>`.
6. Run `yarn dev` to generate the `assets/build` directory that the theme pulls from.

## How To Use
Spook is designed to be barebones and let you just start editing.

#### Entry Points
Feel free to edit your `webpack.config.js` to your hearts content, but out of the box:
* All your JS comes from `assets/js/app.js`.
* All your SCSS comes from `assets/css/app.scss`.

#### Output
All Webpack's work gets outputted to `assets/build/[css|js]/bundle.[css|js]`.
The fonts get output to `assets/build/fonts` and are pulled from Font Awesome's package. You can update and pull the new fonts in automagically with Webpack!

#### Commands
There are a few commands built into the `package.json` to help with rapid development:

* `yarn dev` runs development once. This is non-minified.
* `yarn watch` watches your code and runs development build on file save.
* `yarn prod` runs your production code, meaning minified.
