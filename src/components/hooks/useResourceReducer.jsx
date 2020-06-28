const initialState = {
  resources: [],
  isLoading: true,
  error: ''
}

const sortByName = (resources) => {
  return resources.sort(function(a, b) {
    const resourceA = a.resourceInfo.name.toUpperCase(); // ignore upper and lowercase
    const resourceB = b.resourceInfo.name.toUpperCase(); // ignore upper and lowercase
    if (resourceA < resourceB) {
      return -1;
    }
    if (resourceA > resourceB) {
      return 1;
    }

    return 0;
  });
}

const resourceReducer = ( state, action ) => {
  let resourcesCopy = state.resources;
  switch(action.type) {
    case 'UPDATE_INIT' :
      console.log("UPDATING"); 
      return {
        ...state,
        fetching: true
      };
    case 'UPDATE_FINISHED' :
      console.log(action.payload)
      resourcesCopy = resourcesCopy.map(resource => {
        if(resource.resourceId === action.payload.resourceId) {
          resource.qty = action.payload.qty
        }
        return resource;
      });
      console.log(resourcesCopy);
      return {
        ...state,
        resources: resourcesCopy
      }
      
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        resources: action.payload
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case 'ADD_RESOURCE':
      resourcesCopy.push(action.payload);
      resourcesCopy = sortByName(resourcesCopy);
      return {
        ...state,
        resources: resourcesCopy
      }
  }
}

export { initialState, resourceReducer };