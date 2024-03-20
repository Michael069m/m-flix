import React, { createContext, useState } from "react";
const ViewContext = createContext(null);
const ViewProvider = ({children}) => {
    const [mobileView ,setMobileView] = useState(false);
    const [menuVisible , setMenuVisible] = useState(false);
    return(
        <ViewContext.Provider value={{mobileView,setMobileView,menuVisible,setMenuVisible}}>
            {children}
        </ViewContext.Provider>
    )
}
export { ViewProvider , ViewContext} ;