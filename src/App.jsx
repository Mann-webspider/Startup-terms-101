import { useRef, useState } from 'react';
import data from './startup.json';
import './App.css';
import { HorizontalSection, ScrollContainer } from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';
import LetterBtn from './components/LetterBtn';

function App() {


  return (
    <>
      <ScrollContainer>
        {/* <HorizontalSection> */}
          <div className="w-[100dvw]   flex items-center justify-center mx-12">
            {Object.keys(data).map((letter) => (
              <div
                key={letter}
                className="ns-horizontal-section__item flex-col text-left "
              >
                <LetterBtn letter={letter} data={data} />
              </div>
            ))}
          </div>
        {/* </HorizontalSection> */}
      </ScrollContainer>
    </>
  );
}

export default App;
