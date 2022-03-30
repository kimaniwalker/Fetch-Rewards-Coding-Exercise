## Fetch Rewards Coding Exercise - Backend Software Engineering
[Fetch Rewards Coding Exercise - Backend Software Engineering](https://github.com/kimaniwalker/Fetch-Rewards-Coding-Exercise/files/8376309/Fetchpdf.pdf)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all node_modules by running
`npm install` or `yarn install`

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Background
Fetch users have points in their accounts. Users only see a single balance in their accounts. But for reporting purposes Fetch actually tracks their
points per payer/partner. In Fetch's system, each transaction record contains: payer (string), points (integer), timestamp (date).
For earning points it is easy to assign a payer, we know which actions earned the points. And thus which partner should be paying for the points.
When a user spends points, they don't know or care which payer the points come from. But, Fetch's accounting team does care how the points are
spent. There are two rules for determining what points to "spend" first:
- Fetch wants the oldest points to be spent first (oldest based on transaction timestamp, not the order they’re received)
- Fetch wants no payer's points to go negative.

## Backend Requirements

- Add transactions for a specific payer and date. </br>
  Functionality is located in the [addNew.js](pages/api/transactions/addNew.js) file

- Spend points using the rules above and return a list of { "payer": <string>, "points": <integer> } for each call. </br>
  Functionality is located in the [spendPoints.js](pages/api/transactions/spendPoints.js) file. Once request has completed , and response is received all records are updated to reflect the new existing balance
  
- Return all payer point balances. </br>
  All payer point balances are calculated using the JS reduce method. Balance is reflected on home page.
  
  
## Additional Features  
  
- Local storage to persist rewards data
- Sum up all rewards with same `payer` name
