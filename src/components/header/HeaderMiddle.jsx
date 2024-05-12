import { Link } from "react-router-dom";

const HeaderMiddle = () => {
    return(        
        <div className="header-middle">
                <Link to= "/" className="header-middle-logo">
                    <b>Book</b>
                    <i className="bi bi-book-half"></i>
                    <b>Store</b>
                </Link>
                <div className="header-middle-search-box">
                    <input className="header-middle-search-input" type="search" placeholder="search in bookstore .."></input>
                    <i className="bi bi-search"></i>
                </div>
                <Link to="/cart" className="header-middle-cart-wrapper">
                <i className="bi bi-cart"></i>
                </Link>
            </div>
    );
}
export default HeaderMiddle;