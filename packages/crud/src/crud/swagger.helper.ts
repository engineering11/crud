import { HttpStatus } from '@nestjs/common';
import { RequestQueryBuilder } from '@engineering11/crud-request';
import { isString, objKeys } from '@engineering11/crud-util';
import { MergedCrudOptions, ParamsOptions } from '../interfaces';
import { BaseRouteName } from '../types';
import { safeRequire } from '../util';
import { R } from './reflection.helper';
const pluralize = require('pluralize');

export const swagger = safeRequire('@nestjs/swagger', () => require('@nestjs/swagger'));
export const swaggerConst = safeRequire('@nestjs/swagger/dist/constants', () =>
  require('@nestjs/swagger/dist/constants'),
);

export class Swagger {
  static operationsMap(modelName: string): { [key in BaseRouteName]: string } {
    return {
      getManyBase: `Retrieve multiple ${pluralize(modelName)}`,
      getOneBase: `Retrieve a single ${modelName}`,
      createManyBase: `Create multiple ${pluralize(modelName)}`,
      createOneBase: `Create a single ${modelName}`,
      updateOneBase: `Update a single ${modelName}`,
      replaceOneBase: `Replace a single ${modelName}`,
      deleteOneBase: `Delete a single ${modelName}`,
      recoverOneBase: `Recover one ${modelName}`,
    };
  }

  static setOperation(metadata: unknown, func: any): void {
    /* istanbul ignore else */
    if (swaggerConst) {
      R.set(swaggerConst.DECORATORS.API_OPERATION, metadata, func);
    }
  }

  static setParams(metadata: unknown, func: any): void {
    /* istanbul ignore else */
    if (swaggerConst) {
      R.set(swaggerConst.DECORATORS.API_PARAMETERS, metadata, func);
    }
  }

  static setExtraModels(swaggerModels: any): void {
    /* istanbul ignore else */
    if (swaggerConst) {
      const meta = Swagger.getExtraModels(swaggerModels.get);
      const models: any[] = [
        ...meta,
        ...objKeys(swaggerModels)
          .map((name) => swaggerModels[name])
          .filter((one) => one && one.name !== swaggerModels.get.name),
      ];
      R.set(swaggerConst.DECORATORS.API_EXTRA_MODELS, models, swaggerModels.get);
    }
  }

  static setResponseOk(metadata: unknown, func: any): void {
    /* istanbul ignore else */
    if (swaggerConst) {
      R.set(swaggerConst.DECORATORS.API_RESPONSE, metadata, func);
    }
  }

  static getOperation(func: any): any {
    /* istanbul ignore next */
    return swaggerConst ? R.get(swaggerConst.DECORATORS.API_OPERATION, func) || {} : {};
  }

  static getParams(func: any): any[] {
    /* istanbul ignore next */
    return swaggerConst ? R.get(swaggerConst.DECORATORS.API_PARAMETERS, func) || [] : [];
  }

  static getExtraModels(target: unknown): any[] {
    /* istanbul ignore next */
    return swaggerConst ? R.get(swaggerConst.API_EXTRA_MODELS, target) || [] : [];
  }

  static getResponseOk(func: any): any {
    /* istanbul ignore next */
    return swaggerConst ? R.get(swaggerConst.DECORATORS.API_RESPONSE, func) || {} : {};
  }

  static createResponseMeta(name: BaseRouteName, options: MergedCrudOptions, swaggerModels: any): any {
    /* istanbul ignore else */
    if (swagger) {
      const { routes, query } = options;

      switch (name) {
        case 'getOneBase':
          return {
            [HttpStatus.OK]: {
              description: 'Get one base response',
              type: swaggerModels.get,
            },
          };
        case 'getManyBase':
          return {
            [HttpStatus.OK]: query.alwaysPaginate
              ? {
                  description: 'Get paginated response',
                  type: swaggerModels.getMany,
                }
              : {
                  description: 'Get many base response',
                  type: swaggerModels.get,
                  isArray: true,
                },
          };
        case 'createOneBase':
          return {
            [HttpStatus.CREATED]: {
              description: 'Get create one base response',
              schema: { $ref: swagger.getSchemaPath(swaggerModels.create.name) },
            },
          };
        case 'createManyBase':
          return {
            [HttpStatus.CREATED]: swaggerModels.createMany
              ? /* istanbul ignore next */ {
                  description: 'Get create many base response',
                  schema: { $ref: swagger.getSchemaPath(swaggerModels.createMany.name) },
                }
              : {
                  description: 'Get create many base response',
                  schema: {
                    type: 'array',
                    items: { $ref: swagger.getSchemaPath(swaggerModels.create.name) },
                  },
                },
          };
        case 'deleteOneBase':
          return {
            [HttpStatus.OK]: routes.deleteOneBase.returnDeleted
              ? {
                  description: 'Delete one base response',
                  schema: { $ref: swagger.getSchemaPath(swaggerModels.delete.name) },
                }
              : {
                  description: 'Delete one base response',
                },
          };
        case 'recoverOneBase':
          return {
            [HttpStatus.OK]: routes.recoverOneBase.returnRecovered
              ? {
                  description: 'Recover one base response',
                  schema: { $ref: swagger.getSchemaPath(swaggerModels.recover.name) },
                }
              : {
                  description: 'Recover one base response',
                },
          };
        default:
          const dto = swaggerModels[name.split('OneBase')[0]];
          return {
            [HttpStatus.OK]: {
              description: 'Response',
              schema: { $ref: swagger.getSchemaPath(dto.name) },
            },
          };
      }
    } else {
      return {};
    }
  }

  static createPathParamsMeta(options: ParamsOptions): any[] {
    return swaggerConst
      ? objKeys(options).map((param) => ({
          name: param,
          required: true,
          in: 'path',
          type: options[param].type === 'number' ? Number : String,
          enum: options[param].enum ? Object.values(options[param].enum) : undefined,
        }))
      : /* istanbul ignore next */ [];
  }

  static createQueryParamsMeta(name: BaseRouteName, options: MergedCrudOptions) {
    /* istanbul ignore if */
    if (!swaggerConst) {
      return [];
    }

    const { fields, search, filter, or, join, sort, limit, offset, page, cache, includeDeleted } =
      Swagger.getQueryParamsNames();
    const docsLink = (a: string) =>
      `<a href="https://github.com/nestjsx/crud/wiki/Requests#${a}" target="_blank">Docs</a>`;

    const fieldsMeta = {
      name: fields,
      description: `Selects resource fields. ${docsLink('select')}`,
      required: false,
      in: 'query',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      style: 'form',
      explode: false,
    };

    const searchMeta = {
      name: search,
      description: `Adds search condition. ${docsLink('search')}`,
      required: false,
      in: 'query',
      schema: { type: 'string' },
    };

    const filterMeta = {
      name: filter,
      description: `Adds filter condition. ${docsLink('filter')}`,
      required: false,
      in: 'query',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      style: 'form',
      explode: true,
    };

    const orMeta = {
      name: or,
      description: `Adds OR condition. ${docsLink('or')}`,
      required: false,
      in: 'query',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      style: 'form',
      explode: true,
    };

    const sortMeta = {
      name: sort,
      description: `Adds sort by field. ${docsLink('sort')}`,
      required: false,
      in: 'query',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      style: 'form',
      explode: true,
    };

    const joinMeta = {
      name: join,
      description: `Adds relational resources. ${docsLink('join')}`,
      required: false,
      in: 'query',
      schema: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      style: 'form',
      explode: true,
    };

    const limitMeta = {
      name: limit,
      description: `Limit amount of resources. ${docsLink('limit')}`,
      required: false,
      in: 'query',
      schema: { type: 'integer' },
    };

    const offsetMeta = {
      name: offset,
      description: `Offset amount of resources. ${docsLink('offset')}`,
      required: false,
      in: 'query',
      schema: { type: 'integer' },
    };

    const pageMeta = {
      name: page,
      description: `Page portion of resources. ${docsLink('page')}`,
      required: false,
      in: 'query',
      schema: { type: 'integer' },
    };

    const cacheMeta = {
      name: cache,
      description: `Reset cache (if was enabled). ${docsLink('cache')}`,
      required: false,
      in: 'query',
      schema: { type: 'integer', minimum: 0, maximum: 1 },
    };

    const includeDeletedMeta = {
      name: includeDeleted,
      description: `Include deleted. ${docsLink('includeDeleted')}`,
      required: false,
      in: 'query',
      schema: { type: 'integer', minimum: 0, maximum: 1 },
    };

    switch (name) {
      case 'getManyBase':
        return options.query.softDelete
          ? [
              fieldsMeta,
              searchMeta,
              filterMeta,
              orMeta,
              sortMeta,
              joinMeta,
              limitMeta,
              offsetMeta,
              pageMeta,
              cacheMeta,
              includeDeletedMeta,
            ]
          : [
              fieldsMeta,
              searchMeta,
              filterMeta,
              orMeta,
              sortMeta,
              joinMeta,
              limitMeta,
              offsetMeta,
              pageMeta,
              cacheMeta,
            ];
      case 'getOneBase':
        return options.query.softDelete
          ? [fieldsMeta, joinMeta, cacheMeta, includeDeletedMeta]
          : [fieldsMeta, joinMeta, cacheMeta];
      default:
        return [];
    }
  }

  static getQueryParamsNames(): any {
    const qbOptions = RequestQueryBuilder.getOptions();
    const name = (n) => {
      const selected = qbOptions.paramNamesMap[n];
      return isString(selected) ? selected : selected[0];
    };

    return {
      delim: qbOptions.delim,
      delimStr: qbOptions.delimStr,
      fields: name('fields'),
      search: name('search'),
      filter: name('filter'),
      or: name('or'),
      join: name('join'),
      sort: name('sort'),
      limit: name('limit'),
      offset: name('offset'),
      page: name('page'),
      cache: name('cache'),
      includeDeleted: name('includeDeleted'),
    };
  }
}

// tslint:disable-next-line:ban-types
export function ApiProperty(options?: any): PropertyDecorator {
  return (target: unknown, propertyKey: string | symbol) => {
    /* istanbul ignore else */
    if (swagger) {
      // tslint:disable-next-line
      const ApiPropertyDecorator = swagger.ApiProperty || /* istanbul ignore next */ swagger.ApiModelProperty;
      // tslint:disable-next-line
      ApiPropertyDecorator(options)(target, propertyKey);
    }
  };
}
