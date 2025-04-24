import { Pressable, PressableProps } from "react-native";

import React from "react";

type ButtonProps = {
  style: any;
  onPress?: () => void;
  children: React.ReactNode;
} & PressableProps;

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({onPress, style, children, ...rest }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      {...rest}
    >
 {children}
    </Pressable>
  );
});

Button.displayName = "Button";