import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import theme from '@/constants/theme';

interface PillProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
  showCloseIcon?: boolean;
  style?: any;
}

export const Pill: React.FC<PillProps> = ({
  label,
  active = false,
  onPress,
  showCloseIcon = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.pill,
        active && styles.pillActive,
        !showCloseIcon && { paddingRight: theme.spacing.md },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.pillText,
          active && styles.pillTextActive,
        ]}
      >
        {label}
      </Text>
      {showCloseIcon && (
        <EvilIcons name="close" size={16} color={theme.colors.dark} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.primaryLight,
    margin: theme.spacing.xs,
    height: 32,
    minWidth: 60,
    justifyContent: 'center',
  },
  pillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  pillText: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.xs,
  },
  pillTextActive: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
  },
});