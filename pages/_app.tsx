import '../styles/globals.css';
import '../styles/sweep/slider.css';
import type { AppProps } from 'next/app';
import { store } from '../src/store'; //Store読み込み
import { Provider } from 'react-redux'; //Providerが子コンポーネントのStoreの参照で必要
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
