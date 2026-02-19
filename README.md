<div align="center">
  <img src="https://storage.googleapis.com/engineering11-prod-100.appspot.com/assets/images/engineering11_text_logo_white.svg" alt="Engineering 11" width="200" />
</div>

<div align="center">
  <h1>Engineering 11 CRUD</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>
<div align="center">
  <em>Fork of <a href="https://github.com/nestjsx/crud">@nestjsx/crud</a> optimized for the Engineering 11 ecosystem</em>
</div>

<br />

<div align="center">
  <a href="https://travis-ci.org/nestjsx/crud">
    <img src="https://github.com/nestjsx/crud/workflows/Tests/badge.svg" alt="Build" />
  </a>
  <a href="https://coveralls.io/github/nestjsx/crud?branch=master">
    <img src="https://coveralls.io/repos/github/nestjsx/crud/badge.svg" alt="Coverage" />
  </a>
  <a href="https://github.com/nestjsx/crud/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/nestjsx/crud.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjsx/crud">
    <img src="https://img.shields.io/npm/v/@nestjsx/crud.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/org/nestjsx">
    <img src="https://img.shields.io/npm/dm/@nestjsx/crud.svg" alt="npm downloads" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
  </a>
  <a href="https://github.com/marmelab/awesome-rest#nodejs">
    <img src="https://raw.githubusercontent.com/nestjsx/crud/master/img/awesome-rest.svg?sanitize=true" alt="Awesome REST" />
  </a>
 
</div>

<div align="center">
  <sub>Originally built by
  <a href="https://twitter.com/MichaelYali">@MichaelYali</a> and
  <a href="https://github.com/nestjsx/crud/graphs/contributors">
    Contributors
  </a><br/>
  Maintained by <a href="https://engineering11.com">Engineering 11</a>
  </sub>
</div>

<br />

This is Engineering 11's fork of the excellent `@nestjsx/crud` microframework, optimized for our ecosystem and enhanced with additional features. We believe that everyone working with NestJs and building RESTful services will find this CRUD microframework very useful.

## About This Fork

This repository is a maintained fork of the original [nestjsx/crud](https://github.com/nestjsx/crud) library, created to:

- Ensure compatibility with the Engineering 11 ecosystem
- Add features specific to our development needs
- Provide ongoing maintenance and updates
- Maintain backward compatibility with the original nestjsx/crud API

All credit for the original design and implementation goes to [@MichaelYali](https://twitter.com/MichaelYali) and the [original contributors](https://github.com/nestjsx/crud/graphs/contributors).

## Features

<img align="right" src="img/crud-usage2.png" alt="CRUD usage" />

- :electric_plug: Super easy to install and start using the full-featured controllers and services :point_right:

- :octopus: DB and service agnostic extendable CRUD controllers

- :mag_right: Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- :telescope: Framework agnostic package with query builder for a frontend usage

- :space_invader: Query, path params and DTOs validation included

- :clapper: Overriding controller methods with ease

- :wrench: Tiny config (including globally)

- :gift: Additional helper decorators

- :pencil2: Swagger documentation

## Packages

- [**@engineering11/crud**](https://www.npmjs.com/package/@engineering11/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators
- [**@engineering11/crud-request**](https://www.npmjs.com/package/@engineering11/crud-request) - request builder/parser package which provides `RequestQueryBuilder` class for frontend usage and `RequestQueryParser` for backend query/path params handling and validation
- [**@engineering11/crud-typeorm**](https://www.npmjs.com/package/@engineering11/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudService` with methods for CRUD database operations
- [**@engineering11/crud-util**](https://www.npmjs.com/package/@engineering11/crud-util) - utility package with helper functions and shared utilities

### Original nestjsx Packages

This fork is based on the original nestjsx packages:

- Original [@nestjsx/crud](https://www.npmjs.com/package/@nestjsx/crud) - [Documentation](https://github.com/nestjsx/crud/wiki/Controllers#description)
- Original [@nestjsx/crud-request](https://www.npmjs.com/package/@nestjsx/crud-request) - [Documentation](https://github.com/nestjsx/crud/wiki/Requests#frontend-usage)
- Original [@nestjsx/crud-typeorm](https://www.npmjs.com/package/@nestjsx/crud-typeorm) - [Documentation](https://github.com/nestjsx/crud/wiki/ServiceTypeorm)

## Documentation

For comprehensive documentation, please refer to the original nestjsx/crud documentation:

- [General Information](https://github.com/nestjsx/crud/wiki#why)
- [CRUD Controllers](https://github.com/nestjsx/crud/wiki/Controllers#description)
- [CRUD ORM Services](https://github.com/nestjsx/crud/wiki/Services#description)
- [Handling Requests](https://github.com/nestjsx/crud/wiki/Requests#description)

The API remains compatible with the original nestjsx/crud implementation.

## Support

This is an Engineering 11 maintained fork. For issues specific to this fork, please create an issue in this repository. For general usage questions and original functionality, please refer to the [original nestjsx/crud repository](https://github.com/nestjsx/crud).

## Contributors

### Contributors

This project exists thanks to all the people who contribute. [[Contribute](CODE_OF_CONDUCT.md)].

## License

[MIT](LICENSE)
