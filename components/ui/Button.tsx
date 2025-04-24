
import { PlatformPressable } from '@react-navigation/elements';

interface ButtonProps {
    onPress?: () => void;
    style: Record<string, any>;
    children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ onPress, style, children}) => {
    return <PlatformPressable style={style} onPress={onPress}>
        {children}
    </PlatformPressable>
};