import { useState } from "react";
import ExpandableText from "./ExpandableText"


function App1() {
  
  const phrase = "Common in programming contexts where directories or files are used as imports or module names, especially in languages like Python."
  const [words, setWords] = useState(phrase)
  const [isExpanded, setIsExpanded] = useState(false)

  function evaluateIsExpanded(){
    return isExpanded ? 
    setWords(phrase) : 
    setWords( phrase.substring(0,10) + "...")
  }

  function handleOnMoreClicked(){
    evaluateIsExpanded()
    setIsExpanded(!isExpanded)
    
  }
  return (
    <>
    <ExpandableText buttonText={isExpanded?"MORE":"LESS"} onMoreClicked={handleOnMoreClicked}>
      {words}
    </ExpandableText>

    </>
  )
}

export default App1