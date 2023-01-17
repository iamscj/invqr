import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: 'white'
            }
        })
    },
});

export default customTheme;