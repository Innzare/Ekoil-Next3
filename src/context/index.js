'use client';

import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

const MaterialUI = createContext(null);

MaterialUI.displayName = 'MaterialUIContext';

function reducer(state, action) {
  switch (action.type) {
    case 'DARKMODE': {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function MaterialUIControllerProvider({ children }) {
  const initialState = {
    darkMode: false
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

export function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error('useMaterialUIController should be used inside the MaterialUIControllerProvider.');
  }

  return context;
}

export const setDarkMode = (dispatch, value) => dispatch({ type: 'DARKMODE', value });
