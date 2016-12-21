import React, { Component, PropTypes} from 'react';
import Loding from '../common/loading';
import { filter } from 'lodash/collection';
import Helmet from 'react-helmet';

export default class AdminCore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isReady, packages } = this.props;
    // console.log(packages);
    const selectedModule = filter(packages, 'display');
    if (!isReady) {
      return <Loding />;
    }
    return (
      <div>
        <Helmet title='核心配置' />
        <div>
          {this.renderCoreName()}
          {/* <div className="col-xs-12" style={{padding: '10px'}}>
                      <h3>模块配置，最多选择4个模块(已选择{selectedModule.length-1}个)</h3>
                      <div>
                        <h4>已选模块</h4>
                        {packages.map( (module) => this.renderDisplayedModule(module))}
                      </div>
                      <div>
                        <h4>未选模块</h4>
                        {packages.map( (module) => this.renderModule(module))}
                      </div>
                    </div> */}
        </div>
      </div>
    );
  }

  renderCoreName() {
    return (
      <div>
        <h4 style={{marginBottom: '20px'}}>核心配置</h4>
        <form onSubmit={this.props.saveCoreConfigs}>
          <div className="form-group">
            <label>网站名称</label>
            <input type="text" name="appName" className="form-control" defaultValue={this.props.appName} />
          </div>
          <button className="btn btn-success" type='submit'>提交</button>
        </form>
      </div>
    );
  }

  // renderDisplayedModule(module) {
  //   if (module.name === 'core') {
  //     return null;
  //   }
  //   const btnClass = module.display ? 'btn btn-info' : 'btn btn-warning';
  //   if (module.display) {
  //     return (
  //       <div className="btn-group" style={{margin: '10px'}} key={module.name}>
  //         <button className={btnClass} type="button" onClick={(e) => this.handleClick(e, module.name, module.display)}>{module.moduleName}</button>
  //       </div>
  //     );
  //   }
  // }

  // renderModule(module) {
  //   if (module.name === 'core') {
  //     return null;
  //   }
  //   const btnClass = module.display ? 'btn btn-info' : 'btn btn-warning';
  //   if (!module.display) {
  //     return (
  //       <div className="btn-group" style={{margin: '10px'}} key={module.name}>
  //         <button className={btnClass} type="button" onClick={(e) => this.handleClick(e, module.name, module.display)}>{module.moduleName}</button>
  //       </div>
  //     );
  //   }
  // }

  // handleClick(e, moduleName, display) {
  //   const { dispatch, setModuleName } = this.props;
  //   dispatch(setModuleName(e, moduleName, display));
  // }
}

AdminCore.propTypes = {
  isReady: PropTypes.bool,
  appName: PropTypes.string,
  packages: PropTypes.array,
  saveCoreConfigs: PropTypes.func,
  dispatch: PropTypes.func,
  setModuleName: PropTypes.func
};
