import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header';

const Dashboard = () => {

  const { logOut } = useContext(AuthContext);

  async function handleLogOut() {
    await logOut();
  }

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <button onClick={handleLogOut}>Sair da conta</button>
    </div>
  )
}

export default Dashboard;