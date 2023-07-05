import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const navigateToItem = () => {
    navigate('/');
  };

  return (
    <>
      <h1>This is admin panel</h1>
      <button onClick={navigateToItem}>Home</button>
    </>
  );
};

export default AdminPanel;
