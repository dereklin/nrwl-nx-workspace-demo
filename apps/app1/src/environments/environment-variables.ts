import { localhostEnvironment } from './localhost-environment';
declare const ENV_VARS: { [key: string]: string };

export const Environment = Object.assign(localhostEnvironment, ENV_VARS);
