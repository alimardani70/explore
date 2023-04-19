import React, {ReactNode, useState} from 'react';
import Icon from "./Icon";
import NewItem from "./NewItem";
import Button from "./Button";
import {addFolder, addItem, removeDir, removeFile ,fileType, folderType} from '../store/structureSlice'
import {useDispatch} from "react-redux";
import DeleteItem from "./DeleteItem";
import Row from "./Row";

const Directory: React.FC<folderType> = ({
                                             name,
                                             content,
                                             files,
                                             opened = true,
                                             path
                                         }) => {
    const [open, setOpen] = useState<boolean>(opened);
    const onclickHandler = () => {
        setOpen(!open);
    }
    const dispatch = useDispatch()

    const getIconByExt = (ext: string): ReactNode => {
        let icon: ReactNode = '';
        switch (ext) {
            case 'txt':
                icon = <Icon className='text-lime-600' name='file-lines' type='solid'/>;
                break;
            case 'pdf':
                icon = <Icon className='text-lime-600' name='file-pdf' type='solid'/>;
                break;
            case 'jpg':
                icon = <Icon className='text-lime-600' name='image' type='solid'/>;
                break;
            case 'html':
                icon = <Icon className='text-lime-600' name='html5' type='brands'/>;
                break;
            default:
                icon = <Icon className='text-lime-600' name='file' type='regular'/>;

        }
        return icon;
    }
    const child = (item: folderType | fileType): any => {
        if ('extension' in item) {
            let icon = getIconByExt(item.extension)
            return <Row className='space-x-2 bg-gray-200 mt-2 px-2 py-2 rounded'>
                <div>{icon}</div>
                <div>{item.name}.{item.extension}</div>
                <DeleteItem
                    path={item.path}
                    onClick={(path)=>romoveFileHandler(path,item.name ,item.extension  )}
                    isFolder={false}
                />
            </Row>
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
        dispatch(removeDir({path: path}))
    }
    const romoveFileHandler=(path:string , name:string , extension:string):void=>{
        dispatch(removeFile({path:path ,name: name ,extension: extension  }))
    }



    return (
        <div className='flex flex-col justify-normal' >
            <Row>
                <Row className='py-2 bg-gray-200 rounded px-2 mt-2'>
                    <Button onClick={onclickHandler}>
                        <Row className='space-x-2'>
                            <Row className='space-x-2'>
                                {open && <div><Icon name='angle-down' type='solid'/><Icon name='folder-open' type='solid' className='text-sky-600' /></div>}
                                {!open && <div><Icon name='angle-right' type='solid'/><Icon name='folder' type='solid' className='text-sky-600' /></div>}
                            </Row>

                            <div className='px-3'>{name}</div>
                        </Row>
                    </Button>
                    <Row className=' space-x-2'>
                        <NewItem
                            path={path + "/" + name}
                            onSubmit={(item) => dispatch(addFolder({
                                name: item,
                                path: path + "/" + name,
                                content: [],
                                files: []
                            }))}
                            icon={<Icon name='folder-plus' type='solid' className='text-orange-600'/>}
                        />
                        <NewItem
                            path={path + "/" + name}
                            onSubmit={(item) => addFileHandler(item)}
                            icon={<Icon name='file-circle-plus' type='solid' className='text-emerald-500'/>}
                        />
                        <DeleteItem
                            path={path + "/" + name}
                            onClick={(path)=>removeHandler(path)}
                        />
                    </Row>
                </Row>

            </Row>

            {open && <>
                {!!content && content.map((item: folderType, index: number) => {
                    return <Row key={index} className=' space-x-4  px-8'>
                        {child(item)}
                    </Row>
                })}
                {!!files && files.map((item: fileType, index: number) => {
                    return <Row key={index} className=' space-x-4  px-8'>
                        {child(item)}
                    </Row>
                })}
            </>
            }

        </div>
    );
};

export default Directory;