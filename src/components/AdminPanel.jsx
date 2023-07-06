import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToNew = () => {
    navigate('/admin/new');
  };

  return (
    <>
      <h1>This is admin panel</h1>
      <button onClick={navigateToHome}>Home</button>
      <button onClick={navigateToNew}>Create New</button>
    </>
  );
};

export default AdminPanel;
