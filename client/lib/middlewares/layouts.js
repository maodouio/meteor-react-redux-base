import { injectDeps } from 'react-simple-di';

export default function(layouts) {
  return {
    moduleWillInit() {
      for (const layout of layouts) {
        this.context[layout.name] = injectDeps(this.context, this.actions)(layout.component);
      }
    }
  }
}
