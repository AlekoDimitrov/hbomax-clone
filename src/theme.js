import { extendTheme } from "@chakra-ui/react";

export const hboTheme = extendTheme({
  fonts: {
    body: "Urbanist, sans-serif",
  },
  colors: {
    background1: "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box",
    background2: "linear-gradient(90deg, #670451 0%, #3C0652 100%) border-box",
    background3: "linear-gradient(90deg, #3B0B5B 0%, #561675 100%) border-box",
    background4: "linear-gradient(90deg, #2E1764 0%, #102554 100%) border-box",
    background5: "linear-gradient(90deg, #0D0E5A 0%, #2D3489 100%) border-box",
  },
});
