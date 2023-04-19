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
    const  opened = useSelector(selectOpened);
    const  path = useSelector(selectPath);
    const files = useSelector(selectFiles);
    return (
        <div className="App">
            <Directory
                name={name}
                content={content}
                files={files}
                opened={opened}
                path={path}
            />
        </div>
    );
}

export default App;
