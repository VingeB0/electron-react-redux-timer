// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import { connect } from 'react-redux';
import Select from 'react-select';
import { loadAllProjects, selectProject, loadTasksByProject } from '../../../actions';

class SelectProject extends Component<Props> {
  props: Props;

  state = {
    isSearchable: true,
    isClearable: true
  };

  componentDidMount() {
    const { loadAllProjects } = this.props;
    loadAllProjects();
  }

  handleChange = (selected) => {
    const { selectProject, loadTasksByProject } = this.props;
    // console.log(selected);
    selectProject(selected, false);
    loadTasksByProject(selected.tasksId);

    console.log(']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]')
    console.log(selected.label)
    console.log(this.state)
  };

  render() {
    const {
      projects
    } = this.props;

    const {
      isClearable,
      isSearchable
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

    const selectOptions = projects.map(function(project) {
      return {
        label: project.value,
        value: project.id,
        tasksId: project.tasks
      };
    });

    // console.log('QWE PROJECT')
    // console.log(this.props)

    return (
      <div className={styles.selectProject}>
        <Select
          // value={this.props.currentProject.isDisabled === null ? null : this.state.selectedTask}
          options={selectOptions}
          defaultValue={selectOptions[0]}
          styles={customStyles}
          placeholder="Select project"
          isSearchable={isSearchable}
          name="project"
          isDisabled={this.props.currentProject.isDisabled ? true : false}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(state => ({
    projects: state.projects,
    currentProject: state.currentProject
  }),
  {
    loadAllProjects,
    selectProject,
    loadTasksByProject
  }
)(SelectProject);
