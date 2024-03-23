import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Details from "./Details";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const ToggleDraw = ({ openDrawers, handleCloseDrawer }) => {
  // PropTypes
  ToggleDraw.propTypes = {
    openDrawers: PropTypes.array,
    handleCloseDrawer: PropTypes.func,
  };

  const [drawerStates, setDrawerStates] = useState({});

  // Update the local state when openDrawers prop changes
  useEffect(() => {
    const newDrawerStates = {};
    openDrawers.forEach((element) => {
      newDrawerStates[element.idMeal] = true;
    });
    setDrawerStates(newDrawerStates);
  }, [openDrawers]);

  // Handle closing a drawer
  const handleDrawerClose = (idMeal) => {
    setDrawerStates((prevState) => ({
      ...prevState,
      [idMeal]: false,
    }));
    handleCloseDrawer();
  };

  return (
    <>
      {/* Render each open drawer */}
      {openDrawers.map((element) => (
        <Drawer
          key={uuidv4()}
          onClose={() => handleDrawerClose(element.idMeal)}
          isOpen={drawerStates[element.idMeal]} // Use local state to control isOpen
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              onClick={() => handleDrawerClose(element.idMeal)}
            />
            {/* Drawer header */}
            <DrawerHeader mt={4} fontSize={13} textAlign={"center"}>
              {`Details about ${element.strMeal}`}
            </DrawerHeader>
            {/* Drawer body */}
            <DrawerBody mb={4}>
              <Details details={[element]} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ))}
    </>
  );
};

export default ToggleDraw;
