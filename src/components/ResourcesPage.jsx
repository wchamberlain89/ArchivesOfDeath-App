import React from 'react';
import { initialState, resourceReducer } from './hooks/useResourceReducer';
import { ModalProvider } from './hooks/useModalContext';
import ResourceList from './ResourceList';
import CreateResource from './CreateResource';


const ResourcesPage = ( props ) => {
  const { settlement: { settlementId } } = props.location.state;
  const [ resources, dispatch ] = React.useReducer(resourceReducer, initialState);

  const DispatchContext = React.createContext(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:7000/settlements/${settlementId}/resources`);
        const json = await res.json();
        dispatch({type : "FETCH_SUCCESS", payload: json});
      } catch (error) {
        dispatch({type: "FETCH_FAILURE", payload: error});
      }
    };
    fetchData();
  }, []);

  if(resources.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <ModalProvider>
          <ResourceList settlementId={settlementId} resources={resources.resources} dispatch={dispatch}/>
        </ModalProvider>
        <CreateResource settlementId={settlementId} onCreateResource={(resource) => dispatch({ type: "ADD_RESOURCE", payload: resource })}/>  
      </DispatchContext.Provider>  
    </>
  )
}

export default ResourcesPage;