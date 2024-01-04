import React from 'react'
import { useSelector } from 'react-redux'
import { selectCloseState } from '../Reducers/CloseState'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import {
  ChevronsLeft,
  Settings,
  LogOut,
} from "lucide-react"
import ListContainer from '../ListContainer/ListContainer'
import DrawerSiderBar from '../DrawerSiderBar/DrawerSideBar'
import { useRouter } from 'next/router'
import styles from '../SideBar/sidebar.module.css'
function SideBar() {
  const CloseState = useSelector(selectCloseState)
  const router = useRouter();
  return (

    <>
      <aside
        className={`${styles.sidebar} ${CloseState === true ? `${styles.width300}` : `${styles.width75}`}`}>
        <div className={styles.CollapseButtonTop}>
          <SideBarMenu
            className={`${CloseState === true ? `${styles.widthIcon300}` : `${styles.width75}`}`}
            icon={<ChevronsLeft size={40} />}
            title="Collapse"
          />
           
        </div>
        <ListContainer />
      

        <div
          className={`${styles.CollapseButtonEnd}`}

        >
          <div className={styles.EndButton}>
            <SideBarMenu icon={<Settings size={40} />}
              action="Non-Action"
              title="Settings" />
          </div>

          <div className={`${styles.EndButton}`}
          onClick={()=>{
            router.push("/signin")
          }}
          >
            <SideBarMenu
              icon={<LogOut size={40} />}
              action="Action"
              title="Logout"
            />
          </div>
        </div>
      </aside>
      <DrawerSiderBar />
    </>



  )
}

export default SideBar
