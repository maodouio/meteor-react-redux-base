import SinglePages from '../lib/collections/singlePages';

import simpleConfig from './simple';
import creativeConfig from './creative';

const register = (config) => {
  const template = SinglePages.findOne({templateName: config.templateName});

  if (template) {
    return null;
  }

  SinglePages.insert({
    defaultTemplate: true,
    ...config
  });

  SinglePages.insert({
    defaultTemplate: false,
    ...config
  });
};

export default () => {
  register(simpleConfig);
  register(creativeConfig);
};
