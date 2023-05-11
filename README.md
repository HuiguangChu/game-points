
# game-points

A simple browser based game points system that calculates the total
points awarded to a player for a number of items they have collected in a game.

## Project main structure
```
   src/
     components-> UI components and styles
     redux-> store, reuducers
   webpack: Bunlding scripts for local and production 
   .eslintrc-> Eslint config file
   .nvmrc-> Node version defination
   .jest.config.js->Jest test config
   .stylelint.config.js-> Stylelint configuration
   .tsconfig.json-> Typescript compile options config
   .tesoconfig.test.json -> Configuration for jest test with typescript
   .husky -> Git hooks
```

## Development
Main Frameworks/Libraries used:

* [React](https://react.dev)
* [redux](https://redux.js.org/): State management
* [nvm](https://github.com/nvm-sh/nvm): Node version manager
* [husky](https://typicode.github.io/husky/#/): modern native Git hooks made easy

* Linting:
    * typescript: [eslint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/),
    * scss/css: [stylelint](https://stylelint.io/)

* Unit/Integration test:
    * [jest](https://jestjs.io/)
    * [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/): lib for react component test
    * [react-native-testing-library](https://callstack.github.io/react-native-testing-library/): lib for reactive native component test

* Bundling:
    * [Webpack](https://webpack.js.org/): static module bundler for web
    * [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer): Visualize size of webpack output files with an interactive zoomable treemap.

  
### Debugging

**First of all** Make sure you have node version being used correctly(specified in *.nvmrc*),
you can do manually or by run `nvm install`(If you don't have nvm, suggest to install [nvm](https://github.com/nvm-sh/nvm))

* `yarn install` -> install the dependencies for all workspace

In the project directory, you can run:

* `yarn dev` -> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If port 3000 does not work you, you can change it in `webpack.dev-server.js` file.

### Test
* `yarn test` -> run test

### Linting
* `yarn lint` -> run eslint --fix and stylelint --fix for all, it will auto fix some errors

### Analyzing
* `yarn build:analyze` -> Open [http://localhost:8888](http://localhost:8888) to view size of output files, if port 8888 does not work,
you can define in file `webpack.bundle-analyzer.js` with `analyzerPort`


## Learn More
* How to create react app: [https://facebook.github.io/create-react-app/docs/getting-started](https://facebook.github.io/create-react-app/docs/getting-started).

