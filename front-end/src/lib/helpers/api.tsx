import { AxiosRequestConfig } from 'axios';

//todo: replace any in data with response interface
//todo: add header base on api requirement
const getAxiosParam = (
  url: string,
  token: string = '',
  data: any = {},
  props: any = {}
): AxiosRequestConfig => {
  return {
    url: url,
    method: Object.keys(data).length !== 0 ? 'POST' : 'GET',
    //   ...(token && headers: {
    //     ...(token && { Authorization: 'Bearer ' + token }),
    //   },)
    //   ...(token && {
    // headers: {
    //     { Authorization: 'Bearer ' + token }
    //   }})
    ...(token && { headers: { Authorization: 'Bearer ' + token } }),
    ...(Object.keys(data).length !== 0 && { data: data }),
    ...(props && { ...props }),
  };
};

export { getAxiosParam };
