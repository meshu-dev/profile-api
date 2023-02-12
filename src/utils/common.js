const jsonResponse = (reply, response, statusCode = 200) => {
  reply.code(statusCode)
       .header('Content-Type', 'application/json; charset=utf-8')
       .send(response);
};

const htmlResponse = (reply, response, statusCode = 200) => {
  reply.code(statusCode)
       .header('Content-Type', 'text/html; charset=utf-8')
       .send(response);
};

const svgResponse = (reply, response, statusCode = 200) => {
  reply.code(statusCode)
       .header('Content-Type', 'image/svg+xml')
       .send(response);
};

module.exports = {
  jsonResponse,
  htmlResponse,
  svgResponse
};
