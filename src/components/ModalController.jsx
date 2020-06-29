import React from 'react';

const ModalController = ({ children }) => {
  const [showing, setShowing] = React.useState(false);
  
  const toggle = () => {
    setShowing(!showing);
  }

  const renderProps = {
    toggle,
    showing
  }

  return typeof children === 'function'
  ?  children(renderProps)
  :  children
}

export default ModalController;