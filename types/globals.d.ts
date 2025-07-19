export {};

// Create a type for the roles

declare global {
    type State = {
        isChatRoomVisibleSM: boolean;
        isSmallScr: boolean;
        isDarkTheme: boolean;
    };

    type Action =
        | {
              type: "CHANGE_CHATROOM_VISIBILITY_SM";
          }
        | {
              type: "SET_IS_SMALL_SCR";
              payload: boolean;
          }
        | {
              type: "SET_IS_DARK_THEME";
              payload: boolean;
          };

    type ContextValue = [state: State, dispatch: React.Dispatch<Action>];

    type formState = {
        error: {
            msg: string;
            code: number | null;
        },
        success: boolean;
    }

    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
}
