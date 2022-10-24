export const CLOSE_BUTTON_STATUS = 'CLOSE_BUTTON_STATUS';


export  const changeSidebarTab = (state) => {
    return {
        type: CLOSE_BUTTON_STATUS,
        payload: state,
        state:state
    }

};
