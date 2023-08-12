const customResourceResponse = {};

customResourceResponse.sucess = {statusCode: 200, message: 'Success'};
customResourceResponse.created = {statusCode: 201, message: 'Created'};
customResourceResponse.error = {statusCode: 500, message: 'Error'};
customResourceResponse.notFound = {statusCode: 404, message: 'Not Found'};
customResourceResponse.badRequest = {statusCode: 400, message: 'Bad Request'};
customResourceResponse.unauthorized = {statusCode: 401, message: 'Unauthorized'};

module.exports = customResourceResponse;