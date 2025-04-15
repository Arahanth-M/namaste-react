import { useState } from 'react';

const User = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>count :{count} </h1>
      <h1>count2 :{count2} </h1>
      <h1>Name : Arahanth M</h1>
      <h2>Location: Bangalore</h2>
      <h2>email: arahanth@gmail.com</h2>
    </div>
  );
};
export default User;
