import React from 'react';

export default (Component) => class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTab : 'TabTimer'
    }
  }

  render() {
    return <Component {...this.props} toggleOpenItem={this.toggleOpenItem} openTab={this.state.openTab}/>
  }

  toggleOpenItem = (openTab) => ev => {
    this.setState({
      openTab: openTab !== this.state.openTab ? openTab : openTab
    })
  };
}
