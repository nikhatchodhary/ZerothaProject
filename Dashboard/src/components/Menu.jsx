import React from 'react';
import {useState} from "react";
import {Link} from 'react-router-dom';
function Menu({Logout,username}) {
    const [selectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);


    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    }

    const handleProfileClick=()=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const menuClass="menu";
    const activeMenuClass="menu selected";
    return ( 
        <div className="menu-container">
            <img  src="logo.png"  className='logo ml-3'/>
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
                        <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
                        </Link>
                        
                    </li>
                     <li>
                        <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
                        <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
                        </Link>
                    </li>
                     <li>
                        <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
                        <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
                        </Link>
                    </li>
                     <li>
                        <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
                        <p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p>
                        </Link>
                    </li>
                     <li>
                        <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
                        <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
                        </Link>
                    </li>
                </ul>
            </div>
             <div className="profile">
                    <div className="avatar">ZU</div>
                   <p className="username mt-3 fs-medium ">{username}</p>
                   <button className='logout' onClick={Logout}>Logout</button>
                </div>
        </div>
     );
}

export default Menu;