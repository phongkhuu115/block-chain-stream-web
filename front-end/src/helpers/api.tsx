import { AxiosRequestConfig } from 'axios';

//todo: replace any in data with response interface
//todo: add header base on api requirement
const getAxiosParam = (
  url: string,
  token: string,
  data: any
): AxiosRequestConfig => {
  return {
    url: url,
    method: data ? 'POST' : 'GET',
    headers: {
      ...(token && { Authorization: 'Bearer ' + token }),
    },
    ...(data && { data: data }),
  };
};

export { getAxiosParam };
