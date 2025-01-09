import { ReactNode } from "react";


interface dismissableAlertProps{
  children: ReactNode
  onbuttonClicked: () => void;
}

function DismissableAlert({children, onbuttonClicked}:dismissableAlertProps) {
  
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >

      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onbuttonClicked}
      ></button>

    </div>
  );
}

export default DismissableAlert;
