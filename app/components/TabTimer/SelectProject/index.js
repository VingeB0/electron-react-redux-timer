// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import Select from 'react-select';
import {loadAllProjects, selectProject, loadTasksByProject} from '../../../actions';

class SelectProject extends Component<Props> {
  props: Props;

  state = {
    isSearchable: true,
    isClearable: true,
  };

  componentDidMount() {
    const {loadAllProjects} = this.props;
    loadAllProjects();
  }

  handleChange = (selected) => {
    const {selectProject, loadTasksByProject, currentProject} = this.props;
    // this.props.changeSelection(selected.map(option => option.value));
    // console.log(selected)
    // console.log('SSSSSSSSSSSSSSSss')
    selectProject(selected);
    console.log('SSEEEELLLLEEEECCCCTTTTEEEDDD')
    console.log(selected)
    console.log(selected.value)
    // console.log(selected.map(option => option.value))
    loadTasksByProject(selected.value);
  };

  render() {
    const {
      projects
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

    const selectOptions = projects.map(function(project) {
      return {
        label: project.value,
        value: project.id
      }
    });

    // console.log('select projects rendered');
    // console.log(this)
    // console.log(this.props)
    // console.log(this.props.projects)
    // console.log('11111111111111111111111111')
    // console.log('11111111111111111111111111')
    // console.log('11111111111111111111111111')
    // console.log('11111111111111111111111111')
    // console.log(this.props.currentProject)
    // console.log(this.props.currentProject.value)

    // console.log('*******************');
    // console.log(selectOptions);
    return (
      <div className={styles.selectProject}>
        <Select
          options={selectOptions}
          styles={customStyles}
          placeholder="Select project"
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="project"
          multi={false}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(
  mapStateToProps,
  {loadAllProjects, selectProject, loadTasksByProject}
)(SelectProject);
