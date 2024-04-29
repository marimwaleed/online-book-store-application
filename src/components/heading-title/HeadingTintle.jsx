const HeadingTitle = ({title}) => {
    return(
        <div style={divStyle}>
            <h2 style={h2Style}>{title}</h2>
        </div>
    )
}
const divStyle = {
    padding: "10px 30px" , 
    backgroundColor : "#fff"
}
const h2Style = {
    color : "#1925d2" ,
    fontSize : "30px",
    fontWeight : "500",
    borderBottom : "2px solid #1925d2",
    width : "max-content",
    paddingBottom : "5px"

}
export default HeadingTitle;
