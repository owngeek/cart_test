import React, { useState, useEffect } from "react"

function ModalComponent (props){

        return(
            <div className="modal" style={{display:props.show ? "flex": "none"}} onClick={(e)=>{ props.onHide(); }}>

<div className="alert">
<span>Transaction successful</span>
<h3>Total Price Rs: {props.totalAmount}</h3>


</div>
</div>
        )
    }

export default ModalComponent