import React from 'react';


import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    GridItem,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Badge,
    Select,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    ButtonGroup,
    Stack,
    Input
} from '@chakra-ui/react';

import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import customTheme from "./theme";
import { useNavigate, useLocation } from "react-router-dom"


const Page2 = () => {
    const navigate = useNavigate();
    const page1 = useLocation();
    console.log(page1.state.x);
    console.log(page1.state.shed);
    const shed = page1.state.shed
    const locono = page1.state.locono

    return (
        <div>
            <Box display="flex" justifyContent="center" margin="20px" marginTop="40px">
                <Breadcrumb separator={<ChevronRightIcon color='white' boxSize={6} />}
                    fontWeight="medium" fontSize='m' bg="#020561" padding="5px" borderWidth='3px' borderRadius='lg' borderColor="#868687">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue' onClick={() => navigate("/")}>Shed</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page1.state.shed}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue'>LOCO</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page1.state.locono}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box display="flex" justifyContent="center" margin="20px">
                <TableContainer width="wrap-content" borderWidth="1px" borderRadius="10px" borderColor="black" backgroundColor="white">
                    <Table variant='striped' bg="#79b4ed" fontWeight='semibold'>
                        <Tbody>
                            <Tr>
                                <Td textAlign="center" fontSize="30px" ><b>Converter 1</b></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px"
                                    onClick={
                                        () => navigate("/page3", {
                                            state: {
                                                shed: shed,
                                                locono: locono,
                                                module: "TC",
                                                convertor: 1
                                            }

                                        })
                                    }>TC</Button></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px"
                                    onClick={
                                        () => navigate("/page3", {
                                            state: {
                                                shed: shed,
                                                locono: locono,
                                                module: "AUX",
                                                convertor: 1
                                            }

                                        })
                                    }>AUX</Button></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px">VCU</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center" fontSize="30px"><b>Converter 2</b></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px"
                                    onClick={
                                        () => navigate("/page3", {
                                            state: {
                                                shed: shed,
                                                locono: locono,
                                                module: "TC",
                                                convertor: 2
                                            }

                                        })
                                    }>TC</Button></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px"
                                    onClick={
                                        () => navigate("/page3", {
                                            state: {
                                                shed: shed,
                                                locono: locono,
                                                module: "AUX",
                                                convertor: 2
                                            }

                                        })
                                    }>AUX</Button></Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" width="100px" height="30px" fontSize="25px">VCU</Button></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default Page2
