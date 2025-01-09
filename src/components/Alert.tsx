import { ReactNode } from "react";


interface alertProps{
  children: ReactNode

}

function Alert( {children}: alertProps) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {children}
      </div>
    </>
  );
}

export default Alert;
