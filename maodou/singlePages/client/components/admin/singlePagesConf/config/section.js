import React, { Component, PropTypes} from 'react';

export default class Section extends Component {
  constructor(props) {
    super(props);

    const { sections, logoName, headTitle } = props;

    const names = sections.reduce((sectionNames, section) => {
      const { name, anchorName } = section;
      return {...sectionNames, [anchorName]: name};
    }, {});

    this.state = {
      names,
      logoName,
      headTitle
    };
  }

  render () {
    const { sections } = this.props;
    const { names } = this.state;

    return (
      <div>
        <div className='' style={{paddingBottom: '15px'}}>
          <form>
            <div className='form-group'>
              <label>修改logo名称:</label>
              <input type='text' className='form-control' value={this.state.logoName} onChange={(e) => this.handleLogoNameChange(e)}></input>
            </div>
            <div className='form-group'>
              <label>修改网站title:</label>
              <input type='text' className='form-control' value={this.state.headTitle} onChange={(e) => this.handleHeadTitleChange(e)}></input>
            </div>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>名称</th>
                <th></th>
                <th>显示</th>
                {/* <th>排序</th> */}
              </tr>
            </thead>
            <tbody id='sections'>
              {this.renderSection(sections, names)}
            </tbody>
          </table>
        </div>
        <div style={{textAlign: 'center'}}>
          <button onClick={(e) => this.handleSubmit(e)} className="btn btn-primary">提交修改</button>
          <button onClick={(e) => this.handleRevert(e)} style={{marginLeft: '10px'}} className="btn btn-danger">一键还原</button>
        </div>
      </div>
    );
  }

  handleRevert(e) {
    e.preventDefault();
    const { dispatch, changeToOrigin} = this.props;
    dispatch(changeToOrigin());
  }

  renderSection (sections, names) {
    const data = sections.map((section) =>
      <tr key={section.anchorName} data-id={section.anchorName}>
        <td><input type="text" style={{width: '100px'}} disabled={section.display ? '' : 'disabled'}  className="form-control" onChange={(e) => this.handleNameChange(e, section.anchorName)} value={names[section.anchorName]} /></td>
        <td><button className="btn btn-success" disabled={section.display ? '' : 'disabled'} onClick={() => this.props.dispatch(this.props.selectSection(section.name))}>修改内容</button></td>
        <td><input type="checkbox" checked={section.display} onChange={(e) => this.handleChange(e, section.name, !section.display)}/></td>
      </tr>
    );
    return data;
  }

  handleChange(e, sectionName, display) {
    const { dispatch, handleDisplay } = this.props;
    dispatch(handleDisplay(e, sectionName, display));
  }

  handleNameChange(e, anchorName) {
    const name = e.target.value;
    const names = { ...this.state.names, [anchorName]: name };

    this.setState({ names });

    const { dispatch, changeSectionName } = this.props;
    dispatch(changeSectionName(anchorName, name));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, changeContent, selectedSection } = this.props;
    dispatch(changeContent(selectedSection));
  }

  handleLogoNameChange(e) {
    const logoName = e.target.value;
    this.setState({ logoName });

    const { dispatch, changeLogoName } = this.props;

    dispatch(changeLogoName(logoName));
  }

  handleHeadTitleChange(e) {
    const headTitle = e.target.value;
    this.setState({ headTitle });

    const { dispatch, changeHeadTitle } = this.props;

    dispatch(changeHeadTitle(headTitle));
  }
}

Section.propTypes = {
  dispatch: PropTypes.func,
  templateName: PropTypes.string,
  logoName: PropTypes.string,
  headTitle: PropTypes.string,
  sections: PropTypes.array,
  handleDisplay: PropTypes.func,
  changeContent: PropTypes.func,
  changeSectionName: PropTypes.func,
  changeLogoName: PropTypes.func,
  changeHeadTitle: PropTypes.func,
  selectSection: PropTypes.func,
  selectedSection: PropTypes.string,
  changeToOrigin: PropTypes.func
};
