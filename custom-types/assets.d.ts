/**
 * For typescript not to error out
 */
/* tslint:disable */

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}
