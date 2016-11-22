import React, { Component } from 'react';
import {Link} from 'react-router';
import Loading from 'client/components/common/loading';
import moment from 'moment';

export default class PostsList extends Component {
  render() {
    const { data, status } = this.props.events;
    return(
      <div className="admin-package-wrapper row">
        <div className="col-sm-12">
          <h1>管理活动</h1>
          { status === 'ready' ?
            data.length > 0 ? this.renderEvents(data) : <div>抱歉，目前还没有活动！</div>
            : <Loading />
          }
        </div>
      </div>
    );
  }

  renderEvents(events) {
    return (
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize: '16px'}}>
          <th>活动标题</th>
          <th>活动日期</th>
          <th>活动地点</th>
          <th>发布日期</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) =>
            <tr key={event._id} style={{fontSize: '16px'}}>
              <td style={{lineHeight: '50px'}}><Link to={`/event/${event._id}`}>{event.title}</Link></td>
              <td style={{lineHeight: '50px'}}>{moment(event.time).format('YYYY-MM-DD')}</td>
              <td style={{lineHeight: '50px'}}>{event.location}</td>
              <td style={{lineHeight: '50px'}}>{moment(event.createdAt).format('YYYY-MM-DD')}</td>
              <td style={{lineHeight: '50px'}}>
                <Link to={`/admin/events/edit/${event._id}`} className="btn btn-success" style={{marginRight: '10px'}}>编辑</Link>
                <button className="btn btn-danger" onClick={(e) => this.props.dispatch((this.props.deleteEvent(e, event._id)))}>删除</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}


