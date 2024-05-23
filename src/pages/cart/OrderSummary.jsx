const OrderSummary = ({totalPrice}) => {
    return ( 
        
        <div className="cart-order-summary">
          <div className="order-summery-title">ORDER SUMMARY</div>
          <div className="order-summery-item">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="order-summery-item">
            <span>Shopping Coast</span>
            <span>0</span>
          </div>
          <div className="order-summery-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summery-item">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
     );
}
 
export default OrderSummary;