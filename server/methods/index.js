import core from './core';
import users from './users';
import files from './files';
import permission from './permission';

export default (context) => {
  core(context);
  users(context);
  files(context);
  permission(context);
};
