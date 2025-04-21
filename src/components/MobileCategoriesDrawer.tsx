import React, { useRef } from "react";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerBackdrop,
  DrawerPositioner,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerCloseTrigger,
  Icon,
  HStack,
  Portal,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Categories from "./Categories";

interface Props {
  selectedCategory: string | null;
  onSelectCategory: (cat: string | null) => void;
}

const MobileCategoriesDrawer = ({
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <HStack display={{ base: "flex", lg: "none" }}>
      <DrawerRoot>
        <DrawerTrigger asChild>
          <Icon scale={2} style={{ cursor: "pointer" }}>
            <IoMdMenu />
          </Icon>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner>
            <DrawerContent>
              <DrawerHeader
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <DrawerTitle>دسته‌بندی‌ها</DrawerTitle>
                <DrawerCloseTrigger asChild>
                  <Icon
                    as={IoMdClose}
                    scale={2}
                    style={{
                      cursor: "pointer",
                      marginInline: "16px",
                      marginTop: "16px",
                    }}
                  />
                </DrawerCloseTrigger>
              </DrawerHeader>
              <DrawerBody>
                <Categories
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    onSelectCategory(cat);
                  }}
                />
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
    </HStack>
  );
};

export default MobileCategoriesDrawer;
