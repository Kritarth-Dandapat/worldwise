
import SideBar from "../Components/SideBar";
import styles from './AppLayout.module.css';
import Map from "../Components/Map";

function AppLayout() {
    return (
        <div className={styles.app}>
            <SideBar/>
            <Map/>
        </div>
    )
}

export default AppLayout;
