import type { Note } from "../types";

interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
}

export const NoteList = ({ notes, onDelete }: NoteListProps) => {
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>{note.text}
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};