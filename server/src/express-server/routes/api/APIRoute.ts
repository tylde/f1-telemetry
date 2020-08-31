import express from 'express';
import AppRoute from '../AppRoute';

class APIRoute extends AppRoute {
  constructor(path: string) {
    super(path);
  }

  protected initializeRoutes(): void {
    this.router.get(this.path, this.get);
  }

  protected get(request: express.Request, response: express.Response, next: express.NextFunction): void {
    try {
      const store = request.store;
      response.json(store);
    } catch (error) {
      next(error);
    }
  }
}

export default APIRoute;
