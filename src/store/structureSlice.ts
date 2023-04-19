import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "./store";


export type fileType = {
  name: string,
  extension: string,
  path: string,
}

export type folderType = {
  name: string,
  content: folderType[] | any[],
  files: fileType[] | any[]
  opened?: boolean,
  path: string
}


const initialState: folderType = {
  name: 'root',
  content: [],
  files: [],
  opened: true,
  path: '.'
};

const findNode = (node: folderType, path: string, nodeName: string): folderType => {
  for (let i = 0; i < node.content.length; i++) {
    // console.log(node.content[i].path , path)
    // console.log(nodeName , node.content[i].name)
    if (node.content[i].path === path && nodeName === node.content[i].name) {
      return node.content[i];
    }
  }
  return node;
}
export const structureSlice = createSlice({
  name: "structure",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<fileType>) => {

      let {name, extension, path} = action.payload;
      const newFile: fileType = {
        name: name,
        extension: extension,
        path: path
      }
      let sections = path.split('/');
      let searchObj = state;
      for (let i = 0; i < sections.length - 1; i++) {
        let node = findNode(searchObj, sections.slice(0, i + 1).join('/'), sections[i + 1]);
        searchObj = node;
        if (searchObj.files.findIndex(item => item.name === name && item.extension === extension) === -1) {
          searchObj.files.push(newFile)
        } else {
          alert(' this name is exist')
        }
      }
    },
    addFolder: (state, action: PayloadAction<folderType>) => {
      const {path, name, content, files} = action.payload;
      const newFolder: folderType = {
        path: path,
        name: name,
        content: content,
        files: files,
        opened: true
      }
      let sections = path.split('/');
      let searchObj = state;
      for (let i = 0; i < sections.length - 1; i++) {
        let node = findNode(searchObj, sections.slice(0, i + 1).join('/'), sections[i + 1]);
        searchObj = node;
        if (path == searchObj.path + "/" + searchObj.name) {
          if (searchObj.content.findIndex(item => item.name === name) === -1) {
            searchObj.content.push(newFolder)
          } else {
            alert(' this name is exist')
          }
        }
      }
    },
    removeFile: (state, action: PayloadAction<fileType>) => {
      let {name, extension, path} = action.payload;
      const newFile: fileType = {
        name: name,
        extension: extension,
        path: path
      }
      let sections = path.split('/');
      let searchObj = state;
      for (let i = 0; i < sections.length - 1; i++) {
        let node = findNode(searchObj, sections.slice(0, i + 1).join('/'), sections[i + 1]);
        searchObj = node;
        let index = searchObj.files.findIndex(item => item.name === name && item.extension === extension)
        if (index !== -1) {
          let temp = [
            ...searchObj.files.slice(0, index),
            ...searchObj.files.slice(index + 1),
          ];
          searchObj.files = temp;
        }
      }
    },
    removeDir: (state, action: PayloadAction<{ path: string }>) => {
      let sections = action.payload.path.split('/');
      const path = sections.slice(0, -1).join('/');
      let folderName = sections.slice(-1)['0'];
      let searchObj = state;
      for (let i = 0; i < sections.length - 1; i++) {
        let node = findNode(searchObj, sections.slice(0, i + 1).join('/'), sections[i + 1]);
        searchObj = node;
        if (path === searchObj.path + "/" + searchObj.name) {
          let index = searchObj.content.findIndex(item => item.name === folderName);
          console.log(index)
          if (index !== -1) {
            let temp = [
              ...searchObj.content.slice(0, index),
              ...searchObj.content.slice(index + 1),
            ];
            searchObj.content = temp;
          }
        }
      }
    }
  },
});

export const {addItem, addFolder, removeFile, removeDir} = structureSlice.actions;

export const selectName = (state: RootState) => state.structure.name;
export const selectContent = (state: RootState) => state.structure.content;
export const selectFiles = (state: RootState) => state.structure.files;
export const selectOpened = (state: RootState) => state.structure.opened;
export const selectPath = (state: RootState) => state.structure.path;

export default structureSlice.reducer;
