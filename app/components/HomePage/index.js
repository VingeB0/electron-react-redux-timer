// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import toggleOpen from '../../decorators/toggleTabs.js'
import TabInfo from '../TabInfo';
import TabTasks from '../TabTasks';
import TabTimer from '../TabTimer';

class HomePage extends Component<Props> {
  props: Props;

  render() {
    console.log('PROPS', this.props);
    const {openTab, toggleOpenItem} = this.props;
    return (
      <div className={styles.home}>
        <Link className={styles.return} to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div className={styles.home__title}>
          <div className={styles.logo}>
            <img src="https://placeimg.com/500/500/nature" title="logo rexit timer" alt="logo rexit timer"/>
          </div>
          <h1>RexIt <span>Task recorder</span></h1>
        </div>
        <main className={styles.main}>
          <aside className={styles.aside}>
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li title="Timer" className={openTab === 'TabTimer' ? styles.tabActive : null}>
                  <button onClick={toggleOpenItem('TabTimer')}>
                    <i className="far fa-clock"></i>
                    Timer
                  </button>
                </li>
                <li title="Tasks" className={openTab === 'TabTasks' ? styles.tabActive : null}>
                  <button onClick={toggleOpenItem('TabTasks')}>
                    <i className="fas fa-tasks"></i>
                    Tasks
                  </button>
                </li>
                <li title="Info" className={openTab === 'TabInfo' ? styles.tabActive : null}>
                  <button onClick={toggleOpenItem('TabInfo')}>
                    <i className="fas fa-info-circle"></i>
                    Info
                  </button>
                </li>
                <li title="Logout">
                  <button>
                    <i className="fas fa-power-off"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          <div className={styles.mainContent}>
            <TabTimer isOpen={openTab === 'TabTimer'} />
            <TabTasks isOpen={openTab === 'TabTasks'}/>
            <TabInfo isOpen={openTab === 'TabInfo'}/>
          </div>
        </main>
      </div>
    );
  }
}

export default toggleOpen(HomePage);
