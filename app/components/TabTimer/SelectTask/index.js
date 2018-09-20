// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import Select from 'react-select';
import {loadAllTasks} from '../../../actions';

class SelectTask extends Component<Props> {
  props: Props;

  state = {
    isSearchable: true,
    isClearable: true,
  };

  componentDidMount() {
    const {loadAllTasks} = this.props;
    loadAllTasks();
  }

  render() {
    const {
      tasks
    } = this.props;

    const {
      isClearable,
      isSearchable,
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

    // const selectOptions = tasks.map(function(task) {
    //   return {
    //     label: task.name,
    //     value: task.id
    //   }
    // });

    // console.log('select tasks rendered');
    // console.log(this);
    // console.log(this.props);
    // console.log(this.props.tasks);

    // console.log('*******************');
    // console.log(selectOptions);
    return (
      <div className={styles.selectTask}>
        <Select
          // options={selectOptions}
          styles={customStyles}
          placeholder="Select task"
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="task"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(
  mapStateToProps,
  {loadAllTasks}
)(SelectTask);
