import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToItem = () => {
    navigate('/item-information');
  };

  return (
    <>
      <button onClick={navigateToItem}>Login</button>
    </>
  );
};

export default Home;
