import React from 'react';
import "./css/orders.css";
import usr from '../img/icon/usr.svg';

function Users() {
  return (
    <div>
        <h3 className='dshh'>Users</h3>
        <div className="addum">
            <input className='allinp' type='text' placeholder='Search'></input>
     
      <button className='addu'><img src={usr} alt="adder"/>Add Users</button></div>
      <table className='ordtbl'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>mcoU97001</td>
          <td>John Doe</td>
          <td>johney@test.com</td>
          <td>R</td>
        </tr>
        <tr>
          <td>mco36800001</td>
          <td>Sitar</td>
          <td>$49</td>
          <td>R</td>
        </tr>
      </table>
    </div>
  )
}

export default Users