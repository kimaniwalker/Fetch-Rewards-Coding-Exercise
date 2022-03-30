// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function AddNew(req, res) {

    let transactionDetails = req.body

    res.status(200).json({ payer: transactionDetails.payer , points: transactionDetails.points, timestamp: Date() })
  }
  