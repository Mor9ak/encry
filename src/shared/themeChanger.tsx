import { useTheme } from './useTheme';

export const ThemeChanger = () => {
    const { isDark, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            className="w-8 h-8 rounded-full bg-elementsBg border border-borderCol text-mainText"
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    );
};