const ACTIVATE_INCOMES_FILTER = 'valuesFilters/ACTIVATE_INCOMES_FILTER'

export const activateIncomesFilter = () => ({
  type: ACTIVATE_INCOMES_FILTER
})

const initialState = {
  activeFilterNames: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ACTIVATE_INCOMES_FILTER:
      return {
        ...state,
        activeFilterNames: ['incomesOnly']
      }
    default:
      return state
  }
}