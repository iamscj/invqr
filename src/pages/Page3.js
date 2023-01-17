import { React, useState } from 'react';
// import { Link } from 'react-router-dom';

import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
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
    ButtonGroup
} from '@chakra-ui/react';

import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import customTheme from "./theme";
import Page4 from "./Page4"
import { useNavigate, useLocation } from "react-router-dom"


const Page3 = () => {
    const navigate = useNavigate();
    const page2 = useLocation();

    const [comp, setcomp] = useState('');
    const handleChange1 = (value) => {
        setcomp(value)
    }
    return (
        <ChakraProvider theme={customTheme}>
            <Box display="flex" justifyContent="center" margin="20px" marginTop="40px">
                <Breadcrumb separator={<ChevronRightIcon color='white' boxSize={6} />}
                    fontWeight="medium" fontSize='m' bg="#020561" padding="5px" borderWidth='3px' borderRadius='lg' borderColor="#868687">
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} to='/'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue'
                                onClick={() => navigate("/")}>
                                Shed</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page2.state.shed}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue' onClick={() => navigate("/")}>LOCO</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page2.state.locono}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue' onClick={() => navigate("/page2")}>Converter</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page2.state.convertor}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue'>Module</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page2.state.module}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>
                            <Badge fontSize='m' variant='solid' colorScheme='blue'>Component</Badge>
                            <Badge fontSize='m' variant='subtle' colorScheme='blue'>{comp}</Badge>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box display="flex" justifyContent="center" margin="20px" marginTop="50px">
                <Badge borderColor="blue" borderWidth="3px" borderRadius="5px" fontSize='m' variant='solid' colorScheme='blue' display="flex" alignItems="center">Component</Badge>

                <Select marginLeft="1vw     " placeholder='Select a Converter Component' width="300px" bg="skyblue" color="darkblue" borderColor="blue" borderWidth="3px"
                    onChange={(item) => {
                        handleChange1(item.target.value)
                    }}
                >
                    <option value='Power Module'>Power Module</option>
                    <option value='VIU'>VIU</option>
                    <option value='DCU'>DCU</option>
                    <option value='IGBT'>IGBT</option>
                    <option value='MFI'>MFI</option>
                </Select>
            </Box>
            <Box display="flex" justifyContent="center" margin="20px">
                <TableContainer width="wrap-content" borderWidth="1px" borderRadius="10px" borderColor="black">
                    <Table variant='striped' bg="#79b4ed" fontWeight='semibold'>
                        <Thead text>
                            <Tr bg="#020561">
                                <Th fontSize='m' color='white' textAlign="center">Component</Th>
                                <Th fontSize='m' color='white' textAlign="center">Component Number</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td textAlign="center">Power Module 1</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px" onClick={
                                    () => navigate("/page4", {
                                        state: {
                                            shed: page2.state.shed,
                                            locono: page2.state.locono,
                                            module: "TC",
                                            convertor: 1,
                                            component: "Power Module",
                                            componentno: "AXC998B32"
                                        }

                                    })
                                }>
                                    AXC998B32
                                </Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 2</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">CEC918B32</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 3</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">JJC098B12</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 4</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">FGC098B12</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 5</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">JJC555B12</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 6</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">QWC098D12</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 7</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">BBC008B12</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 8</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">ZXC069B69</Button></Td>
                            </Tr>
                            <Tr>
                                <Td textAlign="center">Power Module 9</Td>
                                <Td textAlign="center"><Button colorScheme='blue' margin="0px" height="25px">KOC098B12</Button></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </ChakraProvider >
    )
}

export default Page3
