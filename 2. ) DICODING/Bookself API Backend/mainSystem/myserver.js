import hapi from '@hapi/hapi';
import routes from './routes.js';

async function init() {
  const server = hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
}

init();
