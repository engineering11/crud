import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';
import { ParamOptionType } from '@engineering11/crud-request';

export interface ParamsOptions {
  [key: string]: ParamOption;
}

export interface ParamOption {
  field?: string;
  type?: ParamOptionType;
  enum?: SwaggerEnumType;
  primary?: boolean;
  disabled?: boolean;
  /**
   * Transform the parameter value before validation and filtering.
   * Useful for converting special values like "me" to the authenticated user's ID.
   * @param value - The raw parameter value from the URL
   * @param req - The request object (provides access to user context, etc.)
   * @returns The transformed value
   * @example
   * transform: (value, req) => value === 'me' ? req.user.id : value
   */
  transform?: (value: any, req: any) => any;
}
