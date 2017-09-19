import React, { PropTypes, Component } from 'react';
import { OAuthButton, SignOutButton } from 'components/AuthButtons';
import './Main.css';

const propTypes = {
  initialName: PropTypes.string
};

const defaultProps = {
  initialName: 'Anonym'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);

    this.state = {
      name: this.props.initialName,
      touched: false
    };
  }

  handleNameChange(val) {
    const name = val.target.value;

    this.setState({ touched: true });

    if (name.length === 0) {
      this.setState({ name: this.props.initialName });
    } else {
      this.setState({ name });
    }
  }


  render() {
    return (
      <div className='App'>
        <h1>Wellcome</h1>
        <h2>Log in with</h2>
        <OAuthButton provider='github' />
        <SignOutButton />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
