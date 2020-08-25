import React from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'

const firebaseConfig = {
   "apiKey":"AIzaSyCWHV-59Nzhr050jL_Uk0kDQU56hmYRLS8",
   "authDomain":"vsamaru.firebaseapp.com",
   "databaseURL":"https://vsamaru.firebaseio.com",
   "projectId":"vsamaru",
   "storageBucket":"vsamaru.appspot.com",
   "messagingSenderId":"685290667281",
   "appId":"1:685290667281:web:469d5dd61070d5404460b0",
   "measurementId":"G-86X0K1BHN5"
}

const fuego = new Fuego(firebaseConfig)

export default function App() {
  return <FuegoProvider fuego={fuego}>{/* Your app code here! */}</FuegoProvider>
}
