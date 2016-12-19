import React from 'react';
import { Spin } from 'antd';

export default () => (
  <div style={styles.wrap}>
    <Spin size='large' tip='加载中...'/>
  </div>
);

const styles = {
  wrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
};
