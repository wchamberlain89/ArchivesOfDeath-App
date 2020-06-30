import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const ResourceSelect = ({ register }) => {
  const [resources, setResources] = useState([]);
  const [selectedResourceType, setSelectedResourceType] = useState(null);
  
  const groupedResources = _.groupBy(resources, "resourceType");
  console.log(groupedResources);
  console.log(groupedResources.selectedResourceType, "selected resource type");
  const handleSelectFieldChange = (event) => {
    event.preventDefault();
    setSelectedResourceType(event.target.value);
  }
  
  useEffect(() => {
    fetch("http://localhost:7000/assets/resources")
    .then(res => res.json())
    .then( result => {
      console.log(result);
      setResources(result);
    })
    .catch( err => console.error(err));
  }, []);

  return (
    <>
      <select name="resourceType" id="resourcetype" onChange={event => handleSelectFieldChange(event)}>
        <option value={null}>Select Resource Type</option>
        {Object.keys(groupedResources).map((resourceType) => (
          <option value={resourceType}>{resourceType}</option>
        ))}
      </select>
      
      <select name="resource" id="resourceId" ref={register}>
         {!selectedResourceType ? <option disabled>Select Resource Type</option> :
          selectedResourceType && groupedResources[selectedResourceType].map((resource) => (
            <option value={resource.resourceId}>{resource.name}</option>
          ))}
      </select>
    </>
  );
};

export default ResourceSelect;