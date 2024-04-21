const HeaderTop = ({toggle , setToggle}) => {
    return(
        <div className="header-top">
                <div className="header-top-menu" onClick={()=> setToggle(prev => !prev)}>
                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                </div>
                <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                    +201067363043
                </div>
                <div className="header-top-text">
                    Welcom to online book store..
                </div>
                <div className="header-top-link">
                <i className="bi bi-person"></i>
                Login
                </div>
            </div>
            
    );
}
export default HeaderTop;