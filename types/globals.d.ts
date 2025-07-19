export {};

// Create a type for the roles

declare global {
    type State = {
        isDarkTheme: boolean;
        isChatRoomVisibleSM: boolean;
        chatRoomId: string | null;
    };

    type Action =
        | {
              type: "SET_IS_DARK_THEME";
              payload: {
                  isDark: boolean;
              };
          }
        | {
              type: "SET_CHATROOM_VISIBILITY_SM";
              payload: {
                isVisibleSM: boolean;
              }
          }
        | {
              type: "SET_CHATROOM_ID";
              payload: {
                  roomId: string | null;
              };
          };

    type ContextValue = [state: State, dispatch: React.Dispatch<Action>];

    type formState = {
        error: {
            msg: string;
            code: number | null;
        };
        success: boolean;
    };

    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        };
    }
}
