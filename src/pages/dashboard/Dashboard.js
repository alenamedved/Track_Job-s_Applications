import React from 'react';

import Stats from '../../components/Stats';
import Jobs from '../../components/Jobs';

function Dashboard() {
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
