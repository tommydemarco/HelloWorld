import React, { createContext, useReducer } from 'react';

interface AppState {
    chosenLocale: null | 'en' | 'de';
    contactHighlight: boolean;
}

interface Action {
    type: string;
    payload: any;
}

export interface AppContextValue {
    appState: AppState;
    appDispatch: React.Dispatch<Action>;
}

export const APP_ACTION_TYPES = {
    SET_CONTACT_HIGHLIGHT: 'SET_CONTACT_HIGHLIGHT',
    SET_CHOSEN_LOCALE: 'SET_LANGUAGE',
};

const appInitialState: AppState = {
    chosenLocale: null,
    contactHighlight: false,
};

const appReducer = (appState: AppState, action: Action): AppState => {
    switch (action.type) {
        case APP_ACTION_TYPES.SET_CONTACT_HIGHLIGHT:
            return { ...appState, contactHighlight: action.payload };
        case APP_ACTION_TYPES.SET_CHOSEN_LOCALE:
            return { ...appState, chosenLocale: action.payload };
        default:
            return appState;
    }
};

const AppContext = createContext<AppContextValue | null>(null);

const Context: React.FC<React.ReactNode> = ({ children }) => {
    const [appState, appDispatch] = useReducer(appReducer, appInitialState);
    const appContextValue = { appState, appDispatch };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext };
export default Context;
