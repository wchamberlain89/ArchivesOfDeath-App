import React, { useEffect } from 'react';
import { ModalProvider } from './hooks/useModalContext';
import ResourceList from './ResourceList';
import ResourceCreateController from './ResourceCreateController';
import Modal from './Modal';
import ResourceSelect from './ResourceSelect';
import { useAPI } from './hooks/useAPI';
import useTestModal from './hooks/useTestModal';
import { useForm } from 'react-hook-form';

const ResourcesPage = ( props ) => {
  const { settlement: { settlementId } } = props.location.state;
  
  const [ resources, setResources, isLoading, error, makeRequest ] = useAPI('getSettlementResources', settlementId);
  
  const { register, handleSubmit } = useForm(); 
  
  const { showing, toggle } = useTestModal();

  const handleAddResource = (newResource) => {
    setResources([...resources, newResource]);
  }

  const onUpdateResource = (updatedResource) => {
    setResources(resources.map( resource => {
      if(updatedResource.resourceId === resource.resourceId) {
        resource.qty = updatedResource.qty
      }
      return resource;
    }));
  }

  return (
    <>
      <ModalProvider>
        <ResourceList settlementId={settlementId} resources={resources} onUpdateResource={onUpdateResource}/>
      </ModalProvider>
      <ResourceCreateController settlementId={settlementId} onCreateResource={handleAddResource}>
        {({ createResource }) => (
          <>
          <button onClick={() => toggle()}>Add new item</button>
            <Modal
              showing={showing}
              toggle={toggle}
              hide={() => toggle()}
            >
              <ResourceSelect register={register}/>
              <button onClick={handleSubmit((data) => {
                console.log(data);
                createResource(data.resource)}
                )}>Add Item</button>
            </Modal>
          </>
        )} 
      </ResourceCreateController>   
    </>
  )
}

export default ResourcesPage;