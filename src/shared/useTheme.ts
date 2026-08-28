import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');

        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

    }, [isDark]);

    const toggle = () => {
        setIsDark(prev => !prev);
    };

    return { isDark, toggle };
};