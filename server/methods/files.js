export default ({ Meteor, Roles, Qiniu, privateConfigs }) => {
  const bucketName = Qiniu.conf.BUCKET_NAME;
  const qiniuClient = new Qiniu.rs.Client();
  const wrappedQiniuIoPut = Meteor.wrapAsync(Qiniu.io.put, Qiniu.io);
  // const wrappedQiniuClient = Async.wrap(qiniuClient, ['stat', 'remove', 'copy', 'move']);

  Meteor.methods({
    'files.token'() {
      const putPolicy = new Qiniu.rs.PutPolicy(bucketName);
      return putPolicy.token();
    }
  });
}
