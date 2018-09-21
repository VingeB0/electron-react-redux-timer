// @flow
import React, { Component } from 'react';
import styles from './styles.css';
import {loadAllProjects, loadAllTasks, stopTimer, startTimer} from '../../actions';
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
    // console.log('handleTimer');
    this.setState({
      timerBtn: this.state.timerBtn === 'start' ? 'pause' : 'start'
    });
    this.state.timerBtn === 'start' ? this.handleStopTimer() : this.handleStartTimer()
  };

  handleStartTimer = () => {
    const { startTimer } = this.props;
    startTimer();
    console.log('start timer');
    this.interval = setInterval(() => {
      console.log(this.state);
      this.setState({
        totalSeconds: this.state.totalSeconds + 1
      })
    }, 1000);
  };

  handleStopTimer = () => {
    const { stopTimer } = this.props;
    stopTimer();
    console.log('stop timer');
    clearInterval(this.interval)
    this.setState({
      totalSeconds: 0
    })
  };

  render() {
    // console.log('TAB TIMER RENDERED')
    const { isOpen } = this.props;
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
            <button onClick={this.handleTimer}>
              {timerBtn === 'start' ? (
                <i className="far fa-pause-circle"></i>
              ) : (
                <i className="far fa-play-circle"></i>
              )}
            </button>
          </div>
        </div>

        <UpdateBtn/>

        <SelectProject/>

        <SelectTask/>

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

export default connect(null, {loadAllProjects, loadAllTasks, stopTimer, startTimer})(TabTimer)
