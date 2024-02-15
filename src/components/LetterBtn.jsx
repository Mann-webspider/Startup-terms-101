import { useRef, useState } from 'react';
import ListOfTerms from './ListOfTerms';
function LetterBtn(props) {
  const [showData, setShowData] = useState(false);
  return (
    <>
      <button
        className="px-6 py-4 bg-[#4b4d4c] rounded-md hover:bg-[#515452] active:bg-[#474a48]"
        onClick={() => {
          setShowData(() => !showData);
        }}
      >
        {props.letter}
      </button>
      <ListOfTerms
        data={props.data}
        letter={props.letter}
        showData={showData}
      />
    </>
  );
}
export default LetterBtn;
