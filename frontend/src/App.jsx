import './App.css';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function App() {

  const [t, i18n] =useTranslation();

  return (
    <>
      <div className='home'>
          <Outlet/>
        </div>
    </>
  );
}

export default App;
