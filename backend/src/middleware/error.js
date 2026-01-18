export const errorMiddleware = async (c, next) => {
  try {
    await next()
  } catch (err) {
    console.error('ERROR STACK:', err)
    return c.json(
      {
        error: 'Internal Server Error',
        message: err.message
      },
      500
    )
  }
}
