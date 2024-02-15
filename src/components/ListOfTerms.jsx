import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Meaning from './Meaning';
function ListOfTerms(props) {
  const [showMean, setShowMean] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <div>
        {props.showData
          ? Object.entries(props.data[props.letter]).map(([term, mean]) => {
              return (
                <>
                  <ul className="flex w-80">
                    <div className="relative">
                      <button
                        className=" bg-[#3a3b3a] hover:bg-[#515452] px-4 py-3 my-6 transition duration-400 w-44 text-left rounded-lg text-sm flex justify-between items-center"
                        onMouseOver={(e) => {
                          setShowMean(() => true);
                          setText(() => e.target.innerText);
                        }}
                        onMouseOut={(e)=>{
                          setShowMean(() => false);
                        }}
                      >
                        {term}

                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                      <Meaning
                        mean={mean}
                        showMean={showMean}
                        text={text}
                        term={term}
                      />
                    </div>
                  </ul>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}
export default ListOfTerms;
