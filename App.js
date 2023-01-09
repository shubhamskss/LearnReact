import React from 'react';
import ReactDOM from 'react-dom/client'
// const heading=React.createElement("h1",{},"pure react")

 const HeaderComponent=()=>{
    return (
        <>
<div className='headerdiv' style={{display:"flex",border:"1px solid Black"}}>
    <img className="logo" alt="logo" src="https://www.shutterstock.com/image-vector/love-eat-logo-cafe-restaurant-600w-513914290.jpg" style={{width:"120px"}}></img>
    <input type="text" placeholder="Search.." className='search' style={{width:"120px",height:"30px",marginLeft:"400px",marginTop:"30px"}}></input>
<img alt="userIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5UFIpbit48iM8lYciyCZd0tSijEtEX3LdMUJcctd&s" style={{width:"120px", float: "right",
        position: "absolute",
        right: 0}}></img>
</div>
        
        </>
    )

}
const AppLayout=()=>{
    return (
        <>
        <HeaderComponent/>
        </>
    )
}


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);