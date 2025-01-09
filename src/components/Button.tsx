interface buttonProps {
  children: string;
  onbuttonClicked: () => void;
  color?: "primary"| "secondary"| "success"| "danger"| "warning"| "info"| "light"| "dark";
}

//  ? means optional 
//  you can also set enums in annotation so that you get error incase 

function Button({ children, color='primary', onbuttonClicked }: buttonProps) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onbuttonClicked}
    >
      {children}
    </button>
  );
}

export default Button;

