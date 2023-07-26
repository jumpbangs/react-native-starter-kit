import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import rootReducer from '../features/index';

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor, persistReducer };
