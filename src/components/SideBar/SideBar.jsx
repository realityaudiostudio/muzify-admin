import React from 'react';
import muzlog from '../../img/muzlog.png';
import './sidebar.css';
import dsh from "../../img/icon/dsh.svg";
import ord from "../../img/icon/ord.svg";
import prod from "../../img/icon/prod.svg";
import usr from "../../img/icon/usr.svg";

function SideBar() {
  return (
    <div>
        <div className="sdall">
            <div className="sdtop">
            <img src={muzlog} alt='logo'></img>
            <p>Admin Pro Max</p>
            </div>
            <div className="sdit">
                <div className="sditi">
                    <img src={dsh} alt="dashboard" />
                    <p>Dashboard</p>
                </div>
                <div className="sditi">
                    <img src={ord} alt="dashboard" />
                    <p>Orders</p>
                </div>
                <div className="sditi">
                    <img src={prod} alt="dashboard" />
                    <p>Products</p>
                </div>
                <div className="sditi">
                    <img src={usr} alt="dashboard" />
                    <p>Users</p>
                </div>
            </div>
            <p className='sdfoot'>Music Reaches to u...</p>
        </div>
    </div>
  )
}

export default SideBar