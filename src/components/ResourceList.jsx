import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from './hooks/useModalContext';
import { 
  Counter, 
  ResourceListItem, 
} from './index';
import ResourceDetailModal from './ResourceDetailModal';
import useTestModal from './hooks/useTestModal';
import Modal from './Modal';

const ResourceList = (props) => {
  const { settlementId, resources, onUpdateResource } = props;
  const [ selectedResource, setSelectedResource ] = useState(null);
  const { showing, toggle } = useTestModal();
  

  const openModal = ( resource ) => {
    setSelectedResource(resource);
    toggle();
  }
  
  return (
    <>
      <ul>
        {resources.map( ( resource ) => {
          return <ResourceListItem 
            key={resource.resourceId} 
            name={resource.resourceInfo.name}
            qty={resource.qty} 
            resourceId={resource.resourceId}
            settlementId={settlementId}
            onClick={ () => openModal( resource ) }
          />
        })}
      </ul>
      <Modal showing={showing} toggle={toggle}>
        {selectedResource &&
        <ResourceDetailModal 
          name={selectedResource.resourceInfo.name}
          description={selectedResource.resourceInfo.description}
          qty={selectedResource.qty}
          resourceId={selectedResource.resourceId}
          settlementId={settlementId}
          onUpdateResource={onUpdateResource}
          toggle={toggle}
        />}
      </Modal>
    </>
  )
}

ResourceList.propTypes = {
  resources : PropTypes.arrayOf(PropTypes.exact({
    qty : PropTypes.number,
    resourceId : PropTypes.number,
    resourceInfo : PropTypes.shape({
      name : PropTypes.string,
      description : PropTypes.string
    })
  }))
}

export default ResourceList;