import { isEmpty, isEqual } from 'lodash/lang';

export default (context) => {
  const { Meteor, Collections } = context;
  const { SinglePages } = Collections;
  Meteor.methods({
    'singlePages.changeLogoImgUrl' (logoImgUrl) {
      SinglePages.update({ selected: true, defaultTemplate: false,  }, { $set: { logoImgUrl } });
    },
    'singlePages.changeLogoName' (logoName) {
      SinglePages.update({ selected: true, defaultTemplate: false,  }, { $set: { logoName } });
    },
    'singlePages.changeHeadTitle' (headTitle) {
      SinglePages.update({ selected: true, defaultTemplate: false,  }, { $set: { headTitle } });
    },
    'singlePages.handleDisplay' (sectionName, display) {
      SinglePages.update({ selected: true, defaultTemplate: false, 'sections.name': sectionName }, { $set: { 'sections.$.display': display } });
    },
    'singlePages.changeIndex' (order) {
      let sections = SinglePages.findOne({ selected: true, defaultTemplate: false }).sections;

      sections = sections.map((section) => {
        return {...section, index: order.indexOf(section.anchorName)};
      });

      SinglePages.update({ selected: true, defaultTemplate: false }, { $set: { sections } });
    },
    'singlePages.changeSectionName' (anchorName, newName) {
      SinglePages.update({ selected: true, defaultTemplate: false, 'sections.anchorName': anchorName }, { $set: { 'sections.$.name': newName } });
    },
    'singlePages.changeContent' (sectionName, content) {
      if (isEmpty(sectionName)) {
        console.log('请先选择一个内容进行修改！');
        // throw new Meteor.Error('empty section name', '请先选择一个内容进行修改！');
      } else {
        SinglePages.update({ selected: true, defaultTemplate: false, 'sections.name': sectionName }, { $set: { 'sections.$.content': content } });
      }
    },
    'singlePages.changeReturnPrev' (sectionName, content) {
      if (!isEmpty(sectionName)) {
        // const template = SinglePages.findOne({ selected: true }, {sections: { $elemMatch: {name: sectionName}}});
        const template = SinglePages.findOne({ selected: true, defaultTemplate: false });
        for (const section of template.sections) {
          if (isEqual(section.name, sectionName)) {
            const dbContent = `<div>${section.content}</div>`;
            if (!isEqual(dbContent, content)) {
              throw new Meteor.Error('have no change', '请先保存修改后的内容');
            }
            SinglePages.update({ selected: true, defaultTemplate: false, 'sections.name': sectionName },
             { $set: { 'sections.$.name': sectionName } });
          }
        }
      }
    },
    'singlePages.changeToOrigin'() {
      const template = SinglePages.findOne({ selected: true, defaultTemplate: true });
      SinglePages.update({ selected: true, defaultTemplate: false }, { $set: { sections: template.sections } });
    },
    setTemplate(templateName) {
      SinglePages.update({}, { $set: { selected: false } }, { multi: true });
      SinglePages.update({ templateName }, { $set: { selected: true } }, { multi: true });
    },
  });
};
