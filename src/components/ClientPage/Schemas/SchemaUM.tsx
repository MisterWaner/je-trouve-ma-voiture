import schemaUM from "@/assets/image/omneo_premium_um.png";
import styles from "@/styles/clientPage.module.css";

import { ChevronsLeft } from "lucide-react";

function SchemaUM() {
    return (
        <div className={styles["schema-um-container"]}>
            <div className={styles["icon-container"]}>
                <ChevronsLeft className={styles["chevrons-left-icon"]} />
                <p>PARIS</p>
            </div>
            <img
                src={schemaUM}
                alt="Schema UM"
                className={styles["schema-um"]}
            />
        </div>
    );
}

export default SchemaUM;

