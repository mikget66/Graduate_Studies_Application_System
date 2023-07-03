import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <div className='home'>
        <div className="uni-logo">
        </div>
          <Outlet/>
        </div>
    </>
  );
}

export default App;
