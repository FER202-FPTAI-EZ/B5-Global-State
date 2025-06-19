import { useThemeContext } from '../provider/ThemeProvider';
import Button from './Button';
import Text from './Text';

function UserCard({ user }) {
  const { darkMode } = useThemeContext();
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px 0',
        borderRadius: '5px',
        backgroundColor: darkMode ? '#f9f9f9' : '#111111',
      }}
    >
      <h2
        style={{
          color: darkMode ? '#000' : '#fff',
          marginBottom: '10px',
        }}
      >
        {user.name}
      </h2>
      <div>
        <Text>Description of the user.</Text>
      </div>
      <Button>Follow</Button>
    </div>
  );
}

export default UserCard;
