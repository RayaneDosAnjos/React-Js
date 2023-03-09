import React, { useEffect, useState } from "react";

function Counter(props){

    const [count, setCount] = useState(0)

    useEffect(()=> {
        setCount(parseInt(localStorage.getItem("count")))
        return ()=>{
            console.log("Não tem mais contador")
        }
    },[])
    useEffect(()=>  {
        document.title = count
        localStorage.setItem("count", count)
    },[count])



    function add(){
        setCount(count+1)

    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}





// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {Count: 1}
//         this.add = this.add.bind(this)
//     }
    
//     add(){ 
//       this.setState({Count: this.state.Count + 1}) 
      
//     }

//     render(){
//         return(
//         <div>
//             <h1>Counter: {this.state.Count}</h1>
//             <button onClick={this.add}>Add</button>
//         </div>
//         )

        
//     }
// }

export default Counter