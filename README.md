# Animated Flip-Clock Countdown



## Overview

This project features an Animated Flip-Clock Countdown, implemented using React components. The countdown is designed to provide a visually appealing and nostalgic representation of time, with customizable themes and a responsive design. The project includes components such as Counter, Link, ThemeSwitch, and utilizes a ThemeProvider context for managing the theme.

## Components

### Counter

The `Counter` component is responsible for displaying each digit in the flip-clock animation. It allows customization of themes, background colors, and text colors based on the current theme. The counter supports different variants such as days, hours, minutes, and seconds.

### Link

The `Link` component is designed to create social media links with specific icons. It allows customization of the link's color based on the current theme and supports popular social media platforms such as Facebook, Pinterest, and Instagram.

### ThemeSwitch

The `ThemeSwitch` component provides a button to switch between light and dark themes. It features customizable background colors for both themes and a dynamic color-changing dot to indicate the current theme.

### Countdown

The `Countdown` component serves as the main container for the entire countdown session. It utilizes the Counter component for displaying days, hours, minutes, and seconds. The component also includes a dynamic background that changes based on the selected theme and a ThemeSwitch button for theme toggling.

## Theme Provider

The `ThemeProvider` context is used to manage the theme state and provides a function (`handleThemeChange`) to switch between light and dark themes.

## Custom Hooks

### useCountdownTimer

The `useCountdownTimer` hook handles the countdown logic, updating the time state every second and determining when the countdown has finished.

### useFormatTime

The `useFormatTime` hook is responsible for formatting the initial time, ensuring that values like hours, minutes, and seconds fall within their respective ranges.

## Getting Started

To use the Animated Flip-Clock Countdown in your project:

1. Clone the repository:

   ```bash
   git clone https://github.com/andresidrim/animated-countdown.git
   cd animated-countdown
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Explore and customize the components based on your project requirements.

4. Integrate the components into your application, adjusting themes and colors as needed.

5. Run your application and enjoy the animated flip-clock countdown!

## Demo

For a live demo and additional documentation, visit [Demo Page](https://animated-countdown-seven.vercel.app/).

---