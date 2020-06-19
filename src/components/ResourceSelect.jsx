import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ResourceOption from './ResourceOption';

const ResourceSelect = ({ register }) => {
  const [resources, setResources] = useState([]);

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
    <select name="resource" id="resourceId" ref={register}>
      {resources.map((resource) => {
        return (
          <option value={resource.resourceId}>{resource.name}</option>
        )
      })}
    </select>
  );
};

export default ResourceSelect;