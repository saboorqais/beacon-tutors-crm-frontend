export const CHANGE_SIDEBAR_TAB = 'CHANGE_SIDEBAR_TAB';


export  const changeSidebarTab = (id) => {
    return {
        type: CHANGE_SIDEBAR_TAB,
        payload: id,
        id:id
    }

};
