import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFolderPlus , faFileCirclePlus , faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faFolder, faFolderOpen,faFile , faFileLines, faFilePdf , faImage} from '@fortawesome/free-regular-svg-icons'
import {  faHtml5  } from '@fortawesome/free-brands-svg-icons'

import Directory from "./components/Directory";

function App() {
  return (
    <div className="App">
      <div className='border border-amber-600 bg-gray-200 drop-shadow transition-shadow'>
          {/*<FontAwesomeIcon icon={faFolder} />*/}
          {/*<FontAwesomeIcon icon={faFolderOpen} />*/}
          {/*<FontAwesomeIcon icon={faFolderPlus} />*/}
          {/*<FontAwesomeIcon icon={faFileCirclePlus} />*/}
          {/*<FontAwesomeIcon icon={faTrashCan} />*/}
          {/*<FontAwesomeIcon icon={faFile} />*/}
          {/*<FontAwesomeIcon icon={faFileLines} />*/}
          {/*<FontAwesomeIcon icon={faFilePdf} />*/}
          {/*<FontAwesomeIcon icon={faImage} />*/}
          {/*<FontAwesomeIcon icon={faHtml5} />*/}
          <Directory
            name={'Root'}
          />
      </div>
    </div>
  );
}

export default App;
