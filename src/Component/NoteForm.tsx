import { useState } from "react";

interface NoteFormProps {
    onAdd: (text: string) => void;
}

export const NoteForm = ({ onAdd }: NoteFormProps) => {
    const [text, setText] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="Enter note..."
            />
            <button type="submit">Add Note</button>
        </form>
    );
};