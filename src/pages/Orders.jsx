import React from 'react';
import "./css/orders.css";

function Orders() {
  return (
    <div>
      <h3 className='dshh'>Orders</h3>
      <input className='allinp' type='text' placeholder='Search'></input>
      <table className='ordtbl'>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Orders</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>mco36800001</td>
          <td>John Doe</td>
          <td>Sitar</td>
          <td>$49</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>mco36800001</td>
          <td>John Doe</td>
          <td>Sitar</td>
          <td>$49</td>
          <td>Pending</td>
        </tr>
      </table>
    </div>
  )
}

export default Orders