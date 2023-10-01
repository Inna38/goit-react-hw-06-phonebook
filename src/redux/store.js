import { createStore } from 'redux'


const reducer = (state, action) => {

    switch (action.type) {
        case "filterContacts":
            // { contacts: state.contacts +=1  }
          
            break;
    
        default:
         return state
    }
  
}

export const store = createStore(reducer, {contacts: 0, filter: ""})

