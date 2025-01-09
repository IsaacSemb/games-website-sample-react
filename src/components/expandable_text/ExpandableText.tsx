

interface expandableTextProps{
  children: string
  onMoreClicked: ()=>void;
  buttonText: string
}

function ExpandableText({children, onMoreClicked, buttonText}:expandableTextProps) {
  return (
    
    <>
    <p>{children}</p>
    <button onClick={onMoreClicked}>{buttonText}</button>
    </>
  )
}

export default ExpandableText