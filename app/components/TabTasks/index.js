// @flow
import React, { Component } from 'react';
import styles from './styles.css';

class TabTasks extends Component<Props> {
  props: Props;

  render() {
    console.log('TAB TASKS');
    console.log(this.props);
    const {isOpen} = this.props;

    if(!isOpen) return null;
    return (
      <div>
        Tab Tasks
      </div>
    );
  }
}

export default TabTasks;
