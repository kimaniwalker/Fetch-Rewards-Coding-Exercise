// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function SpendPoints(req, res) {

    let transactions = req.body.transactions
    let points = req.body.points
    let balance = req.body.balance
    let newArr = []

    const sorted = transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    


    sorted.map(( item ) => {

        if (item.points <= balance && item.points <= points) {
            balance = newArr.reduce((total, item) => total + item.points, 0)
            points = points - item.points
            console.log('new balance' + balance)
            console.log('Points left' + points)
        } else if (item.points > points) {
            newArr.push({...item , points: item.points - points})
            points = 0
            balance = newArr.reduce((total, item) => total + item.points, 0)
            console.log('calculating new balance' + balance)
            console.log('calculating Points left' + points)
        }
        else {
            newArr.push(item)
        }

       

    })

    




    res.status(200).json( newArr )
  }
  