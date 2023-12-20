
import './App.css';
import Header from './components/Header/Header';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import Home from './pages/Index/Home';

function App() {
  const logo = 'Maxi.az'
  const url =['Ana segife', 'Lazimsiz sehife', 'Haqqimizda']
  const userName ='Knyaz'
  return (
    <div className="App">

     <Header data={logo}  links={url}/>
     <Home/>
     <WelcomeMessage name={userName} />
     
    </div>
  );
}

export default App;
