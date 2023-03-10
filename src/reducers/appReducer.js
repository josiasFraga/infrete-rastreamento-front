const INITIAL_STATE = {
    minhas_frotas_loading: false,
    minhas_frotas: [],
    frota_selecionada: {},
    traces_frota: [],
    traces_frota_loading: false,
    clientes: [],
    clientes_loading: false
};
  
export const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
      case 'BUSCA_MINHAS_FROTAS':
      return {...state, minhas_frotas_loading: true};
      case 'BUSCA_MINHAS_FROTAS_SUCCESS':
      return {...state, minhas_frotas: action.payload, minhas_frotas_loading: false};
      case 'BUSCA_MINHAS_FROTAS_FAILED':
      return {...state, minhas_frotas: [], minhas_frotas_loading: false};
    
      case 'BUSCA_TRACES_FROTA':
      return {...state, traces_frota_loading: true};
      case 'BUSCA_TRACES_FROTA_SUCCESS':
      return {...state, traces_frota: action.payload, traces_frota_loading: false};
      case 'BUSCA_TRACES_FROTA_FAILED':
      return {...state, traces_frota: [], traces_frota_loading: false};
    
      case 'BUSCA_CLIENTES':
      return {...state, clientes_loading: true};
      case 'BUSCA_CLIENTES_SUCCESS':
      return {...state, clientes: action.payload, clientes_loading: false};
      case 'BUSCA_CLIENTES_FAILED':
      return {...state, clientes: [], clientes_loading: false};
  
      case 'SET_FROTA_SELECIONADA':
      return {...state, frota_selecionada: action.payload};
  
      case 'RESET_STATE':
      return INITIAL_STATE;
  
      default:
          return state;
    }
};
  