import React, { useState } from "react"


  function ItemComponent(props){

const [count,setcount]=useState(1)



    
    
        return(
            <div id="wrpr_itm">
            <div className="img_cntnr">
    <img src={props.oneproduct.image}/>
    <h4>{props.oneproduct.offer}</h4>
    
            </div>
            <div className="cntnt_cntnr">
    <h3>{props.oneproduct.title}</h3>
    <h4>{props.oneproduct.description}</h4>
    <h4>{props.oneproduct.size}</h4>
    <h4>{props.oneproduct.mrp}</h4>
    <h4 className="price">{props.oneproduct.price}</h4>
    <div className="btn_wrpr">
    <button onClick={(e)=>{props.onAddToCart(props.oneproduct,count)}}>ADD CART</button>
    <div className="wrpr_addrmve">
    <button onClick={(e)=>{setcount(count+1)}}>+</button>
    <span>{count}</span>
    <button onClick={(e)=>{
        if(count>1){
            setcount(count-1)
        }
        }
    }>-</button>
    
    </div>
    </div>
    
            </div>
    
        </div>
        )
    
}
export default ItemComponent