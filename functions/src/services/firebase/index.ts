import * as admin from 'firebase-admin'
import * as serviceAccount from 'config/service-account.json'

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}

admin.initializeApp({
  credential: admin.credential.cert(params),
  databaseURL: 'https://onlineballot-ca.firebaseio.com'
})

export const auth = admin.auth()
export const db = admin.firestore()
export const hd = admin.storage()
export const timestamp = admin.firestore.FieldValue.serverTimestamp
