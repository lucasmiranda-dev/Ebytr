import React from 'react';

function Notes() {
  return (
    <>
      <main>
        <ul>
          <li className='notepad-infos'>
            <div>
              <strong>Fazer Lista</strong>
              <div>x</div>
            </div>
            <textarea defaultValue='Lorem ipsum dolor sit amet, consectetur'></textarea>
            <span>!</span>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Notes;
