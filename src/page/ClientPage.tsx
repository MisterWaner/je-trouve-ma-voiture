import { useSearchParams } from "react-router";
import styles from "@/styles/clientPage.module.css";

import Header from "@/components/AgentPage/Header";
import SchemaUS from "@/components/ClientPage/Schemas/SchemaUS";
import SchemaUM from "@/components/ClientPage/Schemas/SchemaUM";

function ClientPage() {
    const [searchParams] = useSearchParams();

    const gare = searchParams.get("station");
    const trainNumber = searchParams.get("trainNumber");
    const composition = searchParams.get("composition");
    const heure = searchParams.get("heure");

    return (
        <main>
            <Header title="Ma voiture" />
            <section className={styles["info-section"]}>
                <p className={styles["info-item"]}>
                    <span>Gare :</span> {gare}
                </p>
                <p className={styles["info-item"]}>
                    <span>Train n°:</span> {trainNumber}
                </p>
                {heure && (
                    <p className={styles["info-item"]}>
                        <span>Départ :</span> {heure}
                    </p>
                )}
            </section>

            <section>
                {composition === "Unité Simple" && (
                    <div>
                        <SchemaUS />
                    </div>
                )}
                {composition === "Unité Multiple" && (
                    <div className={styles["schema-um-container"]}>
                        <SchemaUM />
                    </div>
                )}

                {!composition && <p>Aucune composition sélectionnée</p>}
            </section>
        </main>
    );
}

export default ClientPage;



