module.exports = {
  async redirectToBuilder(ctx) {
    const { user } = ctx.state; // Get the current user object
    const { role } = user;
    
    // Check if the user has the desired role
    if (role.id === 4) {
      // Redirect the user to the desired page
      ctx.response.redirect('/my-desired-page');
    } else {
      // Return an error or redirect to a different page
      ctx.response.redirect('/my-error-page');
    }
  }
};