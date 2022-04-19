import { reduce, isNil } from "lodash";

const addQueryParams = (baseUrl: string, params?: Object): string => {
  return `${baseUrl}${
    isNil(params)
      ? ""
      : `${reduce(
          params,
          (acc, paramValue, paramKey) => `${acc}${paramKey}=${paramValue}&`,
          "?"
        )}`.slice(0, -1)
  }`;
};

export { addQueryParams };
