import {GraphQLContext} from '@f1-telemetry/types';

const schemaResolvers = [
  {
    Query: {
      hello: () => {
        return 'Hello world.';
      }
    }
  }
];

export default schemaResolvers;
