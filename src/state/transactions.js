import makeFetchDuck from './_utils/makeFetchDuck'

const result = makeFetchDuck(
  'transactions',
  process.env.PUBLIC_URL + '/data/transactions.json'
)

export const fetchTransactions = result.fetchData
export default result.reducer