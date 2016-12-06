import InstanceInfos from 'lib/collections/instanceInfos';

export default {
  addInstancesCount(name) {
    switch(name) {
      case 'post':
        InstanceInfos.update({}, {$inc: { postsCount: 1}}, {upsert: true});
        return;
      case 'course':
        InstanceInfos.update({}, {$inc: { coursesCount: 1}}, {upsert: true});
        return;
      case 'user':
        InstanceInfos.update({}, {$inc: { usersCount: 1}}, {upsert: true});
        return;
      default:
        return;
    }
  },
  minusInstancesCount(name) {
    switch(name) {
      case 'post':
        InstanceInfos.update({}, {$inc: { postsCount: -1}}, {upsert: true});
        return;
      case 'course':
        InstanceInfos.update({}, {$inc: { coursesCount: -1}}, {upsert: true});
        return;
      case 'user':
        InstanceInfos.update({}, {$inc: { usersCount: -1}}, {upsert: true});
        return;
      default:
        return;
    }
  },
  updateSiteName(name) {
    InstanceInfos.update({}, {$set: {siteName: name}}, {upsert: true});
  }
};
