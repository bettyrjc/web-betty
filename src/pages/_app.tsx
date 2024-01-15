import '../styles/globals.css';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import type { AppProps } from 'next/app';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCv7aed_dSOai3ECpwlwfZOAeWxeUIpGQM',
//   authDomain: 'web-bet.firebaseapp.com',
//   projectId: 'web-bet',
//   storageBucket: 'web-bet.appspot.com',
//   messagingSenderId: '261850602419',
//   appId: '1:261850602419:web:1096a51518f59dcd5d09c6',
//   measurementId: 'G-NL1QBXSWV2',
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
