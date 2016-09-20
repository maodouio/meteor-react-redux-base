import core from './core';
import users from './users';
import files from './files';

export default (context) => {
  core(context);
  users(context);
  files(context);
}
