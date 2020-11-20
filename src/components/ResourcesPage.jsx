import React from 'react';

//Hook Imports
import { useAPI } from './hooks/useApiService';
import { useForm } from 'react-hook-form';
//Component Imports
import ResourceList from './ResourceList';
import ResourceCreateController from './ResourceCreateController';
import Modal from './Modal';
import ResourceSelect from './ResourceSelect';
import ModalController from './ModalController';
import ResourceDetailModalContent from './ResourceDetailModalContent';
import ResourceListController from './ResourceListController';

const ResourcesPage = ( props ) => {
  const { settlement: { settlementId } } = props.location.state;
  const [ resources, setResources, isLoading ] = useAPI('getSettlementResources', settlementId);
  const { register, handleSubmit } = useForm(); 
  
  const onCreateResource = (newResource) => {
    setResources([...resources, newResource]);
  }

  const onUpdateResource = (updatedResource) => {
    setResources(resources.map( resource =>  resource.resourceId === updatedResource.resourceId ? updatedResource : resource  ));
  }

  if(isLoading) {
    return null
  }

  return (
    <>
      <ResourceListController>
        {({ selectResource, selectedResource }) => (
          <ModalController>
            {({ showing, toggle }) => (
              <>
                <ResourceList settlementId={settlementId} resources={resources} onClick={(resource) => {
                  selectResource(resource)
                  toggle()
                }}/>
                <Modal showing={showing} toggle={toggle}>
                  {selectedResource &&
                  <ResourceDetailModalContent 
                    description={selectedResource.resourceInfo.description}
                    settlementId={settlementId}
                    name={selectedResource.resourceInfo.name}
                    onUpdateResource={onUpdateResource}
                    resourceId={selectedResource.resourceId}
                    toggle={toggle} 
                    qty={selectedResource.qty}/>}
                </Modal>
              </>
            )}
          </ModalController>
        )}
      </ResourceListController>

      <ModalController>
        {({ showing, toggle }) => (
          <>
            <button onClick={() => toggle()}>Add new item</button>
            <Modal showing={showing} toggle={toggle}>
              <ResourceSelect register={register}/>
              <ResourceCreateController settlementId={settlementId} onCreateResource={onCreateResource}>
                {({ createResource }) => (
                  <button onClick={handleSubmit(( data ) => createResource(data.resource))}>Add Item</button>
                )} 
              </ResourceCreateController>
            </Modal>
          </>
        )}
      </ModalController>
    </>
  )
}

export default ResourcesPage;