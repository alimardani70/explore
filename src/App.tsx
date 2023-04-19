import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Directory from "./components/Directory";
import Icon from "./components/Icon";
library.add(fab, far, fas);

function App() {
  return (
    <div className="App">
      <div className='border border-amber-600 bg-gray-200 drop-shadow transition-shadow'>
          <Icon name='folder' type='solid' />
          <Icon name='folder-open'  type='regular' />
          <Icon name='folder-plus'  type='solid' />
          <Icon name='file-circle-plus'  type='solid' />
          <Icon name='file'  type='solid' />
          <Icon name='file-lines'  type='solid' />
          <Icon name='file-pdf'  type='solid' />
          <Icon name='image'  type='solid' />
          <Icon name='html5'  type='brands' />
          <Icon name='angle-right'  type='solid' />
          <Icon name='angle-down'  type='solid' />
      </div>
        <div className='border mt-2 border-amber-600 bg-gray-100 drop-shadow transition-shadow'>

        <Directory
            name={'Root'}
            content={[
                {name:'ali', extension : 'txt'},
                {name:'newFolder', content: [
                        {name:'txt1', extension : 'jpg'},
                        {name:'txt2', extension : 'html'},
                        {name:'txt3', extension : 'txt'},
                        {name:'txt4', extension : 'any'},
                    ] },
                {name: 'asd',extension:'pdf'},
                {name:'newFolder2' , content: []}
            ]}
          />
      </div>
    </div>
  );
}

export default App;
