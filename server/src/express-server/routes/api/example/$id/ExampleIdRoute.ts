import express from 'express';
import AppRoute from '../../../AppRoute';

class ExampleIdRoute extends AppRoute {
  constructor(path: string) {
    super(path);
  }

  protected initializeRoutes(): void {
    this.router.get(this.path, this.get);
  }

  protected get(request: express.Request, response: express.Response): void {
    const id: string = request.params.id;

    if (id === '1' || id === '2' || id === '3') {
      response.json([
        {id, data: {}}
      ]);
    } else {
      response.json([]);
    }
  }
}

export default ExampleIdRoute;
