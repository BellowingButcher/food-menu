import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

// import Api from './Api';
// import HomePage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Api() {
  const baseurl = 'https://astute-baton-362318.ue.r.appspot.com/api/json/';
  const [data, setData] = useState([]);

  React.useEffect(() => {
      axios.get(baseurl).then((response) => {
          console.log(response);
          setData(response.data);
      });
  }, []);
  
  console.log(data);
  if (data.length === 0) return null;

  return (
    root.render(
            <React.StrictMode>
            <HomePage />
          </React.StrictMode>
      )
      )
    }
