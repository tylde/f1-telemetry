import express from 'express';

class AppRoute {
  public path: string;
  public router = express.Router();

  constructor(path: string) {
    this.path = path;

    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    console.error(`AppRoute ${this.path} 'initializeRoutes' method is not overloaded`);
  }
}

export default AppRoute;
