const def = {
  btn_loading: false
}
export default function reducers(state = def, action) {
  switch (action.type) {
    case 'Supplier_create/btn_loading_false':
      return { ...state, btn_loading: false }
    case 'Supplier_create/btn_loading_true':
      return { ...state, btn_loading: true }
    default:
      return state;
  }
}