import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

import Directory from "./components/Directory";
import {selectName,selectContent, selectFiles ,selectOpened , selectPath} from "./store/structureSlice";
import { useSelector } from 'react-redux'

library.add(fab, far, fas);

function App() {
    const name = useSelector(selectName);
    const content = useSelector(selectContent);
    const  openend = useSelector(selectOpened);
    const  path = useSelector(selectPath);
    const files = useSelector(selectFiles);
    console.log(content)
    return (
        <div className="App">
            <Directory
                name={name}
                content={content}
                files={files}
                opened={openend}
                path={path}
            />
{/*            <Directory
                name={name}
                path='./'
                content={[
                    {name: 'ali', extension: 'txt'},
                    {
                        name: 'newFolder',
                        path: './root/',
                        content: [
                            {name: 'txt1', extension: 'jpg'},
                            {name: 'txt2', extension: 'html'},
                            {name: 'txt3', extension: 'txt'},
                            {name: 'txt4', extension: 'any'},
                        ]
                    },
                    {name: 'asd', extension: 'pdf'},
                    {
                        name: 'newFolder2',
                        content: [],
                        path: './root/'
                    }
                ]}
            />*/}
        </div>
    );
}

export default App;
