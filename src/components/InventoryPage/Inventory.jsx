import Styles from './Inventory.module.css';
import { Link } from 'react-router-dom';

// Symbol for idle mode (big screen mode)
import { FaRegEye } from "react-icons/fa";

// add this to eye logo icon
// <Link to="../InventoryIdleChart/IdleScreen.jsx" className={Styles.closeEyeButton}><FaRegEye /></Link>

function Inventory() {
    return (
        <div className={Styles.container}> 
            <p className={Styles.title}>Inventory</p>

            <Link to="/idleScreen" className={Styles.openEyeButton}><FaRegEye /></Link>

            <div className={Styles.inventoryWrapper}>
                <div className={Styles.inventoryChart}>
                    <h1>inventory finna be golden</h1>
                </div>
            </div>
        </div>
    );
}

export default Inventory;