import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('parent constructor is called');
  }
  componentDidMount() {
    console.log('the parent class component is mounted on the page');
  }
  render() {
    console.log('parent render is called');
    return (
      <div>
        <h1>About</h1>
        <h2>namaste react webseries</h2>
        <UserClass />
      </div>
    );
  }
}
export default About;
