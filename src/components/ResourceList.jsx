import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from './hooks/useModalContext';
import { 
  Counter, 
  ResourceListItem, 
} from './index';

const ResourceModalContent = (props) => {
  const { name, description, resourceId, qty } = props;
  console.log("resourceId is ", resourceId)
  return <div>
    <p>{name}</p>
    <p>Description is : {description}</p>
    <Counter initialState={qty}/>
    <p>resource ID is : {resourceId}</p>
  </div>
}

const ResourceList = ({ resources }) => {
  const [ selectedResource, setSelectedResource ] = useState(null);
  const { handleModal, modal } = useContext(ModalContext);
  const openResourceDetailModal = ({ qty, resourceInfo : { description, name, resourceId } }) => {
    console.log(resourceId, " is resource")
    handleModal(<ResourceModalContent 
                  resourceId={resourceId} 
                  description={description}
                  name={name}
                  qty={qty}
                  />);
    console.log(modal)
  }
  
  return (
    <>
      <ul>
        {resources.map( ( resource ) => {
          return <ResourceListItem 
            key={resource.resourceInfo.resourceId} 
            name={resource.resourceInfo.name}
            qty={resource.qty} 
            resourceId={resource.resourceInfo.resourceId}
            onClick={ () => openResourceDetailModal( resource ) }
          />
        })}
      </ul>
    </>
  )
}

ResourceList.propTypes = {
  resources : PropTypes.arrayOf(PropTypes.exact({
    qty : PropTypes.number,
    resourceInfo : PropTypes.shape({
      name : PropTypes.string,
      resourceId : PropTypes.number
    })
  }))
}

export default ResourceList;