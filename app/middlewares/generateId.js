export default store => next => action => {
  if (!action.generateId) return next(action)
  next({
    ...action,
    generateId: (Date.now() + Math.random()).toString()
  })
}
