import React, {ReactNode, useState} from 'react';
import Icon from "./Icon";
import NewItem from "./NewItem";
import Button from "./Button";


type contentType = {
    name: string,
    extension: string
}

type propsType = {
    name: string,
    content: (contentType | propsType)[] | [],
    opened?: boolean
}
const isFile = (object: any) => {
    return 'extension' in object;
}

const Directory: React.FC<propsType> = ({
                                            name,
                                            content,
                                            opened = false
                                        }) => {
    const [open, setOpen] = useState<boolean>(opened);
    const onclickHandler = () => {
        setOpen(!open);
    }

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
    const child = (item: propsType | contentType): any => {
        if ('extension' in item) {
            let icon = getIconByExt(item.extension)
            return <div>
                {icon} {item.name}.{item.extension}
                <Button> <Icon name={'trash-can'} type='regular'/></Button>
            </div>
        } else {
            if ('content' in item)
                return <>
                    <Directory name={item.name} content={item.content}></Directory>
                </>
        }
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
                    <NewItem/>
                    <Button> <Icon name={'trash-can'} type='regular'/></Button>
                </div>
            </div>

            {open && !!content && content.map((item: propsType | contentType, index: number) => {
                return <div key={index} className='flex flex-row space-x-4'>
                    {child(item)}
                </div>
            })
            }

        </div>
    );
};

export default Directory;