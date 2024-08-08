import {UosContext, UosRequestEvent} from './request';
import {UosResponse} from './response';

type routeHandler = (
  body: object,
  event?: UosRequestEvent,
  context?: UosContext
) => Promise<UosResponse>;

const _routeMap: {[path: string]: routeHandler} = {};

export const addRoute = (path: string, handler: routeHandler) => {
  _routeMap[path] = handler;
};

export const dispatch = async (
  event: UosRequestEvent,
  context: UosContext
): Promise<UosResponse> => {
  const body = JSON.parse(
    typeof event.body === 'string' && event.body.length > 0 ? event.body : '{}'
  );

  if (typeof body !== 'object' || body === null || body === undefined) {
    return {
      ok: false,
      error: 'invalid request body',
    };
  }

  // copy the environment variables to process.env
  const environment = JSON.parse(context.environment);
  if (
    typeof environment !== 'object' ||
    environment === null ||
    environment === undefined
  ) {
    return {
      ok: false,
      error: 'invalid environment',
    };
  }
  for (const [key, value] of Object.keys(environment)) {
    process.env[key] = value;
  }
  const {UOS_APP_ID} = environment;

  const trimPath = `/${UOS_APP_ID}`;
  const path = event.path.substring(trimPath.length);

  const handler = _routeMap[path];
  if (typeof handler !== 'function') {
    return {
      ok: false,
      error: `no route handler found for path '${path}`,
    };
  }

  try {
    return await handler(body, event, context);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return {
      ok: false,
      error: `exception thrown from handler for path '${path}', ${e}`,
    };
  }
};
