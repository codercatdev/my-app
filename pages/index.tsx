import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  useFirebaseApp,
  AuthProvider,
  FirestoreProvider,
  FirebaseAppProvider,
  FunctionsProvider,
  PerformanceProvider,
  AnalyticsProvider,
} from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyBg3u1sJlyJwQCE95oSDH_mtLABS-is8ZM',
  authDomain: 'rxfire-525a3.firebaseapp.com',
  databaseURL: 'https://rxfire-525a3.firebaseio.com',
  projectId: 'rxfire-525a3',
  storageBucket: 'rxfire-525a3.appspot.com',
  messagingSenderId: '844180061847',
  appId: '1:844180061847:web:400f7142e2d1aaeb',
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}></FirebaseAppProvider>
    </div>
  )
}

export default Home
