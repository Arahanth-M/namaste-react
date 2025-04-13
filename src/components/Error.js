import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPs , something went wrong , please check the URL entered</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};
export default Error;
