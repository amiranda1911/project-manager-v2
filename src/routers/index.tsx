import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Kanban from '../pages/Kanban/Kanban';
import BlockedPage from '../pages/BlockedPage/BlockedPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route element={<PrivateRoute isAuthenticated={true} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/kaban" element={<Kanban />} />
        </Route>

        <Route path="/notauthorization" element={<BlockedPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
