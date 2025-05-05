import { Gender } from "./gender";
import { Role } from "./role";
import { UserStatus } from "./user-status";
import { Image } from "./image";
import { Audio } from "./audio";

export interface User {
    id: number;
    fullName: string;
    username: string;
    email: string;
    // password: string;
    gender: Gender;
    dob: Date;
    roles: Set<Role>;
    phoneNumber: string;
    address: string;
    profilePicture: Image;
    coverPicture: Image;
    status: UserStatus;
    profileMusic: Audio;
}