import { useReducer } from "react";
import { reducer, defaultState } from "@/lib/reducer";

export function useRedux(): [State, React.Dispatch<Action>] {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return [state, dispatch];
}
