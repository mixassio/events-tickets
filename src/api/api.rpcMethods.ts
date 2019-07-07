import { ApiService } from './api.service';

export const rpcMethods = {
  startLoad: () => null,
  addRegisterToEvent: () => null,
  authUser: (params) => ApiService.authUser,
};

const getMethod = reqRPC => (params, id) => {
  const action = rpcMethods[reqRPC];
  return { ...action(params), id };
}

export default getMethod;