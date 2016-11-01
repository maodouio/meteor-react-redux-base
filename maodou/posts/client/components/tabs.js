import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className={`posts-tab ${this.props.position} ${this.props.color}`}>
        <ul className="flex-container">
          {
            this.props.configs ?
              this.props.configs.categories.map((cate, i) =>
                <li
                  key={i}
                  onClick={(e) => this.props.dispatch(this.props.changeCategory(e, cate))}
                  className={`${cate===this.props.category ? 'active' : ''} flex-item`}
                >
                  {cate}
                </li>
              ) :
              <div />
          }
        </ul>
      </div>
    );
  }
}
