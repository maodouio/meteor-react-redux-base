import React from 'react';

export default (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>New Events</h1>
        <form onSubmit={props.addEvent}>
          <input className="form-control" type="text" placeholder="title" name="title" />
          <br />
          <div id="editor" />
          <button className="btn btn-default" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
