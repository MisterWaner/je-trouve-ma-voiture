import schemaUS from "@/assets/image/omneo_premium_us.png";
import styles from "@/styles/clientPage.module.css";

import { ChevronsLeft } from "lucide-react";

function SchemaUS() {
    return (
        <div className={styles["schema-us-container"]}>
            <div className={styles["icon-container"]}>
                <ChevronsLeft className={styles["chevrons-left-icon"]} />
                <p>PARIS</p>
            </div>
            <img
                src={schemaUS}
                alt="Schema US"
                className={styles["schema-us"]}
            />
        </div>
    );
}

export default SchemaUS;


