## Fetch Rewards Coding Exercise - Backend Software Engineering
[Fetch Rewards Coding Exercise - Backend Software Engineering](https://github.com/kimaniwalker/Fetch-Rewards-Coding-Exercise/files/8376309/Fetchpdf.pdf)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install all node_modules by running
`npm install` or `yarn install`

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend Requirements

- Add transactions for a specific payer and date. </br>
  Functionality is located in the [AddNew.js](./pages/api/transactions/addNew) file

- Spend points using the rules above and return a list of { "payer": <string>, "points": <integer> } for each call. </br>
  Functionality is located in the [spendPoints.js](./pages/api/transactions/spendPoints.js) file. Once request has completed , and response is received all records are updated to reflect the new existing balance
  
- Return all payer point balances. </br>
  All payer point balances are calculated using the JS reduce method. Balance is reflected on home page.
  
  
## Additional Features  
  
- Local storage to persist rewards data
- Sum up all rewards with same `payer` name
