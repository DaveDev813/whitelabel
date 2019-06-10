import Constants from "../constants";

export enum HttpProtocol {
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  GET = "GET"
}

async function apiHelper(
  method: HttpProtocol,
  path: string,
  params: { [key: string]: any }
) {
  const accessToken = "7c9de47e-ccb2-4064-a582-e76d08d0dcfe";
  let url = Constants.API_URL + path;
  let options: any = {
    method,
    headers: {
      Authorization: "bearer " + accessToken
    }
  };
  if (method === HttpProtocol.GET || method === HttpProtocol.DELETE) {
    const qs = Object.keys(params)
      .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
    if (qs) {
      url += "?" + qs;
    }
  } else if (method === HttpProtocol.POST || method === HttpProtocol.PUT) {
    const headers = {
      ...options.headers,
      "content-type": "application/json"
    };
    options = {
      ...options,
      headers,
      body: JSON.stringify(params)
    };
  }

  return fetch(url, options);
}

const Api = {
  get: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.GET, path, params),
  post: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.POST, path, params),
  put: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.PUT, path, params),
  del: async (path: string, params: { [key: string]: any } = {}) =>
    apiHelper(HttpProtocol.DELETE, path, params)
};

export default Api;
