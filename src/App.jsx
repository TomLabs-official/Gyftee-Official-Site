import { useState } from 'react';
import './App.css';


function App() {
  const [page, setPage] = useState('main');

  if (page === 'update') {
    return ( 
      <div className="Updates">
        <main className="card">
          <p className="eyebrow">Gyftee updates</p>
          <h1>Welcome to the updates page!</h1>
          <p id="hi">Everything about recent updates will be posted here.</p>

          <ul>
            <li><strong>7/20:</strong> development began</li>
            <li><strong>7/21:</strong> home screen, female page, and male page added</li>
            <li><strong>7/22:</strong> no further progress due to technical issues caused by heavy rain and flooding</li>
            <li><strong>7/23:</strong> consulting with investors for development funds</li>
          </ul>

          <div className="actions">
            <button type="button" className="primary-btn" onClick={() => setPage('main')}>
              <strong>Back to main page</strong>
            </button>
          </div>
        </main>
      </div>
    );
  }else if(page === 'main'){

  return (
    <div className="App">
      <main className="card">
        <p className="eyebrow">Official site</p>
        <h1>Welcome to the official Gyftee™ site!</h1>
        <p>
          This site covers everything related to Gyftee™, the one and only tool you need for choosing a special present.
          Don&apos;t forget to check the updates page.
        </p>

        <div className="actions">
          <button type="button" className="primary-btn" onClick={() => setPage('update')}>
            Open updates page
          </button>
          <button type="button" className="primary-btn" onClick={() => setPage('contactinfo')}>
            Open contact info page
          </button>
        </div>
      </main>
    </div>
  );
}else if(page === 'contactinfo'){
  return(
    <div className = "Contactinfo">
      <p>Contact information</p>
      <h1>Welcome to the contact info page!</h1>
      <p>We will list all of our contact information here, so if you would like to, check it out!</p>
      <ul>
        <li><strong>Email:</strong> seikosbsa299@gmail.com</li>
        <li><strong>Phone number:</strong> 914-224-9221 <strong>**rates and fees may apply**</strong></li>
      </ul>
      <button type="button" onClick={() => setPage("main")}>
        Go back to main page
      </button>
    </div>
  )
}
}
export default App;
