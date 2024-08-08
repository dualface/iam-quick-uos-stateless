export interface RequestEvent {
  body: string;
  headerParameters: RequestHeaderParameters;
  headers: HttpHeaders;
  httpMethod: string;
  isBase64Encoded: boolean;
  path: string;
  pathParameters: PathParameters;
  queryString: QueryString;
  queryStringParameters: QueryStringParameters;
  requestContext: RequestContext;
}

export interface RequestHeaderParameters {
  [key: string]: string;
}

export interface HttpHeaders {
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

export interface PathParameters {
  [key: string]: string;
}

export interface QueryString {
  param1: string;
}

export interface QueryStringParameters {
  [key: string]: string;
}

export interface RequestContext {
  httpMethod: string;
  identity: RequestContextIdentity;
  path: string;
  serviceId: string;
  sourceIp: string;
  stage: string;
}

export interface RequestContextIdentity {
  [key: string]: string;
}
