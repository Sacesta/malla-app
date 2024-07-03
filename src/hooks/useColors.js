import { useTheme } from "../context/theme";
import { themesColors } from "../theme";
export const useColors = () => {
    const { theme } = useTheme();

    const { light, dark } = themesColors;

    if (theme !== 'dark' && theme !== 'light') {
        console.error('Invalid theme:', theme);
        return light;
    }

    return theme === 'dark' ? dark : light;
};
