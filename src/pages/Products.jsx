import React from 'react';
import "./css/orders.css";
import Adduu from '../img/icon/addu.svg';

function Products() {
  return (
    <div>
        <h3 className='dshh'>Products</h3>
        <div className="addum">
            <input className='allinp' type='text' placeholder='Search'></input>
     
      <button className='addu'><img src={Adduu} alt="adder"/>Add Product</button></div>
      <table className='ordtbl'>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>mco36800001</td>
          <td>Sitar</td>
          <td>$49</td>
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

export default Products