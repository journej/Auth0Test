function (user, context, callback) {

  // Roles should only be set to verified users.
  if (!user.email || !user.email_verified) {
    return callback(null, user, context);
  }

  user.app_metadata = user.app_metadata || {};
  // You can add a Role based on what you want
  // In this case I check domain
/*  const addRolesToUser = function(user) {
    const endsWith = '@gmail.com';

    if (user.email && (user.email.substring(user.email.length - endsWith.length, user.email.length) === endsWith)) {
      return ['admin'];
    }
    return ['user'];
  };

  const roles = addRolesToUser(user);

  user.app_metadata.roles = roles;*/
  //auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
 //   .then(function() {
      context.idToken['https://jerryman.com/roles'] = user.app_metadata.roles;
      callback(null, user, context);
 //   })
 //   .catch(function (err) {
  //    callback(err);
 //   });
}