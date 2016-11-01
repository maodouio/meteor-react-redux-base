import React from 'react';
import {Link} from 'react-router';

import Loading from 'client/components/common/loading';

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>文章设置</h1>
          <h4>文章分类</h4>
          {
            props.categories.length > 0 ?
              props.categories.map((category, index) =>
                <p key={index}>{category} <a onClick={(e) => props.dispatch(props.deleteCategory(e, category))}>删除</a></p>
              ) :
              <Loading />
          }
          <form onSubmit={(e) => props.dispatch(props.addCategory(e))}>
            <div className="input-group">
              <input className="form-control" type="text" name="category" />
              <span className="input-group-btn">
            <button className="btn btn-default" type="submit">添加分类</button>
          </span>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h4>图片位置</h4>
          <form onChange={(e) => props.dispatch(props.changeImgPosition(e))}>
            <div className="form-group">
              <input type="radio" name="imgPosition" id="radio1"  value="left" defaultChecked={props.imgPosition === 'left'} />
              <label htmlFor="radio1">
                左端
              </label>
            </div>
            <div className="form-group">
              <input type="radio" name="imgPosition" id="radio2"  value="right" defaultChecked={props.imgPosition === 'right'} />
              <label htmlFor="radio2">
                右端
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h4>菜单位置</h4>
          <form onChange={(e) => props.dispatch(props.changeTabsPosition(e))}>
            <div className="form-group">
              <input type="radio" name="catePosition" id="radio3" value="top" defaultChecked={props.tabsPosition === 'top'} />
              <label htmlFor="radio3">
                顶端
              </label>
            </div>
            <div className="form-group">
              <input type="radio" name="catePosition" id="radio4" value="bottom" defaultChecked={props.tabsPosition === 'bottom'} />
              <label htmlFor="radio4">
                底端
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h4>菜单颜色</h4>
          <form>
            <select value={props.tabsColor} onChange={(e) => props.dispatch(props.changeTabsColor(e))} className="form-control" name="color">
              <option value="green">绿色</option>
              <option value="red">红色</option>
              <option value="black">黑色</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
