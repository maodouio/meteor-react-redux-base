import users from './users';
import files from './files';

export default (context) => {
  users(context);
  files(context);
}
