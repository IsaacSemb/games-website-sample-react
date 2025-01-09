import { ReactNode } from "react";
import "./StyledButton.css"

interface buttonProps {
  children: ReactNode;
  onbuttonClicked?: () => void;
}

//  ? means optional 
//  you can also set enums in annotation so that you get error incase 


function StyledButton({ children, onbuttonClicked }: buttonProps) {
  return (
    <div>
    <button
      type="button"
      className="styled-button"
      onClick={onbuttonClicked}
    >
      {children}
    </button>
    </div>
  );
}

export default StyledButton;

