import React from 'react';

const useArchivesAPI = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:7000/${url}`, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  
  return { response, error };
};

export default useArchivesAPI;