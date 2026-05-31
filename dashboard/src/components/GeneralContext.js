import React,{useState} from 'react';

import BuyActionWindow from "./BuyActionWindow"
import SellActionWindow from "./SellActionWindow"


const GeneralContext=React.createContext({
    openBuyWindow:(uid)=>{},
    openSellWindow:(uid)=>{},
    closeBuyWindow:()=>{},
    closeSellWindow:()=>{},

})
export const GeneralContextProvider=(props)=>{
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [isSellWindowOpen,setIsSellWindowOpen]=useState(false);
    const [selectedStockId,setSelectedStockId]=useState("");


const handleBuyWindow=(uid)=>{
    setIsBuyWindowOpen(true);
    setIsSellWindowOpen(false);
    setSelectedStockId(uid);
}
const handleSellWindow=(uid)=>{
    setIsSellWindowOpen(true);
    setIsBuyWindowOpen(false);
    setSelectedStockId(uid);
}
const handleCloseWindow=()=>{
    setIsBuyWindowOpen(false);
    setSelectedStockId("");
}
const handleCloseSellWindow=()=>{
    setIsSellWindowOpen(false);
    setSelectedStockId("");
}

return(
    <>
        <GeneralContext.Provider
            value={{
                openBuyWindow:handleBuyWindow,
                openSellWindow:handleSellWindow,
                closeBuyWindow:handleCloseWindow,
                closeSellWindow:handleCloseSellWindow,
            }}
            >
                {props.children}
                {isBuyWindowOpen && <BuyActionWindow uid={selectedStockId}/>}
                {isSellWindowOpen && <SellActionWindow uid={selectedStockId}/>}

        </GeneralContext.Provider>
    </>
)
};
export default GeneralContext;