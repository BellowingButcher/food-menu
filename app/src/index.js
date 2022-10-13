import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Api';
// import axios from 'axios';
// import { useEffect } from 'react';
// import Api from './Api';
// import HomePage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

  // console.log(data);
  // if (data.length === 0) return null;
  
  
  root.render
  (
        <React.StrictMode>
            <Api />
          </React.StrictMode>
      )
      
      // else ( 
      //   )
      //     }
      // const baseurl = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   function grab () {
  //     axios.get(baseurl).then((response) => {
  //       setData(response.data);
  //     } );
  //   }
  //   grab ()
  // }, [])
  // console.log(data);
  
  //  useEffect(() => {
  //   axios.get(baseurl).then((response) => {
  //               console.log(response);
  //               setData(response.data);
  // } );
  
  
  // function Api() {
  //   const baseurl = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
  //   const [data, setData] = useState([]);
  
  //   React.useEffect(() => {
  //       axios.get(baseurl).then((response) => {
  //           console.log(response);
  //           setData(response.data);
  //       });
  //   }, []);
