import express, {Router} from 'express';
import glob from 'glob';
import AppRoute from '../routes/AppRoute';

interface RouteFile {
  path: string;
  route: any;
}

class AppRouting {
  public router: express.Router;

  constructor() {
    const files = AppRouting.getFiles();
    const onlyAppRouteFiles = AppRouting.filterAppRouteFiles(files);
    const routes = AppRouting.getRoutes(onlyAppRouteFiles);
    this.router = routes.reduce(AppRouting.routerReducer, Router({mergeParams: true}));
  }

  private static SLASH = '/';

  private static getFiles(): RouteFile[] {
    const srcPath = __dirname.split('\\').slice(0, -1).join('\\') + '\\routes';
    const filenames = glob.sync('api/**/*.ts', {cwd: `${srcPath}`});
    return filenames.map(filename => {
      // eslint-disable-next-line global-require
      const route = require(`${srcPath}/${filename}`).default;
      const path = AppRouting.getRoutePath(filename);
      return {route, path};
    });
  }

  private static getRoutePath(filename: string): string {
    return AppRouting.SLASH + filename
      .split(AppRouting.SLASH)
      .filter(chunk => !chunk.endsWith('.ts'))
      .map(chunk => chunk.startsWith('$') ? ':' + chunk.slice(1) : chunk)
      .join(AppRouting.SLASH);
  }

  private static filterAppRouteFiles(files: RouteFile[]): RouteFile[] {
    return files.filter(({route}) => route && route.prototype instanceof AppRoute);
  }

  private static getRoutes(files: RouteFile[]): AppRoute[] {
    return files.map((file: RouteFile) => {
      const {path, route: Route} = file;
      const routeInstance: AppRoute = new Route(path);
      return routeInstance;
    });
  }

  private static routerReducer(rootRouter: express.Router, route: AppRoute): express.Router {
    const router = route.router;
    return rootRouter.use(router);
  }
}


export default AppRouting;
