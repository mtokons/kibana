export default function (server) {

  server.route({
    path: '/api/encoway/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
