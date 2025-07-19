// export type State = { smDisplayChatRoom: boolean };
// export type Action = {
//     type: string;
// }
export const defaultState: State = {
    isChatRoomVisibleSM: false,
    isSmallScr: false,
    isDarkTheme: true,
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "CHANGE_CHATROOM_VISIBILITY_SM":
            return {
                ...state,
                isChatRoomVisibleSM: !state.isChatRoomVisibleSM,
            };
        case "SET_IS_SMALL_SCR":
            return { ...state, isSmallScr: action.payload };
        case "SET_IS_DARK_THEME":
            return {...state, isDarkTheme: action.payload}
        default:
            return state;
    }
};
