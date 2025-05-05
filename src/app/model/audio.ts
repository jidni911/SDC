import { User } from "./user";

export interface Audio {
    id: number;
    user: User;
    path: string;
    url: string;
    name: string;
    audioBytes: Uint8Array;
    description: string;
}
