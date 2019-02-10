import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

export class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    // console.log(this.props);
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
