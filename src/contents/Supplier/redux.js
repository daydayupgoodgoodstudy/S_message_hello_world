const def = {
  Table_Loading: false,
  Table_data:[]
}
export default function reducers(state = def, action) {
  switch (action.type) {
    case 'Supplier/Table_Loading_false':
      return { ...state, Table_Loading: false }
    case 'Supplier/Table_Loading_true':
      return { ...state, Table_Loading: true }
    case 'Supplier/Table_data':
      return { ...state, Table_data: action.data }
    default:
      return state;
  }
}