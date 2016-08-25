import { injectDeps } from 'react-simple-di';

export default function(layout) {
  return {
    moduleWillLoad() {
      this.context.Layout = injectDeps(this.context, this.actions)(layout);
    }
  }
}
