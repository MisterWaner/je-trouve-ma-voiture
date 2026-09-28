import { useSearchParams } from "react-router";
//import styles from "@/styles/ClientPage.module.css";

import SchemaUS from "@/components/ClientPage/Schemas/SchemaUS";
import SchemaUM from "@/components/ClientPage/Schemas/SchemaUM";

function ClientPage() {
    const [searchParams] = useSearchParams();

    const station = searchParams.get("station");
    const trainNumber = searchParams.get("trainNumber");
    const composition = searchParams.get("composition");

    return (
        <main>
            <section>
                <p>Station: {station}</p>
                <p>Train Number: {trainNumber}</p>
                <p>Composition: {composition}</p>
            </section>

            <section>
                {composition === "Unité Simple" && <SchemaUS />}
                {composition === "Unité Multiple" && <SchemaUM />}

                {!composition && <p>Aucune composition sélectionnée</p>}
            </section>
        </main>
    );
}

export default ClientPage;

