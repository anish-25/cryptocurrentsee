import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import ResultState from './Context/ResultState';
import NewsPage from './Components/NewsPage';
import {BrowserRouter as Router} from 'react-router-dom'
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import Footer from './Components/Footer';

function App() {


  return (
    <Router >

    <ResultState>
  <div className="pages">
    <NavBar/> 

  
<div className='homepage'  id='homepagePage' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
<Homepage/>
</div>
<div className='newspage'  id="trendingPage" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">

<NewsPage/>
</div>
<div className='contactpage' id='contactPage' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">

<ContactPage/>
</div>
<div className='aboutpage' id='aboutPage' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">

<AboutPage/>
</div>
<div className='footer' id='footer' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">

<Footer/>
</div>
</div>

    </ResultState>
    </Router>

  
  );
}

export default App;
