// This file contains color definitions for consistent theming across the application

export const colors = {
  // Primary colors
  primary: {
    DEFAULT: "hsl(221.2, 83.2%, 53.3%)",
    foreground: "hsl(210, 40%, 98%)",
    dark: "hsl(217.2, 91.2%, 59.8%)",
  },

  // Background colors
  background: {
    light: "hsl(0, 0%, 100%)",
    dark: "hsl(222.2, 84%, 4.9%)",
    muted: "hsl(210, 40%, 96.1%)",
    "muted-dark": "hsl(217.2, 32.6%, 17.5%)",
  },

  // Text colors
  foreground: {
    light: "hsl(210, 40%, 98%)",
    dark: "hsl(222.2, 84%, 4.9%)",
    muted: "hsl(215.4, 16.3%, 46.9%)",
  },

  // Border colors
  border: {
    light: "hsl(214.3, 31.8%, 91.4%)",
    dark: "hsl(217.2, 32.6%, 17.5%)",
  },

  // Status colors
  success: {
    DEFAULT: "hsl(142.1, 76.2%, 36.3%)",
    light: "hsl(142.1, 76.2%, 90%)",
  },
  warning: {
    DEFAULT: "hsl(38, 92%, 50%)",
    light: "hsl(38, 92%, 90%)",
  },
  error: {
    DEFAULT: "hsl(0, 84.2%, 60.2%)",
    light: "hsl(0, 84.2%, 90%)",
  },

  // Category colors for projects
  category: {
    "Data Analysis": "hsl(221, 83%, 53%)",
    "Analyse de Données": "hsl(221, 83%, 53%)",
    Productivity: "hsl(142, 76%, 36%)",
    Productivité: "hsl(142, 76%, 36%)",
    "E-commerce": "hsl(262, 83%, 58%)",
  },
} as const;

export type ColorKeys = keyof typeof colors;
export type CategoryColor = keyof typeof colors.category;
