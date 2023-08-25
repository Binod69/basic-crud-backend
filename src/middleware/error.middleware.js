// const errorMiddleware = (err, req, res, next) => {
//   console.log('error middleware');
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'development' ? err.stack : null,
//   });
// };

// module.exports = errorMiddleware;

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log the error and stack trace for debugging

  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';

  // Send a JSON response with the error details
  res.status(statusCode).json({
    error: {
      code: statusCode,
      message: errorMessage,
    },
  });
};

module.exports = errorMiddleware;
