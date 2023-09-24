import buttonText from './text';

const button = {
  defaultProps: {
    disableRipple: false
  },
  styleOverrides: {
    text: { ...buttonText.base }
    // textSizeSmall: { ...buttonText.small },
    // textSizeLarge: { ...buttonText.large },
    // textPrimary: { ...buttonText.primary },
    // textSecondary: { ...buttonText.secondary }
  }
};

export default button;
