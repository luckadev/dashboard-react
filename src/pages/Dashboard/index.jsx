import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'

import './dashboard.css'

const Dashboard = () => {

  const { logOut } = useContext(AuthContext);

  async function handleLogOut() {
    await logOut();
  }

  return (
    <div>
      <Header />

      <div className='content'>
        <Title name='Chamados'>
          <FiMessageSquare size={25} />
        </Title>

        <>
          <Link to='/new' className='new'>
            <FiPlus size={25} color='#fff' />
            Novo chamado
          </Link>

          <table>
            <thead>
              <tr>
                <th scope='col'>Cliente</th>
                <th scope='col'>Assunto</th>
                <th scope='col'>Status</th>
                <th scope='col'>Cadastrando em</th>
                <th scope='col'>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label='cliente'>Mercado Esquina</td>
                <td data-label='Assunto'>Suporte</td>
                <td data-label='Status'>Em aberto</td>
                <td data-label='Cadastrado'>12/05/2023</td>
                <td data-label='#'>
                  <button className='action' style={{ backgroundColor: '#3583f6' }}>
                    <FiSearch color='#fff' size={17} />
                  </button>
                  <button className='action' style={{ backgroundColor: '#f6a935'}}>
                    <FiEdit2 color='#fff' size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>

      </div>
    </div>
  )
}

export default Dashboard;