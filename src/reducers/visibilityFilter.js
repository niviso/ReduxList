const visibilityFilter = (state = {say: 'hi'}, action) => {
    switch (action.type) {
          case 'REMOVE_ITEM':
            return { ...state, say : 'Hello World Redux'  };
          default:
            return state;
        }
        
    };
      
      export default visibilityFilter;