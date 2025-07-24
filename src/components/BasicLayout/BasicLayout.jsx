import React from 'react';
import styles from './BasicLayout.module.css';

// Importing icons for nav bar 
import { MdOutlineViewKanban, MdOutlineDashboard, MdOutlineInventory2 } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
// Importing user icons
import { RxAvatar } from "react-icons/rx";
import { CgArrowsScrollV } from "react-icons/cg";

// remember to do screen sizes media in css file


// BasicLayout component
export default function BasicLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                <ul className={styles.sidebarList}>
                    <li><MdOutlineDashboard />Dashboard</li>
                    <li><MdOutlineViewKanban />Kanban</li>
                    <li><TbReport />Batch Report</li>
                    <li><PiStudent />Student</li>
                    <li><MdOutlineInventory2 />Inventory</li>
                    <li><TiMessages />Message</li>        
                </ul>

                <p className={styles.userProfile}><RxAvatar />Jakob Jensen< CgArrowsScrollV/></p>
            </div>
            <div className={styles.whiteBox}></div>
        </div>
    )
}
