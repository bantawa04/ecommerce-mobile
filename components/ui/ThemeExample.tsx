import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '@/constants/theme';

export const ThemeExample = () => {
  return (
    <View style={styles.container}>
      {/* Primary color section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Primary Color</Text>
        <View style={[styles.colorBox, { backgroundColor: theme.colors.primary }]} />
        <Text style={styles.colorCode}>{theme.colors.primary}</Text>
      </View>
      
      {/* Neutral colors section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Neutral Colors</Text>
        <View style={styles.colorRow}>
          <View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.white, borderWidth: 1, borderColor: '#eee' }]} />
            <Text style={styles.colorCode}>{theme.colors.white}</Text>
          </View>
          <View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.dark }]} />
            <Text style={styles.colorCode}>{theme.colors.dark}</Text>
          </View>
          <View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.gray }]} />
            <Text style={styles.colorCode}>{theme.colors.gray}</Text>
          </View>
        </View>
      </View>
      
      {/* Accent colors section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accent Colors</Text>
        <View style={styles.colorRow}>
          <View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.accent }]} />
            <Text style={styles.colorCode}>{theme.colors.accent}</Text>
          </View>
          <View>
            <View style={[styles.colorBox, { backgroundColor: theme.colors.lightPink, borderWidth: 1, borderColor: '#eee' }]} />
            <Text style={styles.colorCode}>{theme.colors.lightPink}</Text>
          </View>
        </View>
      </View>
      
      {/* Button examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Examples</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Primary Button</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Secondary Button</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.accentButton}>
          <Text style={styles.accentButtonText}>Accent Button</Text>
        </TouchableOpacity>
      </View>
      
      {/* Typography examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Typography</Text>
        <Text style={styles.heading1}>Heading 1</Text>
        <Text style={styles.heading2}>Heading 2</Text>
        <Text style={styles.bodyText}>Body text in dark color</Text>
        <Text style={styles.captionText}>Caption text in gray color</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.white,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.semiBold,
    marginBottom: theme.spacing.sm,
    color: theme.colors.dark,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.xs,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorCode: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.gray,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    ...theme.shadows.md,
  },
  primaryButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: theme.fontSizes.md,
  },
  secondaryButton: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: theme.fontSizes.md,
  },
  accentButton: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    ...theme.shadows.md,
  },
  accentButtonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: theme.fontSizes.md,
  },
  heading1: {
    fontSize: theme.fontSizes.xxl,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.dark,
    marginBottom: theme.spacing.sm,
  },
  heading2: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semiBold,
    color: theme.colors.dark,
    marginBottom: theme.spacing.sm,
  },
  bodyText: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.dark,
    marginBottom: theme.spacing.sm,
  },
  captionText: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray,
  },
});