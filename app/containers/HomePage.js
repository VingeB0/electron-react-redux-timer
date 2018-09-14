// @flow
import React, { Component } from 'react';
import LoginPage from '../components/LoginPage/index';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <LoginPage />;
  }
}
