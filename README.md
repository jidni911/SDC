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


4. Serve the Angular application:
  ```sh
  ng serve
  ```

npm install -g angular-cli-ghpages




## deployement tutorial:

(Get-Content src/index.html) -replace '<base href="/"', '<base href="/SDC/"' | Set-Content src/index.html
ng build --base-href /SDC/
npx angular-cli-ghpages --dir=dist
(Get-Content src/index.html) -replace '<base href="/SDC/"', '<base href="/"' | Set-Content src/index.html


## for custom domain
ng build
npx angular-cli-ghpages --dir=dist