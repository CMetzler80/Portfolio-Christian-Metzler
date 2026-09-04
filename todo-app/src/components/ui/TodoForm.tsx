"use client"
import { useState, type FormEvent } from 'react'


export interface TodoFormProps {
    addTodo: (text: string) => void;}

export function TodoForm({ addTodo }: TodoFormProps) {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedText = inputValue.trim();
        if (!trimmedText) return;
        addTodo(trimmedText);
        setInputValue('');
    };

    return (
        <>
            <h2> Neue Aufgabe </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button type="submit">+</button>
            </form>
        </>
    )
};