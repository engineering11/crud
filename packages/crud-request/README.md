<div align="center">
  <img src="https://storage.googleapis.com/engineering11-prod-100.appspot.com/assets/images/engineering11_text_logo_white.svg" alt="Engineering 11" width="200" />
</div>

<div align="center">
  <h1>Engineering 11 CRUD Request</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>
<div align="center">
  <em>Fork of <a href="https://github.com/nestjsx/crud">@nestjsx/crud-request</a> optimized for the Engineering 11 ecosystem</em>
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
  <a href="https://npm.packagequality.com/#?package=@nestjsx%2Fcrud">
    <img src="https://npm.packagequality.com/shield/%40nestjsx%2Fcrud.svg" alt="Package Quality" />
  </a>
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="Renovate" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
  </a>
  <a href="https://github.com/marmelab/awesome-rest#nodejs">
    <img src="https://raw.githubusercontent.com/nestjsx/crud/master/img/awesome-rest.svg?sanitize=true" alt="Awesome REST" />
  </a>
  <a href="https://github.com/juliandavidmr/awesome-nestjs#components--libraries">
    <img src="https://raw.githubusercontent.com/nestjsx/crud/master/img/awesome-nest.svg?sanitize=true" alt="Awesome Nest" />
  </a>
  <a href="https://github.com/nestjs/nest">
    <img src="https://raw.githubusercontent.com/nestjsx/crud/master/img/nest-powered.svg?sanitize=true" alt="Nest Powered" />
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

This is Engineering 11's fork of the excellent `@nestjsx/crud-request` package, optimized for our ecosystem. This package provides request builder/parser functionality that works seamlessly with the Engineering 11 CRUD microframework.

## Features

<img align="right" src="https://raw.githubusercontent.com/nestjsx/crud/master/img/crud-usage2.png" alt="CRUD usage" />

- Super easy to install and start using the full-featured controllers and services :point_right:

- DB and service agnostic extendable CRUD controllers

- Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- Framework agnostic package with query builder for a frontend usage

- Query, path params and DTOs validation included

- Overriding controller methods with ease

- Tiny config (including globally)

- Additional helper decorators

- Swagger documentation

## Install

```shell
npm i @engineering11/crud-request
```

## Related Packages

- [**@engineering11/crud**](https://www.npmjs.com/package/@engineering11/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators
- [**@engineering11/crud-request**](https://www.npmjs.com/package/@engineering11/crud-request) - this package - provides `RequestQueryBuilder` class for frontend usage and `RequestQueryParser` for backend query/path params handling and validation
- [**@engineering11/crud-typeorm**](https://www.npmjs.com/package/@engineering11/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudService` with methods for CRUD database operations

## Documentation

- [General Information](https://github.com/nestjsx/crud/wiki#why)
- [CRUD Controllers](https://github.com/nestjsx/crud/wiki/Controllers#description)
- [CRUD ORM Services](https://github.com/nestjsx/crud/wiki/Services#description)
- [Handling Requests](https://github.com/nestjsx/crud/wiki/Requests#description)

## Support

This is an Engineering 11 maintained fork. For issues specific to this fork, please create an issue in this repository. For general usage questions and original functionality, please refer to the [original nestjsx/crud repository](https://github.com/nestjsx/crud).

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

## License

[MIT](LICENSE)
