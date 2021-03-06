import { Heading } from "./heading";
import { Note } from "./note";
import { User } from "./user";

export interface Card {
    id: number;
    user: User[];
    notes: Note;
    title: string;
    description: string;
    rating: string;
    date: Date;
    images: string[];

}

