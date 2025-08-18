import React from 'react';
import styles from './BasicLayout.module.css';
import { Outlet } from 'react-router-dom';

// Makes it so the navbar is clickable
import { Link } from 'react-router-dom';

// Importing icons for nav bar 
import { MdOutlineViewKanban, MdOutlineDashboard, MdOutlineInventory2 } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
// Importing user icons
import { RxAvatar } from "react-icons/rx";
import { RiLogoutBoxLine } from "react-icons/ri";

// remember to do screen sizes media in css file


// BasicLayout component
const BasicLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                <div className={styles.logoAndTitle}>
                    <img className={styles.logoImg} src="src/assets/eduflow-logo.png" alt="Logo didn't load" />
                    <h2>EduFlow</h2>
                </div>


                <ul className={styles.sidebarList}>
                    <li><Link to="/dashboard"><MdOutlineDashboard />Dashboard</Link></li>
                    <li><Link to="/kanban"><MdOutlineViewKanban />Kanban</Link></li>
                    <li><Link to="/inventory"><MdOutlineInventory2 />Inventory</Link></li>
                    <li><Link to="/ComingSoon"><TbReport />Batch Report</Link></li>
                    <li><Link to="/ComingSoon"><PiStudent />Student</Link></li>
                    <li><Link to="/ComingSoon"><TiMessages />Message</Link></li>        
                </ul>

                <p className={styles.userProfile}><RxAvatar className={styles.avatarIcon} />Jakob Jensen<Link to="/"><RiLogoutBoxLine className={styles.logoutIcon}/></Link></p>
            </div>
            <div className={styles.whiteBox}>
                <Outlet />
            </div>
        </div>
    )
}

export default BasicLayout;