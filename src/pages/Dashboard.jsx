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
    </div>
  )
}

export default Dashboard