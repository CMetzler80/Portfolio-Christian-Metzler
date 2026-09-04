type ButtonProps = {
    onDelete: (id: string) => void;
    id: string;
}

export function Button({onDelete, id }: ButtonProps) {
    return (
        <button onClick={() => onDelete(id)}>-</button>
    );
}