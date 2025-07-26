import { SetStateAction } from "react";

export {};

// Create a type for the roles

declare global {
    type User = {
        _id: string;
        name: string;
        username: string;
        email: string;
        imgUrl: string;
        roomId?: string;
    };
    // type Contact = {
    //     _id: string;
    //     name: string;
    //     username: string;
    //     email: string;
    //     imgUrl: string;
    // };

    type AppState = {
        isDarkTheme: boolean;
        isChatRoomVisibleSM: boolean;
        user: User | null;
        contacts: User[];
    };

    type ChatState = {
        roomId: string;
        contact: User | null;
    };

    type formState = {
        msg: string;
        code: number;
        success: boolean;
        resetPasswordToken?: string;
        payload?: {
            user?: {
                userId: string;
                name: string;
                username: string;
                email: string;
            };
        };
    };

    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
}
