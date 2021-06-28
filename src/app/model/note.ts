import { User } from "./user";

export interface Note {
    id: number;
    text: string;
    date: Date;
    user: User;
}
