import React, { createContext, useReducer } from 'react';

interface AppState {
    chosenLocale: null | 'en' | 'de';
    blockScreen: boolean;
    imageOpen: false | ImageOpen;
    contactActive: boolean;
}

interface ImageOpen {
    imgSrc: string;
    imgAlt: string;
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
    SET_BLOCK_SCREEN: 'SET_BLOCK_SCREEN',
    SET_CHOSEN_LOCALE: 'SET_LANGUAGE',
    SET_IMAGE_OPEN: 'SET_IMAGE_OPEN',
    SET_CONTACT_ACTIVE: 'SET_CONTACT_ACTIVE',
};

const appInitialState: AppState = {
    chosenLocale: null,
    blockScreen: false,
    imageOpen: false,
    contactActive: false,
};

const appReducer = (appState: AppState, action: Action): AppState => {
    switch (action.type) {
        case APP_ACTION_TYPES.SET_BLOCK_SCREEN:
            return { ...appState, blockScreen: action.payload };
        case APP_ACTION_TYPES.SET_CHOSEN_LOCALE:
            return { ...appState, chosenLocale: action.payload };
        case APP_ACTION_TYPES.SET_IMAGE_OPEN:
            return { ...appState, imageOpen: action.payload };
        case APP_ACTION_TYPES.SET_CONTACT_ACTIVE:
            return {
                ...appState,
                contactActive: action.payload,
                blockScreen: action.payload,
            };
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
