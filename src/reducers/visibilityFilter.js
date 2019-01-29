const visibilityFilter = (state = {say: 'hi'}, action) => {
    switch (action.type) {
          case 'HELLO_REACT':
            return { ...state, say : 'Hello World Redux'  };
          default:
            return state;
        }
        
    };
      
      export default visibilityFilter;