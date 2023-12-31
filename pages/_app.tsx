import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../src/store'; //Store読み込み
import { Provider } from 'react-redux'; //Providerが子コンポーネントのStoreの参照で必要

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
