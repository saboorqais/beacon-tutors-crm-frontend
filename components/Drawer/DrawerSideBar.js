import { Drawer } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectState, setStateDrawerIPAD } from '../Reducers/IpadViewDrawer'
import { useDispatch } from 'react-redux';
import { useMediaQuery, useMediaQueries } from '@react-hook/media-query'

function DrawerSiderBar(props) {
  const CloseStates = useSelector(selectState)
  const dispatch = useDispatch();
  console.log(CloseStates)

  const matches = useMediaQuery('only screen and (max-width: 1025px)')

  return (
    <div>
      {matches ? (<Drawer
        overlayColor="dark"
        overlayOpacity={0.55}
        overlayBlur={3}
        position="bottom"
        opened={CloseStates}
        onClose={() => { dispatch(setStateDrawerIPAD(false)) }}
        withCloseButton={false}

      >



      </Drawer>) : ""}

    </div>
  )
}

export default DrawerSiderBar
