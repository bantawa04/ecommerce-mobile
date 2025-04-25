import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
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
    <PlatformPressable
      style={[
        styles.pill,
        active && styles.pillActive,
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
      {showCloseIcon ? (
        <EvilIcons name="close" size={16} color={theme.colors.dark} />
      ) : (        
        <View style={{ width: 8 }} />
      )}
    </PlatformPressable>
  );
};

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.primaryLight,
    margin: theme.spacing.xs,
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