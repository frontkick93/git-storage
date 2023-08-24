import React from "react";


function MyHome(){
    const handleRefresh =() =>{
        window.location.reload();
      }
    
    return(
        
        <div className="main">
                <button onClick={handleRefresh}>Refresh</button>
                <iframe title="myframe" width="1860" height="880" src="https://analytics.zoho.com/open-view/2698918000000003845/c42421b06d184611549d0efcff44cc4c">hello</iframe>
              
                
        </div>
            
        

    )
}
export default MyHome;