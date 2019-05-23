import React from 'react';
import ReactDOM from 'react-dom';

function useModal(initialValue = false) {
  const [isOpen, setOpen] = React.useState(initialValue);
  const toggleModal = React.useCallback(() => setOpen(!isOpen));
  const isMobile = false;
  function Modal({ children }) {
    return isOpen
      ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            style={{
              backgroundColor: 'black',
              opacity: '0.8',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1,
            }}
          />
          <div
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={toggleModal}
            style={{
              position: 'fixed',
              zIndex: 2,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                position: 'relative',
                maxWidth: isMobile ? '100%' : '500px',
                margin: isMobile ? '0' : '30px auto',
              }}
            >
              <div modal-header />
              <div modal-body>{children}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
      : null;
  }

  return { Modal, toggleModal };
}

export default useModal;

// https://dev.to/flexdinesh/react-hooks-test-custom-hooks-with-enzyme-40ib
// https://github.com/Upmostly/modali/blob/master/src/index.js
// https://github.com/Upmostly/modali/blob/master/src/modali.css
