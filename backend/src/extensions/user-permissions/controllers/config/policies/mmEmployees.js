module.exports = async (ctx, next) => {
    const { user } = ctx.state;
    
    // Check if the user has the desired role
    if (user.role.id === 4) {
      await next();
    } else {
      ctx.unauthorized(`You are not authorized to access this endpoint`);
    }
  };