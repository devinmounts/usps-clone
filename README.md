# Copa Airlines Clone

#### Epicodus AngularJS wk3 Independent Project, 08/17/2018

#### By Devin Mounts

## A web application clone for Copa Airlines that allows users to book and view flights. The url of the original site is: https://www.copaair.com/en/web/us


## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| Program allows user to search a flight by route (departure and arrival destination), and date (departure and arrival) |PDX - LAX, 08/15/2018-08/16/2018| FlightOption01, FlightOption02... |
| Program allows user to view Lowest Fare Sale options, and filters by origin | Qutio, Equador | Booking options from Quito  |
| Program allows user to check in using last Name and reservation number | Smith, ###### | Details Page |
| Program allows user to search for flight information by flight # and date | ####, 08/15/2018 |  |


## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* Create a file in the root directory called `.env` with your API key written in this format: **exports.apiKey** = **_API KEY HERE_**
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## Links

* Add links here

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Devin Mounts**


# CopaClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
