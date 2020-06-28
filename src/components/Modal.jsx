import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

const Modal = ({ showing, toggle, children }) => {

  return (
    showing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </React.Fragment>, document.body
    ) : null
  ) 
}

export default Modal;