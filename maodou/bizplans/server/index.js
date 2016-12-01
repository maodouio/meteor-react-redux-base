import collections from '../lib/collections';
// import permissions from './permissions'
import publications from './publications';
import methods from './methods';
import configs from '../lib/config';
// import privateConfigs from 'server/configs/posts'

export default {
  configs,
  // privateConfigs,
  collections,
  // permissions,
  publications,
  methods,
  init (context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'bizplans' })) {
      Collections.Packages.insert({
        name: 'bizplans',
        configs: context.configs.bizplans || {}
      });
    }
    if (Collections.Bizplans.find().count() < 3) {
      Collections.Bizplans.insert({
        _id: "fYFXLYYM9qBzJCCEn",
        PDFName: "CMS based on Meteor and React.pptx",
        PDFUrl: "http://og0f8itra.bkt.clouddn.com/FlCXthxYnYpTMz_9RyaCuaHTFUtf",
        name: "ofo 共享单车",
        contact: "18500557934",
        types: [
            "智能硬件",
            "体育"
        ],
        desc: "随时随地有车骑"
      });
      Collections.Bizplans.insert({
        _id: "uLMiaiQ6DkDtWNgH8",
        PDFName: "Real项目需求分析书 .xlsx",
        PDFUrl: "http://og0f8itra.bkt.clouddn.com/Ft-hZ1elMxk0AuQMuKdBUr1uS1_S",
        name: "毛豆网",
        contact: "https://www.maodou.io/",
        types: [
            "互联网与信息技术",
            "SaaS/PaaS工具"
        ],
        desc: "专注内容创业的云平台"
      });
    }
  }
};
