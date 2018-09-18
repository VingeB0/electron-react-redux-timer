// @flow
import React, { Component } from 'react';
import styles from './styles.css';

class TabInfo extends Component<Props> {
  props: Props;

  render() {
    console.log('TAB INFO');
    console.log(this.props);
    const {isOpen} = this.props;

    if(!isOpen) return null;
    return (
      <div>
        Tab Info
      </div>
    );
  }
}

export default TabInfo;
