import { useThemeContext } from '../provider/ThemeProvider';

function Text({ children }) {
  const { darkMode } = useThemeContext();
  return (
    <span style={{ color: darkMode ? 'black' : 'white' }}>{children}</span>
  );
}

export default Text;
