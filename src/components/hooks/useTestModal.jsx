import React from "react";

const useTestModal = () => {
  let [showing, setShowing] = React.useState(false);

  let toggle = () => {
    setShowing(!showing)
  };

  return { showing, toggle };
};

export default useTestModal;
