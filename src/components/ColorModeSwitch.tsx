import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* Rendering the MoonIcon or SunIcon based on the current color mode */}
      {colorMode === "light" ? (
        <MoonIcon
          style={{
            marginRight: "8px",
            cursor: "pointer",
            fontSize: "15px",
          }}
          onClick={toggleColorMode} // Toggle color mode when clicked
        />
      ) : (
        <SunIcon
          style={{
            marginRight: "11px",
            cursor: "pointer",
            color: "orange", 
            fontSize: "15px",
          }}
          onClick={toggleColorMode} // Toggle color mode when clicked
        />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
