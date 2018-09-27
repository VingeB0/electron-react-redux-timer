// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {stopTimer, startTimer, selectTask, selectProject} from '../../actions';
import {formatTime} from '../../utils'
import {connect} from 'react-redux'
import UpdateBtn from './UpdateBtn'
import SelectProject from './SelectProject'
import SelectTask from './SelectTask'

class TabTimer extends Component<Props> {
  props: Props;

  state = {
    timerBtn: 'pause',
    totalSeconds: 0
  };

  handleTimer = ev => {
    this.setState({
      timerBtn: this.state.timerBtn === 'start' ? 'pause' : 'start'
    });
    this.state.timerBtn === 'start' ? this.handleStopTimer() : this.handleStartTimer()
  };

  handleStartTimer = () => {
    const { startTimer, stopTimer, currentProject, currentTask, timer, selectProject, selectTask } = this.props;
    startTimer(
      currentProject.label,
      currentProject.value,
      currentTask.label,
      currentTask.value,
      currentTask.info,
      timer.time_start
    );
    this.intervalTimer = setInterval(() => {
      this.setState({
        totalSeconds: this.state.totalSeconds + 1
      })
    }, 1000);

    this.intervalWriteFile = setInterval(() => {
      const id = this.props.timer.generateId;
      stopTimer(id);
    }, 10000);

    selectProject(null, true);
    selectTask(null, true);
  };

  handleStopTimer = () => {
    const { stopTimer, selectProject, selectTask } = this.props;
    stopTimer();
    clearInterval(this.intervalTimer);
    clearInterval(this.intervalWriteFile);
    this.setState({
      totalSeconds: 0
    });

    selectProject(null, null);
    selectTask(null, null);
  };

  render() {
    // console.log('TAB TIMER RENDERED');
    // console.log(this.props.timer.id)
    const {
      isOpen
    } = this.props;
    const {
      timerBtn,
      totalSeconds
    } = this.state;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    const seconds = totalSeconds - (hours*3600 + minutes * 60);

    if (!isOpen) return null;
    return (
      <div className={styles.tabTimer}>
        <div className={styles.timer}>
          <div className={styles.timer__counter}>
            {`${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`}
          </div>
          <div className={styles.timer__controls}>
            <button onClick={this.handleTimer}
                    style={this.props.currentTask.isDisabled === false ? { backgroundColor:'red'} : {backgroundColor : 'green'}}
                    disabled={this.props.currentTask.isDisabled === false || this.state.timerBtn === 'start' ? false : true}
            >
              {timerBtn === 'start' ? (
                <i className="far fa-pause-circle"></i>
              ) : (
                <i className="far fa-play-circle"></i>
              )}
            </button>
          </div>
        </div>

        <UpdateBtn/>

        <SelectProject isDisabled={!this.props.currentProject.label}/>

        <SelectTask isDisabled={this.props.currentProject.label}/>

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

export default connect((state) => ({
  currentProject: state.currentProject,
  currentTask: state.currentTask,
  timer: state.timer
}),
{stopTimer, startTimer, selectTask, selectProject})(TabTimer)
