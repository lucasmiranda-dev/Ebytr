import React from 'react';

function Notes() {
  return (
    <>
      <main>
        <ul>
          <li className='notepad-infos'>
            <div>
              <strong>Meu titulo</strong>
              <div>x</div>
            </div>
            <textarea defaultValue='Lorem lipsum is simply'></textarea>
            <span>!</span>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Notes;
