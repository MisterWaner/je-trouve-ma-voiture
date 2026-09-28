import styles from "../styles/agentPage.module.css";
import Header from "../components/AgentPage/Header";
import Form from "../components/AgentPage/Form";

function AgentPage() {
    return (
        <main>
            <Header />

            <div className={styles["form-wrapper"]}>
                <Form />
            </div>
        </main>
    );
}

export default AgentPage;

