import React from 'react'
import { Box } from '@chakra-ui/react'
const index = () => {
    return (
        <Box
            w="full" h='full'
            css={{
                backgroundImage: "url(/background.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "fixed",
                zIndex: "1"
            }}
        >Index
        </Box>
    )
}

export default index