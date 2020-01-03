import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyDLYrtrFTw1ZnXmQMCxdwsV6rqd3qbAgFk',
  authDomain: 'telusme-e03dc.firebaseapp.com',
  databaseURL: 'https://telusme-e03dc.firebaseio.com',
  projectId: 'telusme-e03dc',
  storageBucket: 'telusme-e03dc.appspot.com',
  messagingSenderId: '339826952187',
  appId: '1:339826952187:web:4b413c3f44f1e90b722d5e',
  measurementId: 'G-MYJSXWXJ1L'
})

export const db = firebase.firestore()
export const auth = firebase.auth()
