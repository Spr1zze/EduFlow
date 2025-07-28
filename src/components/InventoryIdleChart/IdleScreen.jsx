import Styles from './IdleScreen.module.css';
import { Link } from 'react-router-dom';

// React icon (eye)
import { FaRegEye } from "react-icons/fa";

function IdleScreen() {
  return (
    <div className={Styles.fullContainer}>
        <div className={Styles.closeChartWrapper}>
            <Link to="/inventory" className={Styles.closeEyeButton}><FaRegEye /></Link>
        </div>

        <div className={Styles.imgWrapper}>
            <img src="src/assets/bar-chart-testing.jpg" alt="chart didn't load" />
        </div>
    </div>
  );
}

export default IdleScreen;