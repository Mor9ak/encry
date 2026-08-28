module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                pageBg: 'var(--color-pageBg)',
                elementsBg: 'var(--color-elementsBg)',
                mainText: 'var(--color-mainText)',
                secondaryText: 'var(--color-secondaryText)',
                borderCol: 'var(--color-borderCol)',
            },
        },
    },
    plugins: [],
};