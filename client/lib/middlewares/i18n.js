export default function(langs) {
  return {
    moduleWillLoad(module) {
      if (module.i18n) {
        if (typeof module.i18n !== 'object') {
          const message = "Module's i18n field should be an object.";
          throw new Error(message);
        }

        this.i18n = this.i18n || {};
        for (const lang of langs) {
          this.i18n[lang] = this.i18n[lang] || {};
          Object.assign(this.i18n[lang], module.i18n[lang]);
        }
      }
    },
    moduleWillInit() {
      const lang = localStorage.getItem('site-lang') || 'zhCN';
      this.context.T.setTexts(this.i18n[lang]);
      this.context.dispatch(this.actions.core.setLanguage(lang));
      this.context.i18n = this.i18n;
    }
  }
}
