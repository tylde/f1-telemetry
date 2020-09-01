import {IStore} from '../../src/interface/store.interface';

declare global {
  namespace Express {
    interface Request {
      store: IStore;
    }
  }
}
