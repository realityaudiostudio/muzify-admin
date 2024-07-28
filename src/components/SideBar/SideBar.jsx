import React from 'react';
import muzlog from '../../img/muzlog.png';
import './sidebar.css';
import dsh from "../../img/icon/dsh.svg";
import ord from "../../img/icon/ord.svg";
import prod from "../../img/icon/prod.svg";
import usr from "../../img/icon/usr.svg";
import { Link } from 'react-router-dom';

function SideBar() {
    const styleLink = {
        textDecoration: "none"
      };
  return (
    <div>
        <div className="sdall">
            <div className="sdtop">
            <img src={muzlog} alt='logo'></img>
            <p>Admin Pro Max</p>
            </div>
            <div className="sdit">
            <Link to="/" style={styleLink}>
                <div className="sditi">
                    <img src={dsh} alt="dashboard" />
                    <p>Dashboard</p>
                </div></Link>
                <Link to="/orders" style={styleLink}>
                <div className="sditi">
                    <img src={ord} alt="dashboard" />
                    <p>Orders</p>
                </div></Link>
                <Link to="/products" style={styleLink}>
                <div className="sditi">
                    <img src={prod} alt="dashboard" />
                    <p>Products</p>
                </div></Link>
                <Link to="/users" style={styleLink}>
                <div className="sditi">
                    <img src={usr} alt="dashboard" />
                    <p>Users</p>
                </div></Link>
            </div>
            <p className='sdfoot'>Music Reaches to u...</p>
        </div>
    </div>
  )
}

export default SideBar