import React, {ReactNode, useState} from 'react';
import Icon from "./Icon";
import NewItem from "./NewItem";
import Button from "./Button";
import {addFolder, addItem, removeDir, removeFile ,fileType, folderType} from '../store/structureSlice'
import {useDispatch} from "react-redux";
import DeleteItem from "./DeleteItem";

const Directory: React.FC<folderType> = ({
                                             name,
                                             content,
                                             files,
                                             opened = true,
                                             path
                                         }) => {
    console.log(opened)
    const [open, setOpen] = useState<boolean>(opened);
    const onclickHandler = () => {
        setOpen(!open);
    }
    const dispatch = useDispatch()

    const getIconByExt = (ext: string): ReactNode => {
        let icon: ReactNode = '';
        switch (ext) {
            case 'txt':
                icon = <Icon name='file-lines' type='solid'/>;
                break;
            case 'pdf':
                icon = <Icon name='file-pdf' type='solid'/>;
                break;
            case 'jpg':
                icon = <Icon name='image' type='solid'/>;
                break;
            case 'html':
                icon = <Icon name='html5' type='brands'/>;
                break;
            default:
                icon = <Icon name='file' type='regular'/>;

        }
        return icon;
    }
    const child = (item: folderType | fileType): any => {
        if ('extension' in item) {
            let icon = getIconByExt(item.extension)
            return <div className='flex flex-row'>
                {icon} {item.name}.{item.extension}
                <DeleteItem path={item.path} onClick={(path)=>romoveFileHandler(path,item.name ,item.extension  )} />
            </div>
        } else {
            if ('content' in item)
                return <>
                    <Directory files={item.files} name={item.name} content={item.content} path={item.path}></Directory>
                </>
        }
    }
    const addFileHandler = (item: any) => {
        let arr = item.split('.')
        if (arr.length > 1) {
            return dispatch(addItem({
                name: arr.slice(0, -1).join('.'),
                path: path + "/" + name,
                extension: arr.slice(-1)[0]
            }))
        } else {
            return dispatch(addItem({name: item, path: path + "/" + name, extension: 'unknown'}))
        }
    }
    const removeHandler = (path: string):void => {
        console.log(path)
        dispatch(removeDir({path: path}))
    }
    const romoveFileHandler=(path:string , name:string , extension:string):void=>{
        dispatch(removeFile({path:path ,name: name ,extension: extension  }))
    }



    return (
        <div>
            <div className='flex flex-row'>
                <Button onClick={onclickHandler}>
                    {open && <><Icon name='angle-down' type='solid'/><Icon name='folder-open' type='solid'/></>}
                    {!open && <><Icon name='angle-right' type='solid'/><Icon name='folder' type='solid'/></>}
                    {name}
                </Button>
                <div className='flex flex-row space-x-2'>
                    <NewItem
                        path={path + "/" + name}
                        onSubmit={(item) => dispatch(addFolder({
                            name: item,
                            path: path + "/" + name,
                            content: [],
                            files: []
                        }))}
                        icon={<Icon name='check-square' type='solid'/>}
                    />
                    <NewItem
                        path={path + "/" + name}
                        onSubmit={(item) => addFileHandler(item)}
                        icon={<Icon name='file-circle-plus' type='solid'/>}
                    />
                    <DeleteItem
                        path={path + "/" + name}
                        onClick={(path)=>removeHandler(path)}
                    />
                </div>
            </div>

            {open && <>
                {!!content && content.map((item: folderType, index: number) => {
                    return <div key={index} className='flex flex-row space-x-4  px-8'>
                        {child(item)}
                    </div>
                })}
                {!!files && files.map((item: fileType, index: number) => {
                    return <div key={index} className='flex flex-row space-x-4  px-8'>
                        {child(item)}
                    </div>
                })}
            </>
            }

        </div>
    );
};

export default Directory;