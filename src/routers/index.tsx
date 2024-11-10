import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Kanban from '../pages/Kanban/Kanban';
import BlockedPage from '../pages/BlockedPage/BlockedPage';
import SettingsProfile from '../pages/SettingsProfile/SettingsProfile';
import CreateAccountForm from '../pages/Test';
import LoginTest from '../pages/LoginTest';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/test" element={<CreateAccountForm />} />
        <Route path="/test/login" element={<LoginTest />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/setting" element={<SettingsProfile />} />
        </Route>

        <Route path="/notauthorization" element={<BlockedPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
