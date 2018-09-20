// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux'
import { loadAllProjects, loadAllTasks } from '../../../actions';

class UpdateBtn extends Component<Props> {
  props: Props;

  handleUpdate = () => {
    this.props.loadAllProjects();
    this.props.loadAllTasks();
  };

  render() {
    return (
      <div className={styles.updateData}>
        <button title="update data" onClick={this.handleUpdate}>
          <i className="fas fa-sync-alt"></i>
          <span>Update data</span>
        </button>
      </div>
    );
  }
}

export default connect(null, {loadAllProjects, loadAllTasks})(UpdateBtn)
