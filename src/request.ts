export interface UosRequestEvent {
  body: string;
  headerParameters: UosRequestHeaderParameters;
  headers: UosHttpHeaders;
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: UosPathParameters;
  queryString: UosQueryString;
  queryStringParameters: UosQueryStringParameters;
  requestContext: UosRequestContext;
}

export interface UosRequestHeaderParameters {
  [key: string]: string;
}

export interface UosHttpHeaders {
  accept: string;
  'accept-encoding': string;
  connection: string;
  'content-length': string;
  'content-type': string;
  host: string;
  'postman-token': string;
  requestsource: string;
  test: string;
  'user-agent': string;
  'x-api-requestid': string;
  'x-api-scheme': string;
  'x-b3-traceid': string;
  'x-qualifier': string;
}

export interface UosPathParameters {
  [key: string]: string;
}

export interface UosQueryString {
  param1: string;
}

export interface UosQueryStringParameters {
  [key: string]: string;
}

export interface UosRequestContext {
  httpMethod: string;
  identity: UosRequestContextIdentity;
  path: string;
  serviceId: string;
  sourceIp: string;
  stage: string;
}

export interface UosRequestContextIdentity {
  [key: string]: string;
}

export interface UosContext {
  callbackWaitsForEmptyEventLoop: boolean;
  memory_limit_in_mb: number;
  time_limit_in_ms: number;
  request_id: string;
  environment: string;
  environ: string;
  function_version: string;
  function_name: string;
  namespace: string;
  tencentcloud_region: string;
  tencentcloud_appid: string;
  tencentcloud_uin: string;
}
