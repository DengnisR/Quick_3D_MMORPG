import * as http from 'http';
import * as socket_io from 'socket.io';

import {world_server} from './src/world-server.mjs';

function Main() {
  const port = process.env.PORT || 3000;

  const server = http.createServer();

  server.listen(port, () => {
    console.log('listening on: *', port);
  });

  const io = new socket_io.Server(server, {
      cors: {
          origin: '*'
      }
  });

  const _WORLD = new world_server.WorldServer(io);
  _WORLD.Run();
}

Main();
