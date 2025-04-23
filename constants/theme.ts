export const colors = {
  // Primary colors
  primary: '#F60F75',  // Vibrant pink - main brand color
  
  // Neutral colors
  white: '#FFFFFF',    // White - for backgrounds, cards
  dark: '#1F0510',     // Very dark purple - for primary text
  gray: '#6E6066',     // Muted purple-gray - for secondary text
  
  // Accent colors
  accent: '#FF9F12',   // Orange - for CTAs, highlights
  lightPink: '#FFF0F6', // Very light pink - for backgrounds, highlights
  
  // Derived colors (with opacity)
  primaryLight: 'rgba(246, 15, 117, 0.1)', // Light pink for backgrounds
  primaryMedium: 'rgba(246, 15, 117, 0.5)', // Medium pink for hover states
  accentLight: 'rgba(255, 159, 18, 0.2)',  // Light orange for backgrounds
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export const fontFamily = {
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
};

export const typography = {
  h1: {
    fontFamily: fontFamily.medium,
    fontSize: 20,
    lineHeight: 20,
  },
  h2: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    lineHeight: 20,
  },
  body1: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    lineHeight: 12,
  },
  body3: {
    fontFamily: fontFamily.medium,
    fontSize: 10,
    lineHeight: 12,
  },
  button: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    lineHeight: 14,
  },
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};

// Theme object that combines all tokens
const theme = {
  colors,
  spacing,
  fontSizes,
  fontWeights,
  fontFamily,
  typography,
  borderRadius,
  shadows,
};

export default theme;