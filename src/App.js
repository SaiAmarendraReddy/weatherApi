import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Signup from './components/signup/Signup';
import Weather from './components/weather/Weather';
import "weather-icons/css/weather-icons.css"

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} >
          <Route path="weather" element={<Weather />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
