import React, { Component } from 'react';
import {Link} from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';
import { shortText } from 'lib/helpers';

export default class PostsList extends Component {
  render() {
    const { data, status } = this.props.posts;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12">
          <h1 style={{marginBottom: '20px'}}>管理文章</h1>
          { this.props.posts.status === 'ready' ?
            data.length > 0 ? this.renderPosts(data) : <div>抱歉，目前还没有文章！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }

  renderPosts(posts) {
    return (
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize: '16px'}}>
          <th>文章标题</th>
          <th>文章分类</th>
          <th>文章作者</th>
          <th>发布日期</th>
          <th>更新日期</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) =>
            <tr key={post._id} style={{fontSize: '16px'}}>
              <td style={{lineHeight: '50px'}}><Link to={`/post/${post._id}`}>{shortText(post.title)}</Link></td>
              <td style={{lineHeight: '50px'}}>{post.category}</td>
              <td style={{lineHeight: '50px'}}>{post.author}</td>
              <td style={{lineHeight: '50px'}}>{moment(post.createdAt).format('YYYY-MM-DD')}</td>
              <td style={{lineHeight: '50px'}}>{moment(post.updatedAt).format('YYYY-MM-DD')}</td>
              <td style={{lineHeight: '50px'}}>
                <Link to={`/admin/post/edit/${post._id}`} className="btn btn-success" style={{marginRight: '10px'}}>编辑</Link>
                <button className="btn btn-danger" onClick={(e) => this.props.dispatch((this.props.deletePost(e, post._id)))}>删除</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}


