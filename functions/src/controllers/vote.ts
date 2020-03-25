import { https } from 'firebase-functions'
import { db } from 'services/firebase'

const vote = async (req, res) => {
  try {
    res.status(200).send('hello!')
  } catch (err) {
    console.log(err)
    return res.sendStatus(400)
  }
}

export default https.onRequest(vote)
