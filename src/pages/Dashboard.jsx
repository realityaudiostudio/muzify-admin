import React from 'react';
import "./css/dashboard.css";
import cus from '../img/icon/cus.svg';

function Dashboard() {
  return (
    <div>
        <h3 className='dshh'>Dashboard</h3>
        <div className="dcount">
            {/* countinduvidual */}
            <div className="dcounti">
                <div className="dct">
                    <p>Total Customers</p>
                    <h3>110</h3>
                </div>
                <img src={cus} alt='customer'></img>
            </div>
            <div className="dcounti">
                <div className="dct">
                    <p>Total Customers</p>
                    <h3>110</h3>
                </div>
                <img src={cus} alt='customer'></img>
            </div>
            <div className="dcounti">
                <div className="dct">
                    <p>Total Customers</p>
                    <h3>110</h3>
                </div>
                <img src={cus} alt='customer'></img>
            </div>
        </div>
        <div className="orprt">
            <div className="ort">
            <h2>Orders</h2>
            <table className='tbl'>
                <tr>
                    <th>Sl No</th>
                    <th>Order ID</th>
                    <th>date</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
            </table>
        </div>
        {/* second */}
        <div className="ort">
            <h2>Orders</h2>
            <table className='tbl'>
                <tr>
                    <th>Sl No</th>
                    <th>Order ID</th>
                    <th>date</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>mco36800001</td>
                    <td>10-12-2024</td>
                </tr>
            </table>
        </div>
        </div>
    </div>
  )
}

export default Dashboard