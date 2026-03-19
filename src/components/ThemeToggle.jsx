import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { useHapticFeedback } from '../hooks/useHapticFeedback';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { triggerHaptic } = useHapticFeedback();

  // We need to determine the actual theme if it's 'system'
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const handleToggle = () => {
    triggerHaptic('nudge');
    toggleTheme();
  };

  return (
    <button
      className="btn btn-outline btn-sm theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{ 
        width: 36, 
        height: 36, 
        padding: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '1.1rem'
      }}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
