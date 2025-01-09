import { IoHeartOutline, IoHeartSharp  } from "react-icons/io5";
import { useState } from "react";

interface likeHeartButtonProps {
  buttonSize?: number;
  buttonColor?: string;
  buttonCursor?: string;
  onButtonClicked: () => void;
}

function LikeHeartButton({
  buttonSize = 50,
  buttonColor = "#eb1389",
  buttonCursor = "pointer",
  onButtonClicked,
}: likeHeartButtonProps) {
  const [buttonLiked, setButtonLiked] = useState(false);

  function handleClick() {
    setButtonLiked(!buttonLiked);
  }
  return (
    <>
      {buttonLiked ? (
        <IoHeartSharp
          color={buttonColor}
          size={buttonSize}
          cursor={buttonCursor}
          onClick={() => {
            handleClick();
            onButtonClicked();
          }}
        />
      ) : (
        <IoHeartOutline
          color={buttonColor}
          size={buttonSize}
          cursor={buttonCursor}
          onClick={() => {
            handleClick();
            onButtonClicked();
          }}
        />
      )}
    </>
  );
}

export default LikeHeartButton;
