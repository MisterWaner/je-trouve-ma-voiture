import styles from "@/styles/agentPage.module.css";
import NomadLogo from "@/assets/image/logo_nomad.svg";
import SNCFLogo from "@/assets/image/logo_sncf_voyageurs.svg";

function Header() {
    return (
        <header>
            <img className={styles["header__logo"]} src={NomadLogo} alt="" />
            <h1>Où est ma voiture ?</h1>
            <img className={styles["header__logo"]} src={SNCFLogo} alt="" />
        </header>
    );
}

export default Header;
