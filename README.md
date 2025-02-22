# SouthDhakaCyclists

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Serving requirements

To set up and serve the project, follow these steps:

1. Install Bootstrap:
  ```sh
  npm install bootstrap
  ```

2. Install bcryptjs:
  ```sh
  npm install bcryptjs
  npm i --save-dev @types/bcryptjs
  ```

3. Install json-server:
  ```sh
  npm install json-server
  ```

4. Serve the Angular application:
  ```sh
  ng serve
  ```

5. Run the JSON server:
  ```sh
  npm run server
  ```

ng build --configuration production
npx angular-cli-ghpages --dir=dist/south-dhaka-cyclists