import { https } from 'firebase-functions'
import { db } from 'services/firebase'

const findEmail = async (req, res) => {
  try {
    const { email } = req.query
    const { size } = await db.collection('users').where('email', '==', email).get()
    return res.status(200).json({ exists: size === 1, email })
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}

export default https.onRequest(findEmail)
