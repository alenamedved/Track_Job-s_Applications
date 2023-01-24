import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div>DAshboard</div>
      <Link to="/landingpage">Back home</Link>
    </>
  );
}

export default Dashboard;
