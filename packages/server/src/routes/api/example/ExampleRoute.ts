import express from 'express';
import AppRoute from '../../AppRoute';

class ExampleRoute extends AppRoute {
  constructor(path: string) {
    super(path);
  }

  protected initializeRoutes(): void {
    this.router.get(this.path, this.get);
    this.router.post(this.path, this.post);
  }

  protected get(_request: express.Request, response: express.Response): void {
    response.json([
      {id: '1', data: {}},
      {id: '2', data: {}},
      {id: '3', data: {}}
    ]);
  }

  protected post(_request: express.Request, response: express.Response): void {
    response.json({status: 'SUCCESS'});
  }
}

export default ExampleRoute;
