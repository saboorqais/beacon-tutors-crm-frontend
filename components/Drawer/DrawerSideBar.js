import { Drawer } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectState } from '../Reducers/IpadViewDrawer'



function DrawerSiderBar(props) {
  const CloseStates = useSelector(selectState)
  console.log(CloseStates)
  return (
    <div>
    <Drawer
       overlayColor="dark"
       overlayOpacity={0.55}
       overlayBlur={3}
       position="bottom"
       opened={CloseStates}
       withCloseButton={false}

     >


    </Drawer>
    </div>
  )
}

export default DrawerSiderBar
