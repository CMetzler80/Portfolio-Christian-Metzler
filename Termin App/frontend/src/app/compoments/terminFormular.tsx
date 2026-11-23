import { useState } from "react";
import { SyntheticEvent } from 'react';

type Props = {
    onClose: () => void;
};

const FormularToggel = ({ onClose }: Props) => {

    // State to manage the visibility of the form (false = hidden, true = visible)
    const [istOffen, setIstOffen] = useState(false);

    // Function to toggle the visibility of the form
    /*const toggleFormular = () => {
        setIstOffen(!istOffen);
    };*/

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault(); // 1. Neuladen verhindern
        console.log('Formular wurde abgeschickt!'); // 2. Daten verarbeiten
        setIstOffen(false); // 3. Formular wieder schließen
        onClose(); // 4. Callback-Funktion aufrufen, um den Zustand in der übergeordneten Komponente zu aktualisieren
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
            <h2>Neuen Termin erstellen</h2>
            <form style={styles.modal} onSubmit={handleSubmit}>
                <input type="text" placeholder="Termin" required />
                <input type="datetime-local" required placeholder="Termin Anfang" />
                <input type="datetime-local" required placeholder="Termin Ende" />
                <button type="submit">Termin erstellen</button>
            </form>
        </div>
    )
    
}

export default FormularToggel;