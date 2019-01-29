
const todos = (state = {list: []}, action) => {
    switch (action.type) {
          case 'ADD_TODO':
          console.log(state);
          return { 
            ...state,
            list: [...state.list, action.newItem]
          }
          case 'HELLO_WORLD':
          return {...state,say: 'Hello'}
          default:
            return state;
        }
        
    };
      
      export default todos;