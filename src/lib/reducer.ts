// export const defaultState: State = {
//     isDarkTheme: true,
//     isChatRoomVisibleSM: false,
//     chatRoomId: null,
// };

// export const reducer = (state: State, action: Action): State => {
//     switch (action.type) {
//         case "SET_IS_DARK_THEME":
//             return { ...state, isDarkTheme: action.payload.isDark };

//         case "SET_CHATROOM_VISIBILITY_SM":
//             return {
//                 ...state,
//                 isChatRoomVisibleSM: action.payload.isVisibleSM,
//             };
//         case "SET_CHATROOM_ID":
//             return { ...state, chatRoomId: action.payload.roomId };
        
//         case "SET_USER":
//             return {...state, user: action.payload.user}

//         default:
//             return state;
//     }
// };
