import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToItem = () => {
    navigate('/login');
  };

  return (
    <>
      <button onClick={navigateToItem}>Login</button>
    </>
  );
};

export default Home;
