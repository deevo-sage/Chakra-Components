import React, { useState } from "react";
import { Flex, Image, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./css/ImageCarousel.css";
type ImageCarouselProps = {
  img: string[], animationType: string, size: string, imageFit: number, headerText: string[], middleText: string[], footerText: string[], headerFontSize: string, middleFontSize: string, footerFontSize: string
}

const ImageCarousel: React.FC<
  ImageCarouselProps
> = ({ img, animationType, size, imageFit, headerText, middleText, footerText, headerFontSize, middleFontSize, footerFontSize
}) => {
    let [index, setIndex] = useState(0);
    const imgArray = img;

    const forwardBtn = () => {
      let imgElement = document.getElementById("top-img");
      let initialImg = imgArray[index];
      let imgElementBottom = document.getElementById("bottom-img");

      imgElementBottom.setAttribute("src", initialImg);

      setIndex(index + 1);
      imgElement.classList.add(animationType);
      imgElement.onanimationend = () => {
        imgElement.classList.remove(animationType);
      };
    };

    const backwardBtn = () => {
      let imgElement = document.getElementById("top-img");
      let initialImg = imgArray[index];
      let imgElementBottom = document.getElementById("bottom-img");

      imgElementBottom.setAttribute("src", initialImg);

      setIndex(index - 1);
      imgElement.classList.add(animationType);
      imgElement.onanimationend = () => {
        imgElement.classList.remove(animationType);
      };
    };

    return (
      <Flex
        height={size}
        width={size}
        alignItems="center"
        minW="300px"
        minH="300px"
      >
        <Flex
          height="100%"
          width="5%"
          minW="50px"
          zIndex="1"
          bg="transparent"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            bg=""
            boxShadow="dark-lg"
            rounded="full"
            visibility={index === 0 ? "hidden" : "visible"}
            onClick={() => backwardBtn()}
          >
            <ChevronLeftIcon />
          </Button>
        </Flex>
        <Flex
          height="100%"
          border="1px solid black"
          width="100%"
          minW="300px"
          justifyContent="center"
          alignItems="center"
          position="relative"
          rounded="lg"
        >
          <Image
            height="100%"
            width="100%"
            zIndex="0"
            rounded="lg"
            id="bottom-img"
            objectFit={["contain", "cover", "fit", "fill"][imageFit] as any}
          />
          <Image
            id="top-img"
            src={imgArray[index]}
            height="100%"
            zIndex="1"
            width="100%"
            rounded="lg"
            position="absolute"
            objectFit={["contain", "cover", "fit", "fill"][imageFit] as any}
          />
          <Flex
            height="100%"
            zIndex="2"
            width="100%"
            rounded="lg"
            position="absolute"
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            objectFit={["contain", "cover", "fit", "fill"][imageFit] as any}
          >
            <Flex fontSize={headerFontSize}>
              {headerText[index]}
            </Flex>
            <Flex fontSize={middleFontSize}>
              {middleText[index]}
            </Flex>
            <Flex fontSize={footerFontSize}>
              {footerText[index]}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bg="transparent"
          height="100%"
          width="5%"
          minW="50px"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            bg=""
            boxShadow="dark-lg"
            rounded="full"
            visibility={index === imgArray.length - 1 ? "hidden" : "visible"}
            onClick={() => forwardBtn()}
          >
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Flex>
    );
  };

export default ImageCarousel;
