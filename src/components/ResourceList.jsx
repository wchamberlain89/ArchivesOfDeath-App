import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import ResourceListItem from './ResourceListItem';
import groupBy from '../utils/groupBy';
import _ from 'lodash';

const ResourceList = (props) => {
  const { settlementId, resources } = props;

  const groupedResources = _.groupBy(resources, 'resourceInfo.resourceType');

  return (
    <>
        {
          Object.keys(groupedResources).map( resourceType => (
            <>
              <strong><h3 style={{marginTop: '2em'}}>{resourceType}</h3></strong>
              {
                groupedResources[resourceType].map( resource => (
                  <ResourceListItem 
                    key={resource.resourceId} 
                    name={resource.resourceInfo.name}
                    qty={resource.qty} 
                    resourceId={resource.resourceId}
                    settlementId={settlementId}
                    onClick={() => props.onClick(resource)}
                  />
                ))
              }
            </>
          ))
        }
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