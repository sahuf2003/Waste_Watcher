// import './App.css';
import { Box } from 'theme-ui';
import Navbar from './components/Navbar';
import { Logs } from './components/logs';

function App() {
  return (
    <Box mx={30}>
      <Navbar />
      <Logs/>
    </Box>
  );
}

export default App;