// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import Select from 'react-select';
import { selectProjects, selectTasks } from '../../data.js';

class TabTimer extends Component<Props> {
  props: Props;

  state = {
    timerBtn: 'pause',
    isSearchable: true,
    isClearable: true
  };

  handleTimer = ev => {
    console.log('3213');
    this.setState({
      timerBtn: this.state.timerBtn === 'start' ? 'pause' : 'start'
    });
  };

  render() {

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

    const { isOpen } = this.props;
    const {
      timerBtn,
      isClearable,
      isSearchable
    } = this.state;

    if (!isOpen) return null;
    return (
      <div className={styles.tabTimer}>
        <div className={styles.timer}>
          <div className={styles.timer__counter}>
            00:00
          </div>
          <div className={styles.timer__controls}>
            <button onClick={this.handleTimer}>
              {timerBtn === 'start' ? (
                <i className="far fa-pause-circle"></i>
              ) : (
                <i className="far fa-play-circle"></i>
              )}
            </button>
          </div>
        </div>

        <div className={styles.updateData}>
          <button title="update data">
            <i className="fas fa-sync-alt"></i>
            <span>Update data</span>
          </button>
        </div>

        <div className={styles.selectProject}>
          <Select
            styles={customStyles}
            placeholder="Select project"
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="project"
            options={selectProjects}
          />
        </div>

        <div className={styles.selectTask}>
          <Select
            styles={customStyles}
            placeholder="Select task"
            isClearable={isClearable}
            isSearchable={isSearchable}
            name="project"
            options={selectTasks}
          />
        </div>

        <div className={styles.tasks}>
          <div className={styles.tasks__today}>
            <time className={styles.tasks__todayDate}>17 September 2018</time>
            <div className={`${styles.tasks__todayTotal} ${styles.tasks__todayRow}`}>
              <span>
                Today
              </span>
              <span>
                8h 00m
              </span>
            </div>
            <div className={`${styles.tasks__todayTasks} ${styles.tasks__todayRow}`}>
              <span>
                2h 10m
              </span>
              <span>
                task 1
              </span>
              <span className={styles.tasks__todayFromTo}>
                <span>
                  9h 00m
                </span>
                <span>
                  -
                </span>
                <span>
                  11h 00m
                </span>
              </span>
            </div>
            <div className={`${styles.tasks__todayTasks} ${styles.tasks__todayRow}`}>
              <span>
                2h 00m
              </span>
              <span>
                task 2
              </span>
              <span className={styles.tasks__todayFromTo}>
                <span>
                  9h 00m
                </span>
                <span>
                  -
                </span>
                <span>
                  11h 00m
                </span>
              </span>
            </div>
            <div className={`${styles.tasks__todayTasks} ${styles.tasks__todayRow}`}>
              <span>
                4h 00m
              </span>
              <span>
                task 3
              </span>
              <span className={styles.tasks__todayFromTo}>
                <span>
                  9h 00m
                </span>
                <span>
                  -
                </span>
                <span>
                  11h 00m
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabTimer;
