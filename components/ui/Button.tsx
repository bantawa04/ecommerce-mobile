import { Pressable, PressableProps, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import React from "react";
import theme from "@/constants/theme";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRadius = "none" | "sm" | "md" | "lg" | "round";

type ButtonProps = {
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
} & PressableProps;

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({
  onPress,
  style,
  textStyle,
  children,
  variant = "primary",
  size = "md",
  radius = "md",
  ...rest
}, ref) => {
  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    styles[`${radius}Radius`],
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    textStyle,
  ];

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      style={buttonStyles}
      {...rest}
    >
      {typeof children === 'string' ? (
        <Text style={textStyles}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray,
  },
  smButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  mdButton: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  lgButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  noneRadius: {
    borderRadius: 0,
  },
  smRadius: {
    borderRadius: theme.borderRadius.sm,
  },
  mdRadius: {
    borderRadius: theme.borderRadius.md,
  },
  lgRadius: {
    borderRadius: theme.borderRadius.lg,
  },
  roundRadius: {
    borderRadius: theme.borderRadius.round,
  },
  text: {
    fontFamily: theme.fontFamily.medium,
  },
  primaryText: {
    color: theme.colors.white,
  },
  secondaryText: {
    color: theme.colors.gray,
  },
  smText: {
    fontSize: 14,
  },
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },
});

Button.displayName = "Button";