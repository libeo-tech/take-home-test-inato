/**
 * Get the third argument type of a given object.
 */
type ConstructorThirdArgument<Constructor> = Constructor extends {
  new (arg1: any, arg2: any, ar3: infer ThirdArgument, ...args: any[]): any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
  ? ThirdArgument
  : never;

/**
 * Class that can be used to build an object, and returns ReturnType.
 */
type Newable<ReturnType = any> = new (...args: any) => ReturnType; // eslint-disable-line @typescript-eslint/no-explicit-any

export type { ConstructorThirdArgument, Newable };
