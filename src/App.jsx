import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={RegistrationPage} />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
