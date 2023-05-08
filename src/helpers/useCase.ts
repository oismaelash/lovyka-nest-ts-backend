import { HttpResponse } from '../helpers/contracts';

export interface UseCase<T = any> {
  handle: (param: T, param2?: T) => Promise<HttpResponse>;
}
