import { Drawer } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectState, setStateDrawerIPAD } from '../Reducers/IpadViewDrawer'
import { useDispatch } from 'react-redux';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query'
import styles from './drawerSideBar.module.css'
import { Folder, ChevronDown } from "lucide-react";
import { selectCloseState } from '../Reducers/CloseState';
import { selectTabState } from '../Reducers/SideBarTab';
import { AllList } from '../ListContainer/ListContainer';
import { autocompleteClasses } from '@mui/material';
function DrawerSiderBar(props) {
  const CloseStates = useSelector(selectState)
  const CloseState = useSelector(selectCloseState);
  const dispatch = useDispatch();
  const TabState = useSelector(selectTabState);
  console.log(CloseStates)

  const matches = useMediaQuery('only screen and (max-width: 1025px)')

  return (
    <>
      {matches ? (<Drawer
        overlayColor="dark"
        overlayOpacity={0.55}
        overlayBlur={3}
        position="bottom"
        opened={CloseStates}
        onClose={() => { dispatch(setStateDrawerIPAD(false)) }}
        withCloseButton={false}
        size="70%"
        style={{
          overflow:"auto"
        }}
   
      >
        <div
          style={{
            display: "flex",
            flexDirection:"column",


          }}>
            {console.log(AllList,TabState)}
          {TabState >=0 &&AllList[TabState][0]?.map((item) => {
            
            return <div 
            style={{
              display: "flex",
              flexDirection:"row",
  
            }}
            >
              <div className={styles.IconSectionSidebar}>
                <Folder
                  color='white'
                  size={30} />
              </div>
              <div
                style={{
                  display: CloseState === true ? "block" : "none",
                }}
                className={styles.LabelSectionSidebar}
              >
                {item.title}
              </div></div>




          })}
        </div>



      </Drawer>) : ""}

    </>
  )
}

export default DrawerSiderBar
