import { useThemeContext } from '../provider/ThemeProvider';

function Button({ onClick, children }) {
  const { darkMode } = useThemeContext();
  return (
    <button
      style={{
        padding: '10px 20px',
        color: darkMode ? '#fff' : '#000',
        backgroundColor: darkMode ? '#333' : '#f0f0f0',
        borderRadius: '5px',
        border: 'none',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
