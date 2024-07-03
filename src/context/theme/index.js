import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const loadTheme = async () => {
        try {
            const storedTheme = await AsyncStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme);
            }
        } catch (error) {
            console.error('Failed to load the theme from AsyncStorage:', error);
        }
    };

    useEffect(() => {
        loadTheme();
    }, []);

    useEffect(() => {
        const saveTheme = async () => {
            try {
                await AsyncStorage.setItem('theme', theme);
            } catch (error) {
                console.error('Failed to save the theme to AsyncStorage:', error);
            }
        };

        saveTheme();
    }, [theme]);

    const themeValue = { theme, setTheme };

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
