import React from "react"
import ModalComponent from"./ModalComponent"
import ItemComponent  from"./ItemComponent"
import products from"../array/products"

class LayoutComponent extends React.Component{
  constructor(props){
    super()
    this.state={
      quantity:0,
      totalAmount:0,
      showDialog:false
    }
    this.onAddToCart=this.onAddToCart.bind(this)
    
  }

 onAddToCart(product,count){
this.setState({
quantity:this.state.quantity+count,
totalAmount:this.state.totalAmount+(product.price*count)
})
          } 


          closeModel = () => {
            this.setState({
              showDialog:false,
              quantity:0,
              totalAmount:0
            })
          }
  
  
  render(){
       
     
      let item = products.map((n,index)=>{
            return <ItemComponent
            key={index}
            oneproduct={n}
            onAddToCart={this.onAddToCart}
            />
          })
        return(
            
                
        <div className="wrpr_itmcntnr">
          <ModalComponent totalAmount={this.state.totalAmount} show={this.state.showDialog} onHide={this.closeModel}/>
    <div className="scrll_box">       
 
{item}



<div className="cntnr_totl_bx"></div>
</div> 

<div className="wrpr_totalbx">
            <div className="quality">
        <h3>Qty {this.state.quantity}</h3>
            <h3>Total Rs: {this.state.totalAmount}</h3>
        </div>
            <button disabled={this.state.quantity===0} onClick={(e)=>{this.setState({showDialog:!this.state.showDialog})}}>CHECKOUT</button>
        </div>



        



    </div>




            
        )
        }
}
export default LayoutComponent