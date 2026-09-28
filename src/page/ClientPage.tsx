import { useSearchParams } from "react-router";

function ClientPage() {
    const [searchParams] = useSearchParams();

    const station = searchParams.get("station");
    const trainNumber = searchParams.get("trainNumber");
    const composition = searchParams.get("composition");

    return <main>
        <h1>Client Page</h1>

        <p>Station: {station}</p>
        <p>Train Number: {trainNumber}</p>
        <p>Composition: {composition}</p>
    </main>;
}

export default ClientPage;
