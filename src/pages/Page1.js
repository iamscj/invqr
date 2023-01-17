import { React, useState } from 'react';


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
    Input,
    Container
} from '@chakra-ui/react';

import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import customTheme from "./theme";
import { useNavigate } from "react-router-dom"


const Page1 = () => {
    const navigate = useNavigate();
    const [Shed, setShed] = useState('');
    const handleChange1 = (value) => {
        setShed(value)
    }
    console.log(Shed)
    return (
        <Container maxW='80%'>
            <ChakraProvider theme={customTheme}>
                <Text fontSize='6xl' textAlign="center">Inv-QR</Text>
                <Box display={Shed.length === 0 ? "none" : "flex"} justifyContent="center" margin="2%" width={"100%"}>
                    <Breadcrumb separator={<ChevronRightIcon color='gray' boxSize={6} />}
                        fontWeight="medium" fontSize='m' bg="#020561" padding="5px" borderWidth='3px' borderRadius='lg' borderColor="#868687">
                        <BreadcrumbItem >
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue'>Shed</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{Shed}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box display="flex" justifyContent="center" margin="2%" marginTop="20px">
                    <Badge borderColor="blue" borderWidth="3px" borderRadius="5px" fontSize='m' variant='solid' colorScheme='blue' display="flex" alignItems="center"   >Loco Shed</Badge>
                    {/* <t>&nbsp;</t> */}
                    <Select marginLeft="1vw" bg="skyblue" color="darkblue" borderWidth="2px" borderColor="blue" placeholder='Select a Loco Shed' width="30%"
                        onChange={(item) => {
                            handleChange1(item.target.value)
                        }}
                    >
                        <option value='Bangalore'>Bangalore</option>
                        <option value='Chennai'>Chennai</option>
                        <option value='Goa'>Goa</option>
                        <option value='Kharagpur'>Kharagpur</option>
                    </Select>
                </Box>
                <Box display="flex" justifyContent="center" margin="20px">
                    <TableContainer width="wrap-content" borderWidth="1px" borderRadius="10px" borderColor="black" backgroundColor="gray.100">
                        <Table variant='striped' bg="#79b4ed" fontWeight='semibold'>
                            <Tbody>
                                <Tr>
                                    <Td textAlign="center">
                                        <Button colorScheme="blue"
                                            onClick={

                                                () => navigate("/page2", {
                                                    state: {
                                                        x: 200,
                                                        shed: Shed,
                                                        locono: "12394"
                                                    }
                                                })
                                            }>12394</Button></Td>
                                    <Td textAlign="center">
                                        <Button colorScheme='blue'
                                            onClick={

                                                () => navigate("/page2", {
                                                    state: {
                                                        x: 200,
                                                        shed: Shed,
                                                        locono: "22222"
                                                    }
                                                })
                                            }>22222</Button></Td>
                                    <Td textAlign="center">
                                        <Button colorScheme='blue'
                                            onClick={

                                                () => navigate("/page2", {
                                                    state: {
                                                        x: 200,
                                                        shed: Shed,
                                                        locono: "33333"
                                                    }
                                                })
                                            }>33333</Button></Td>
                                    <Td textAlign="center">
                                        <Button colorScheme='blue'
                                            onClick={

                                                () => navigate("/page2", {
                                                    state: {
                                                        x: 200,
                                                        shed: Shed,
                                                        locono: "55555"
                                                    }
                                                })
                                            }>55555</Button></Td>
                                </Tr>
                                {/* <Tr>
                                    <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="30px" fontSize="25px">12934</Button></Td>
                                    <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="30px" fontSize="25px">12305</Button></Td>
                                    <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="30px" fontSize="25px">95124</Button></Td>
                                    <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="30px" fontSize="25px">23417</Button></Td>
                                </Tr> */}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>


                {/* <Box display="flex" justifyContent="center" margin="20px" marginTop="50px">
                    <Input textAlign="center" placeholder='Enter train number to be searched' size='md' width="500px" bg="skyblue" color="darkblue" borderColor="blue"></Input>
                </Box> */}


            </ChakraProvider>
        </Container>
    )
}

export default Page1
