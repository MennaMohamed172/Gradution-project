const checkRole = (roleTitle) => {
  return (req, res, next) => {
    const currentUser = req?.user;

    // see if the required role is the same as the current user role
    const hasAccess =
      currentUser?.role?.toLowerCase() === roleTitle.toLowerCase();
    
    // if the user has access pass the request to the next middleware
    if (hasAccess) return next();

    // if the user doesn't have access send an error message
    res
      .status(403)
      .send({ error: "you don't have the right permissions" })
      .end();
  };
};

module.exports = checkRole;

const allowedTo = (...roles) => {
  return catchAsyncError(async (req, res, next) => {
      if (!roles.includes(req.user.role)) return next(new appError("YOU are Athorized to access this route you are " + req.user.role, 401))
      next()
  })
}