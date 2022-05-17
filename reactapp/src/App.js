import React from "react";
import './App.css'
import Signin from "./signin";
import Signup from "./signup";
import Home from "./home";
import { Routes,Route,Link } from "react-router-dom";


class App extends React.Component{
  constructor(){
    super()
  }
  render(){
       return(
      <>
      <div className='div'>
        <Link to='/'      style={{color:'black',textDecoration:'none'}}><h2>Home</h2></Link>
        <Link to='signin' style={{color:'black',textDecoration:'none'}}><h2>Sign In</h2></Link>
        <Link to='signup' style={{color:'black',textDecoration:'none'}}><h2>Sign Up</h2></Link>
      </div>
      
    
     <Routes>
        <Route path='/'       element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    
      </>
    )
  }
}
export default App;









































































// import React, { useState } from 'react';
// import './App.css'

// function App(){

//   const [data,setData]=useState({names:"",email:""});
//   const [getdata,setGetdata]=useState({fname:"",femail:""});
  
//   const handleinput=(e)=>{
//          e.preventDefault();
//          setGetdata({fname:data.names,femail:data.email});
//          }

//          const del=()=>{
//             setGetdata({femail:""})
//          }
//          const dele=()=>{
//           setGetdata({fname:""})
//        }

//        const edit=()=>{
//          var newvalues=prompt("Add new fname...");
//          setData(getdata.fname=newvalues);
         
//        }

//        const editemail=()=>{
//          var newemail=prompt("Enter new email...");
//          setData(getdata.femail=newemail);
//        }

//   return (
//     <div className='maindiv'>
//        <form onSubmit={handleinput}>
//         <input type="text" onChange={(e)=>setData({names:e.target.value})} /><br/>
//         <input type="text" onChange={(e)=>setData({email:e.target.value})} /> <br />
        
//         <button type='submit' >ADD IT</button>
       
        
//         </form>
//         <br /><br /><br /><br /><br />
//         <input type="text" value={getdata.fname} /> 
//         <button onClick={dele} >DEL</button>
//         <button onClick={edit} >EDIT</button>
//         <br />
//         <input type="text" value={getdata.femail}/>
//         <button onClick={del} >DEL</button>
//         <button onClick={editemail} >EDIT</button>
//     </div>
//   )
// }
// export default App;



























































// // import React from "react";
// // import './App.css';
// // import { useState } from "react";
// // import { useEffect } from "react";
// //  function App(){

// //    const [data,setData]=useState();
// //    const [arrdata,setArrdata]=useState([]);
// //    const [apidata,setApidata]=useState([]);

// //   const addme=()=>{
// //     setArrdata((olditems)=>{
// //       return [...olditems,data]
// //     })
// //   }
// //        const editdata=(i)=>{
// //         var newval=prompt('Enter new value')
// //         setData(arrdata[i]=newval)
// //        }

// //        const deldata=(i)=>{
// //          setData(arrdata.splice(i,1))
// //        }
// //           const delall=()=>{
// //             setArrdata([]);
// //           }
      
// //           useEffect(()=>{
// //             fetch('https://reqres.in/api/users').then((resp)=>{
// //               resp.json().then((result)=>{
// //                 console.warn(result.data)
// //                 setApidata(result.data)
// //               })
// //             })
// //           })

        


// //    return(
// //      <div className="maindiv">
// //        <input className="input" type="text" onChange={(e)=>setData(e.target.value)}  />
// //        <button onClick={addme}>ADD</button>
// //        <br />
// //        <button onClick={delall}>DELETE ALL</button>

// //        <ul>
// //          {arrdata.map((v,i)=>{
// //            return <li key={i}>{v}
// //            <button onClick={()=>editdata(i)}>EDIT</button>
// //            <button onClick={()=>deldata(i)}>DELETE</button>
// //            </li>
// //          })}
// //        </ul>
// //           <ul>
// //             {apidata.map((v,i)=>{
// //               return <li>{i}---{v.first_name} 
// //               {v.email}
// //               </li>
// //             })}
// //           </ul>
// //      </div>
// //    )

// //  }
// //  export default App;

















// // import React from 'react';
// // import { useState } from 'react';
// // import { useEffect } from 'react';
// // import "./App.css";

// // function App(){
// //    const [items,setItems]=useState();
// //    const [data,setData]=useState([]);
// //    const [state,setState]=useState({user:''})
// //    const addvalues=()=>{
// //      setData((olditems)=>{
// //        return [...olditems,items]
// //      })
// //    }
// //      const removeitem=()=>{
// //        setData([])
// //      }
// //        const edititems=(i)=>{
// //          var newval=prompt('Enter new value...')
// //          setItems(data[i]=newval);
// //        }
// //        const deleteitem=(i)=>{
// //          setItems(data.splice(i,1));
// //        }
// //          const addtodo=(e)=>{
// //               setItems(e.target.value);
// //        }
      
// //        useEffect(()=>{
// //         fetch('https://reqres.in/api/users').then((resp)=>{
// //                   resp.json().then((result)=>{
// //                     console.warn(result.data)
// //                     setState({users:result.data})
                    
// //                   })
// //                })
// //        })


// //   return(
// //     <>
// //     <div className='maindiv'>
// //          <input type="text" onChange={addtodo}/>
         
// //          <button onClick={addvalues}>ADD ITEMS</button>

// //          <ul>
// //            {data.map((v,i)=>{
// //              return <li key={i}>{v} 
// //               <button onClick={()=>edititems(i)} >EDIT</button>
// //               <button onClick={()=>deleteitem(i)}>DELETE</button> <br />
              
// //               </li> 
            
// //            })}
// //          </ul>
// //          <button onClick={removeitem}>DELETE ALL</button>
// //     </div>
// //     </>
// //   )
// // }
// // export default App;

// // import React, {useState} from "react";
// // import './App.css';
// //  function App(){

// //   const [data,setData]=useState();
// //   const [arr,setArr]=useState([]);

// //   const addval=()=>{
// //     setArr((oldItem)=>{
// //       return [...oldItem,data]
// //     })
// //   }
// //   return(
// //      <div className="div1">
// //        <input type="text" onChange={(e)=>setData(e.target.value)} />
// //        <button onClick={addval} >ADD</button>
// //        <ul>
// //          {arr.map((v,i)=>{
// //            return <li key={i}>{v}</li>
// //          })}
// //        </ul>
// //      </div>
// //    ) 
   
// //  } 
// // export default App;





    













     

      
