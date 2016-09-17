import React from 'react';

export default class EventAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unit: '$' };
    this.changeUnit = this.changeUnit.bind(this);
  }
  changeUnit() {
    if (this.state.unit === '$') {
      this.setState({ unit: '¥' });
    } else {
      this.setState({ unit: '$' });
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>New Events</h1>
          <form onSubmit={this.props.addEvent}>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" type="text" placeholder="title" name="title" />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input className="form-control" type="date" placeholder="time" name="time" />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input className="form-control" type="text" placeholder="location" name="location" />
            </div>
            <div className="form-group">
              <label>Limit</label>
              <input className="form-control" type="text" placeholder="limit" name="limit" />
            </div>
            <div className="row">
              <div className="col-xs-5">
                <div className="form-group">
                  <label>Unit</label>
                  <select defaultValue="dollar" onChange={this.changeUnit} className="form-control" name="unit">
                    <option value="dollar">Dollar</option>
                    <option value="rmb">RMB</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-7">
                <div className="form-group">
                  <label>Fee</label>
                  <div className="input-group m-b">
                    <span className="input-group-addon">{this.state.unit}</span>
                    <input type="text" name="fee" className="form-control"/>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <label>Description</label>
            <div id="editor" />
            <button className="btn btn-default" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
