const jsonResponse = (reply, statusCode, response) => {
  reply.code(statusCode)
       .header('Content-Type', 'application/json; charset=utf-8')
       .send(response);
};

const htmlResponse = (reply, statusCode, response) => {
  reply.code(statusCode)
       .header('Content-Type', 'text/html; charset=utf-8')
       .send(response);
};

module.exports = {
  jsonResponse,
  htmlResponse
};
