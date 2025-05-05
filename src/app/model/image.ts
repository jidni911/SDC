import { User } from "./user";

export class Image {
    id?: number;
    user?: User;
    path?: string;
    url?: string;
    name?: string;
    imageBytes?: ArrayBuffer;
    description?: string;
}

