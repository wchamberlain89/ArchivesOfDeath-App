import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ResourceListItem from './ResourceListItem';
import groupBy from '../utils/groupBy';

const ResourceList = (props) => {
  const { settlementId, resources } = props;

  console.log(groupBy(resources, 'qty'));

  return (
    <>
      <ul>
        {resources.map(( resource ) => {
          return <ResourceListItem 
            key={resource.resourceId} 
            name={resource.resourceInfo.name}
            qty={resource.qty} 
            resourceId={resource.resourceId}
            settlementId={settlementId}
            onClick={() => props.onClick(resource)}
          />
        })}
      </ul>
    </>
  )
}

ResourceList.propTypes = {
  resources : PropTypes.arrayOf(PropTypes.exact({
    qty : PropTypes.number,
    resourceId : PropTypes.number,
    resourceInfo : PropTypes.shape({
      name : PropTypes.string,
      description : PropTypes.string,
      resourceType : PropTypes.string
    })
  }))
}

export default ResourceList;