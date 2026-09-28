import { useState } from "react";
import type { SubmitEvent } from "react";
import styles from "@/styles/agentPage.module.css";

function Form() {
    const [trainNumber, setTrainNumber] = useState("");

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;

        if(!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);

        const station = formData.get("station") as string;
        const composition = formData.get("composition") as string;

        console.log({ station, trainNumber, composition });

        const params = new URLSearchParams({
            station,
            trainNumber,
            composition,
        });

        const clientWindow = window.open(
            `/client?${params.toString()}`,
            "clientWindow",
            "popup=yes,width=1200,height=800",
        );

        if(clientWindow) {
            clientWindow.focus();

            form.reset();
            setTrainNumber("");
        }
    }

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <section className={styles["inputs-section"]}>
                <div className={styles["input-wrapper"]}>
                    <label htmlFor="station">Gare</label>
                    <div className={styles["select-wrapper"]}>
                        <select
                            id="station"
                            name="station"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choisissez une gare
                            </option>

                            <option value="Cherbourg">Cherbourg</option>
                            <option value="Valognes">Valognes</option>
                            <option value="Carentan">Carentan</option>
                            <option value="Lison">Lison</option>
                            <option value="Bayeux">Bayeux</option>
                            <option value="Caen">Caen</option>
                            <option value="Lisieux">Lisieux</option>
                            <option value="Bernay">Bernay</option>
                            <option value="Evreux">Evreux</option>
                        </select>
                    </div>
                </div>
                <div className={styles["input-wrapper"]}>
                    <label htmlFor="trainNumber">Train n°</label>
                    <input
                        type="text"
                        placeholder="33.."
                        id="trainNumber"
                        name="trainNumber"
                        inputMode="numeric"
                        maxLength={6}
                        pattern="[0-9]{4,6}"
                        value={trainNumber}
                        onChange={(event) => {
                            const value = event.target.value
                                .replace(/\D/g, "")
                                .slice(0, 6);
                            setTrainNumber(value);
                        }}
                        required
                    />
                </div>
                <div className={styles["input-wrapper"]}>
                    <label htmlFor="composition">Composition</label>
                    <div className={styles["select-wrapper"]}>
                        <select
                            id="composition"
                            name="composition"
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choisissez une composition
                            </option>

                            <option value="Unité Simple">Unité Simple</option>
                            <option value="Unité Multiple">Unité Multiple</option>
                        </select>
                    </div>
                </div>
            </section>
            <div className={styles["button-wrapper"]}>
                <button type="submit">
                    Valider
                </button>
            </div>
        </form>
    );
}

export default Form;

