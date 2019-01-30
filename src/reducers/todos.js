
const todos = (state = {list: []}, action) => {
    switch (action.type) {
          case 'ADD_TODO':
          action.newItem.key = Date.now()
          return { 
            ...state,
            list: [action.newItem, ...state.list]
          }
          case 'REMOVE_TODO':

          return {
          ...state,
          list: state.list.filter(item => item.key !== action.key),
          lastUpdated: Date.now()
          }
          case 'HELLO_WORLD':
          return {...state,say: 'Hello'}
          default:
            return state;
        }
        
    };
      
      export default todos;