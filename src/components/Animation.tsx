import { BoxProps, Box } from "@chakra-ui/react"
import React, { FC } from "react"

const Animation: FC<BoxProps> = ({ children, ...args }) => {
    return <Box {...args}>
        {children}
    </Box>
}
export default Animation