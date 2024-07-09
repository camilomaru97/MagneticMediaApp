import { useState } from 'react';

export const MsgWarning = ({ msg = '', type }) => {
  const [msgError, setMsgError] = useState();
  if (type === 'warning') {
    setMsgError(
      <div className="msg_warning">
        <p>{msg}</p>
      </div>
    );
  }
  if (type === 'success') {
    setMsgError(
      <div className="msg_success">
        <p>{msg}</p>
      </div>
    );
  }

  return(<p>{msgError}</p>);
};
