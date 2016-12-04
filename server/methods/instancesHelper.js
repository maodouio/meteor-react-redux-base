import InstanceInfos from '../collections/instanceInfos';

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
  minusInstancesCount() {
    switch(name) {
      case 'post':
        InstanceInfos.update({}, {$inc: { postsCount: -1}});
        return;
      case 'course':
        InstanceInfos.update({}, {$inc: { coursesCount: -1}});
        return;
      case 'user':
        InstanceInfos.update({}, {$inc: { usersCount: -1}});
        return;
      default:
        return;
    }
  }
};
