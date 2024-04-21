const HeaderMiddle = () => {
    return(        
        <div className="header-middle">
                <div className="header-middle-logo">
                    <b>Book</b>
                    <i className="bi bi-book-half"></i>
                    <b>Store</b>
                </div>
                <div className="header-middle-search-box">
                    <input className="header-middle-search-input" type="search" placeholder="search in bookstore .."></input>
                    <i className="bi bi-search"></i>
                </div>
                <div className="header-middle-cart-wrapper">
                <i className="bi bi-cart"></i>
                </div>
            </div>
    );
}
export default HeaderMiddle;