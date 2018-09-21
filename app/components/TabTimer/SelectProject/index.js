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
    selectProject(selected);
    loadTasksByProject(selected.tasksId);
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

    return (
      <div className={styles.selectProject}>
        <Select
          options={selectOptions}
          defaultValue={selectOptions[0]}
          styles={customStyles}
          placeholder="Select project"
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="project"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect(state => ({
    projects: state.projects
  }),
  {
    loadAllProjects,
    selectProject,
    loadTasksByProject
  }
)(SelectProject);
