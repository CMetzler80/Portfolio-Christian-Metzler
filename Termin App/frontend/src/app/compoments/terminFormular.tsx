import { useState } from "react";
import { SyntheticEvent } from 'react';




// Define the Termin type typescript
type Termin = {
    id: string;
    title: string;
    start: string;
    end: string;
};

type Props = {
    onClose: () => void;
    onSave: (termin: Termin) => void;
};

const Formular = ({ onClose, onSave }: Props) => {

    
    // States für die Formularfelder
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    //Function to handle form submission
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // 1. Neuladen verhindern
        console.log('Formular wurde abgeschickt!'); // 2. Daten verarbeiten
        onClose(); // 4. Callback-Funktion aufrufen, um den Zustand in der übergeordneten Komponente zu aktualisieren

        const neuerTermin: Termin = {
            id: crypto.randomUUID(),
            title: title,
            start: start,
            end: end,
        };

        onSave(neuerTermin); // Termin nach oben melden in d
        onClose();           // Formular schließen
    };
        

    const styles: Record<string, React.CSSProperties> = {
        overlay: {
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        modal: {
            background: "white",
            color: "black",
            padding: 24,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 320,
        },
    };

    return (
        <div style={styles.overlay}>
           
            <form style={styles.modal} onSubmit={handleSubmit}>
                <h2>Neuen Termin erstellen</h2>
                <input type="text"
                    placeholder="Termin"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input type="datetime-local"
                    placeholder="Termin Anfang"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                />

                <input type="datetime-local"
                    placeholder="Termin Ende"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    required
                />

                <button type="submit">Termin erstellen</button>
            </form>
        </div>
    );
}

export default Formular;