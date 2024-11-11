import { useNavigate } from 'react-router-dom';
import HomePage from '../../Components/HomePage';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

const Home = () => {
  const { verifyIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = verifyIsAuthenticated();
    if (isAuthenticated) {
      navigate('/kanban');
    }
  }, [verifyIsAuthenticated, navigate]);
  return (
    <div>
      {/* <h1 className="text-5xl font-bold">Project Manager</h1> */}
      <HomePage />
    </div>
  );
};

export default Home;
