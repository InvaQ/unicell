import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap-button-loader';
import { userRequest } from 'redux/actions/userActions';
import './UserPage.css';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.any
};

class UserPage extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch(userRequest());
  }

  render() {
    const { loading, users } = this.props;

    console.log(users);

    return (

      <div>
        <PageHeader>Users</PageHeader>
        <Button loading={loading} onClick={this.handleClick}>Show me users!</Button>
        <div className='online-user-list'>
          <div className='online-users-number valign-wrapper'>
            <i className='material-icons'>{ users.length } users:</i>
          </div>
        </div>
        <ul className='collection'>{
          users.map((user) => {
            return (
              <li className='collection-item avatar' key={user.id}>
                <img src={user.image} alt={user.nickname} className='circle' />
                <span className='message-date'> Nickname: </span>
                {user.nickname}
                <span className='message-date'> Provider: </span>
                {user.provider}
                <span className='message-date'> Created at: </span>
                {user.created_at}
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loading, users } = state.users;

  return { loading, users };
}

UserPage.propTypes = propTypes;

export default connect(mapStateToProps)(UserPage);
