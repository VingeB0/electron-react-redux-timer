// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import HomePage from '../HomePage';

type Props = {};

class Index extends Component<Props> {
  props: Props;

  state = {
    login: '',
    password: ''
  };

  handleChange = type => ev => {
    this.setState({
      [type]: ev.target.value
    });
  };

  getClassName = (type, nameClass) => {
    if(this.state[type].length) return styles[nameClass];
    return null;
  };

  render() {
    return (
      <div className={styles.loginPage}>
        <h2>Login page</h2>
        <div className={styles.loginPage__form}>
          <form onSubmit={this.onSubmit}>
            <div className={styles.inputWrap}>
              <input id="login" type="text" value={this.state.login} onChange={this.handleChange('login')}/>
              <label htmlFor="login" className={this.getClassName('login', 'inputFilledLabel')}>Login</label>
              <svg width="300%" height="100%" viewBox="0 0 1200 60"
                   preserveAspectRatio="none" className={this.getClassName('login', 'inputFilledSvg')}>
                <path
                  d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </div>

            <div className={styles.inputWrap}>
              <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')}/>
              <label htmlFor="password" className={this.getClassName('password', 'inputFilledLabel')}>Password</label>
              <svg width="300%" height="100%" viewBox="0 0 1200 60"
                   preserveAspectRatio="none" className={this.getClassName('password', 'inputFilledSvg')}>
                <path
                  d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </div>

            <button className={styles.loginPage__btn}>Sign in</button>
          </form>
        </div>
        <Link to="/counter">go to Counter page</Link>
        <Link to="/home">go to Home Page</Link>
      </div>
    );
  }
}

export default Index;
