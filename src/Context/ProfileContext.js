import React, { createContext, Component } from 'react';

export const ProfileContext = createContext();

class ProfileContextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserOnline: true,
    }
  }

  handleClick = () => {
    this.setState({ isUserOnline: !this.state.isUserOnline})
  }

  render() {
    return(
      <ProfileContext.Provider value={{ ...this.state, handleClick: this.handleClick }}>
        {this.props.chidren}
      </ProfileContext.Provider>
    )
  }
}

export default ProfileContextComponent;