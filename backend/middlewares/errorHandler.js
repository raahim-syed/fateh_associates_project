module.exports = errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
      error,
    })
}
  