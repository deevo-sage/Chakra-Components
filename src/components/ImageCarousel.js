import React, { useState } from "react";
import { Flex, Image, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./css/ImageCarousel.css";

const ImageCarousel = (props) => {
  let [index, setIndex] = useState(0);
  const imgArray = props.args.img;

  const forwardBtn = () => {
    let imgElement = document.getElementById("top-img");
    let initialImg = imgArray[index];
    let imgElementBottom = document.getElementById("bottom-img");

    imgElementBottom.setAttribute("src", initialImg);

    setIndex(index + 1);
    imgElement.classList.add(props.args.animationType);
    imgElement.onanimationend = () => {
      imgElement.classList.remove(props.args.animationType);
    };
  };

  const backwardBtn = () => {
    let imgElement = document.getElementById("top-img");
    let initialImg = imgArray[index];
    let imgElementBottom = document.getElementById("bottom-img");

    imgElementBottom.setAttribute("src", initialImg);

    setIndex(index - 1);
    imgElement.classList.add(props.args.animationType);
    imgElement.onanimationend = () => {
      imgElement.classList.remove(props.args.animationType);
    };
  };

  return (
    <Flex
      height={props.args.size}
      width={props.args.size}
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
          objectFit={["contain", "cover", "fit", "fill"][props.args.imageFit]}
        />
        <Image
          id="top-img"
          src={imgArray[index]}
          height="100%"
          zIndex="1"
          width="100%"
          rounded="lg"
          position="absolute"
          objectFit={["contain", "cover", "fit", "fill"][props.args.imageFit]}
        />
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
