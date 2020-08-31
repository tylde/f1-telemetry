import AppRoute from '../../AppRoute';
import {HttpException} from '../../../exceptions';

class ErrorTestRoute extends AppRoute {
  constructor(path: string) {
    super(path);
  }

  protected initializeRoutes(): void {
    this.router.get(this.path, this.get);
  }

  protected get(): void {
    throw new HttpException(500, 'Task failed successfully');
  }
}

export default ErrorTestRoute;
