import { injectDeps } from 'react-simple-di';

export default function(layout) {
  return {
    moduleWillInit() {
      this.context.Layout = injectDeps(this.context, this.actions)(layout);
    }
  }
}
