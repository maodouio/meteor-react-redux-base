import React from 'react';
import Loading from 'client/components/common/loading';

export default (props) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Posts categories</h1>
        {
          props.categories.length > 0 ?
            props.categories.map((category, index) =>
              <p key={index}>{category} <a href="#" onClick={(e) => props.deleteCategory(category, e)}>Delete</a></p>
            ) :
            <Loading />
        }
        <form onSubmit={props.addCategory}>
          <div className="input-group">
            <input className="form-control" type="text" name="category" />
            <span className="input-group-btn">
            <button className="btn btn-default" type="submit">添加分类</button>
          </span>
          </div>
        </form>
      </div>
    </div>
  );
}
