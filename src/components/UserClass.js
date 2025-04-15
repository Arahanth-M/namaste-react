import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: 'Dummy',
        id: 'Default',
      },
    };
    console.log('child constructor is called');
  }
  async componentDidMount() {
    console.log('Child component mounted on the page');
    //API call
    const data = await fetch('https://api.github.com/users/Arahanth-M');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log('child render is called');
    const { login, id } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Name :{login} </h1>
        <h2>Id :{id}</h2>
        <h2>email: arahanth@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
