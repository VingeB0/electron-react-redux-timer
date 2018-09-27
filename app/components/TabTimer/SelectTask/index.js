// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import Select from 'react-select';
import {loadAllTasks, selectTask} from '../../../actions';

class SelectTask extends Component<Props> {
  props: Props;

  state = {
    isSearchable: true,
    isClearable: true,
    selectOptions: null
  };

  componentDidMount() {
    const {loadAllTasks} = this.props;
    loadAllTasks();
  }

  handleChange = (selected) => {
    const { selectTask } = this.props;
    selectTask(selected, false);
  };

  render() {
    // console.log('select task rendered');
    const {
      tasks
    } = this.props;

    const {
      isSearchable,
      isClearable
    } = this.state;

    const customStyles = {
      option: (base) => ({
        ...base,
        borderBottom: '1px dotted pink',
        color: '#000',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
        cursor: 'pointer'
      })
    };

    const selectOptions = tasks.map(function(task) {
      return {
        label: task.name,
        value: task.id,
        info: task.info
      };
    });

    // console.log('QWE TASK')
    // console.log(this.props)
    // console.log(!this.props.isDisabled && true)

    return (
      <div className={styles.selectTask}>
        <Select
          // value={this.props.currentTask.isDisabled === null ? null : this.props.currentTask.label}
          options={selectOptions}
          defaultValue={selectOptions[0]}
          styles={customStyles}
          placeholder="Select task"
          isSearchable={isSearchable}
          isDisabled={this.props.currentTask.isDisabled ? true : false}
          name="task"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.groupedTasks,
    currentTask: state.currentTask
  };
}

export default connect(
  mapStateToProps,
  {
    loadAllTasks,
    selectTask
  }
)(SelectTask);
