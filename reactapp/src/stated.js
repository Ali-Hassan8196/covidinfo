



// class App extends React.Component{
//     constructor(){
//         super()
//   this.state={users:null}
//     }
  
   
  //   addtodos=()=>{
  //       this.state.todos.push(this.state.value)
  //       this.setState({todos:this.state.todos})
  //   }
  //   deltodos=(i)=>{
  //       this.state.todos.splice(i,1)
  //       this.setState({todos:this.state.todos})
  //   }
  //   edittodos=(i)=>{
  // var newval=prompt('Enter new value to add')
  // this.state.todos[i]=newval
  // this.setState({todos:this.state.todos})
  //   }
    
//     componentDidMount(){
//       fetch('https://reqres.in/api/users').then((resp)=>{
//         resp.json().then((result)=>{
//           console.warn(result.data)
//           this.setState({users:result.data})
          
//         })
//       })
//     }
  
//     render(){
//         return(
//           <div>
  
  
//   <h2>
//     {
//     this.state.users ?
//     this.state.users.map((item,i)=>
//     <div ><p>{i}---{item.first_name} <br />
//          {item.last_name} <br />
//          {item.email}
//     </p></div>
//     )
//     :null
//     }
//     </h2>
  
            {/* <div style={{textAlign:'center', marginTop:'50px'}}>
                <input placeholder="Enter value to add" type="text" onChange={(e)=>this.setState({
                    value:e.target.value 
                })}  />
                <button onClick={()=>this.addtodos()} >ADD</button>
          <ul>
              {this.state.todos.map((v,i)=>{
                  return <li key={i}><h3>{v}</h3>
                  <button onClick={()=>this.deltodos(i)} >DELETE</button>
                  <button onClick={()=>this.edittodos(i)} >EDIT</button>
                  </li>
              })}
          </ul> 
            </div> */}
             
            {/* </div>
        )
    }
  }
  export default App; */}

// export default Stated;