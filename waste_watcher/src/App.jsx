import './App.css';
import { Box } from 'theme-ui';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import Mission from './components/Mission';
// import Contact from './components/contact';
// import Logs from './components/logs';

function App() {
  return (
    <Box mx={20}>
        <Navbar />
        <Hero/>
        <Features/>
        <Mission />
        <Team/>
{/* <Contact/> */}
       {/* <Logs />     */}
    </Box>
  );
}

export default App;
