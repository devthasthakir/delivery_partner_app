import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const commonColors = {
  primary: "#925BFE", // Primary color remains consistent across themes
  secondary: "#6c757d", // Secondary color, often used for less prominent UI elements
  success: "#28a745", // Success color, e.g., for success messages or icons
  warning: "#ffc107", // Warning color, e.g., for alerts
  error: "#dc3545", // Error color, e.g., for error messages or icons
  info: "#17a2b8", // Info color, for informational messages or icons
};

export const LightTheme = {
  dark: false,
  colors: {
    ...commonColors,
    background: "#ffffff", // Light background color
    // card: "#f8f9fa",  // Light card background
    card: "#ffffff", // Light card background
    text: "#212529", // Dark text for contrast on a light background
    // border: "#dee2e6", // Light border color
    inputBackground: "#e9ecef", // Background for inputs, keeping it subtle
    placeholderText: "#6c757d", // Placeholder text color
    link: "#007bff", // Link color, typically blue in light themes
    border: "#e9deff",
  },
  typography: {
    fontFamily: "Poppins-Regular", // Default font family
    fontSize: 16, // Default font size
    headings: {
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
      h5: 18,
      h6: 16,
    },
    body: {
      regular: 16,
      small: 14,
      tiny: 12,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
    pill: 50, // For fully rounded elements
  },
};

export const DarkTheme = {
  dark: true,
  colors: {
    ...commonColors,
    background: "#000000", // Dark background color
    card: "#141414", // Dark card background
    text: "#f1f1f1", // Light text for contrast on a dark background
    // border: "#272727", // Dark border color
    inputBackground: "#333333", // Background for inputs in dark mode
    placeholderText: "#9e9e9e", // Placeholder text color, slightly muted
    link: "#8ab4f8", // Link color, typically lighter in dark themes
    border: "#1d1233",
  },
  typography: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    headings: {
      h1: 32,
      h2: 28,
      h3: 24,
      h4: 20,
      h5: 18,
      h6: 16,
    },
    body: {
      regular: 16,
      small: 14,
      tiny: 12,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  },
  radius: {
    small: 4,
    medium: 8,
    large: 16,
    pill: 50,
  },
};

export const FONTS = {
  h1: {
    fontFamily: "Poppins-Bold",
    fontSize: RFValue(32),
    lineHeight: RFValue(40),
  },
  h2: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(28),
    lineHeight: RFValue(36),
  },
  h3: {
    fontFamily: "Poppins-Medium",
    fontSize: RFValue(24),
    lineHeight: RFValue(32),
  },
  h4: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(20),
    lineHeight: RFValue(28),
  },
  h5: {
    fontFamily: "Poppins-SemiBold",
    fontSize: RFValue(16),
    lineHeight: RFValue(24),
  },
  h6: {
    fontFamily: "Poppins-Regular",
    fontSize: RFValue(14),
    lineHeight: RFValue(22),
  },
  body1: {
    fontFamily: "Poppins-Light",
    fontSize: RFValue(14),
    lineHeight: RFValue(20),
  },
  body2: {
    fontFamily: "Poppins-Light",
    fontSize: RFValue(12),
    lineHeight: RFValue(18),
  },
  body3: {
    fontFamily: "Poppins-Light",
    fontSize: RFValue(10),
    lineHeight: RFValue(16),
  },
  body4: {
    fontFamily: "Poppins-ExtraLight",
    fontSize: RFValue(8),
    lineHeight: RFValue(12),
  },
  body5: {
    fontFamily: "Poppins-ExtraLight",
    fontSize: RFValue(6),
    lineHeight: RFValue(10),
  },
};

export const SIZES = {
  // Base dimensions for general usage
  base: wp("90%"), // Covering most of the screen width for general containers

  // Border radius values
  radius: {
    small: wp("2%"), // Small radius for buttons, small cards, etc.
    medium: wp("4%"), // Medium radius for larger cards, modals, etc.
    large: wp("6%"), // Large radius for containers, large sections, etc.
    pill: wp("50%"), // Pill-shaped for fully rounded buttons or elements
  },

  // Padding values for internal spacing
  padding: {
    small: wp("2%"), // Tight padding for compact elements
    medium: wp("4%"), // Standard padding for most elements
    large: wp("6%"), // Generous padding for sections or large containers
  },

  // Margin values for external spacing
  margin: {
    small: wp("2%"), // Tight margin for compact spacing
    medium: wp("4%"), // Standard margin for most elements
    large: wp("6%"), // Generous margin for separating sections
  },

  // Sizing for common components
  buttonHeight: {
    small: hp("5%"), // Height for small buttons
    medium: hp("6%"), // Height for standard buttons
    large: hp("7%"), // Height for large buttons
  },

  // General width and height percentages for flexible layouts
  width: {
    full: wp("100%"), // Full width
    half: wp("50%"), // Half width
    third: wp("33.33%"), // One-third width
  },

  height: {
    full: hp("100%"), // Full height
    half: hp("50%"), // Half height
    third: hp("33.33%"), // One-third height
  },
};

// purple: {
//     100: "#e9deff",
//     200: "#d3bdff",
//     300: "#be9dfe",
//     400: "#a87cfe",
//     500: "#925bfe",
//     600: "#7549cb",
//     700: "#583798",
//     800: "#3a2466",
//     900: "#1d1233"
// },
