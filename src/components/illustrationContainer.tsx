import { Flex, Container, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const popf = (iv: boolean) => ({
  scale: iv ? [0.8, 1.15, 1] : 0,
  opacity: iv ? [0, 1] : 0,
});
const IllustrationContainer: React.FunctionComponent<{
  img: string;
  rev?: boolean;
  bg: string;
  mw?: string;
  mh?: string;
  w?: string;
  h?: string;
  p?: string;
}> = ({
  img,
  rev,
  bg,
  children,
  mh = "100vh",
  mw = "100vw",
  w,
  h,
  p = "5",
}) => {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
      <Flex
        ref={ref}
        alignItems="center"
        justifyContent="center"
        flexDirection={
          rev ? ["column", "column", "row-reverse"] : ["column", "column", "row"]
        }
        bg={bg}
        color="blackAlpha.800"
        padding={p}
        minH={mh}
        h={h ? h : 'auto'}

        maxW={mw ? mw : 'auto'}
        w={w ? w : 'auto'}
      >
        <motion.div
          initial="hidden"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={popf(inView)}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
          }}
          transition={{
            type: "spring",
            bounce: 0.1,
            delay: 0.4,
          }}
        >
          <Image
            src={img}
            height="500px"
            width="500px"
            alt="vector depicting content"
          />
        </motion.div>
        {inView && (
          <>
            <Flex direction="column" flex="1" alignItems="flex-start">
              {children}
            </Flex>
          </>
        )}
      </Flex>
    );
  };
export default IllustrationContainer