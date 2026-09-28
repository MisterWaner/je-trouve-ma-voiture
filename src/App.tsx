import { Routes, Route, Navigate } from "react-router";
import ClientPage from "./page/ClientPage";
import AgentPage from "./page/AgentPage";

function App() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/agent" />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/agent" element={<AgentPage />} />
        </Routes>
    );
}

export default App;

