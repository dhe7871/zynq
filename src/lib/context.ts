import { createContext, useContext } from "react";

//whole app wide context
export const defaultAppState: AppState = {
    isDarkTheme: true,
    isChatRoomVisibleSM: false,
    user: null,
    token: null,
    contacts: [],
};
export type AppContextValue = [
    AppState,
    React.Dispatch<React.SetStateAction<AppState>>
];
export const AppContext = createContext<AppContextValue>([
    defaultAppState,
    () => {},
]);
export const useAppContext = () => useContext(AppContext);

//chatroom wide context
export const defaultChatState: ChatState = {
    roomId: "",
    contact: null

};
export type ChatContextValue = [
    ChatState,
    React.Dispatch<React.SetStateAction<ChatState>>
];
export const ChatContext = createContext<ChatContextValue>([defaultChatState, ()=>{}]);
export const useChatContext = ()=> useContext(ChatContext);
