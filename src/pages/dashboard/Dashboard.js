import React from 'react';

import Stats from '../../components/Stats';
import Jobs from '../../components/Jobs';
import { useAuth } from '../../components/context/authUserContext';
function Dashboard() {
  const authUser = useAuth();
  console.log(authUser, 'authUser');
  return (
    <>
      {/* <div>{`Hello, ${name}`}</div> */}
      {/* <Button onClick={logout}>Log out</Button> */}
      <Stats />
      <Jobs />
    </>
  );
}

export default Dashboard;
