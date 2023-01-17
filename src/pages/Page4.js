import { React } from 'react'
import { Link } from 'react-router-dom'

import { ChevronRightIcon } from "@chakra-ui/icons"

import {
    ChakraProvider,
    Box,
    Text,
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
    ButtonGroup,
    Container
} from '@chakra-ui/react';
import { saveAs } from "file-saver";
import tp from "../../src/tp.txt"
import { useNavigate, useLocation } from "react-router-dom"


const Page4 = () => {

    const navigate = useNavigate();

    function downloadPDF() {
        saveAs(tp)
    }

    const page3 = useLocation();

    return (
        <div>
            <Container maxW='80%'>
                {/* Breadcrumb */}
                <Box display="flex" justifyContent="center" margin="20px" marginTop="40px">
                    <Breadcrumb separator={<ChevronRightIcon color='white' boxSize={6} />}
                        fontWeight="medium" fontSize='m' bg="#020561" padding="5px" borderWidth='3px' borderRadius='lg' borderColor="#868687">
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to='/'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue'
                                    onClick={() => navigate("/")}>
                                    Shed</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.shed}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue' onClick={() => navigate("/")}>LOCO</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.locono}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue' onClick={() => navigate("/page2")}>Converter</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.convertor}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue'>Module</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.module}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue'>Component</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.component}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>
                                <Badge fontSize='m' variant='solid' colorScheme='blue'>C.No</Badge>
                                <Badge fontSize='m' variant='subtle' colorScheme='blue'>{page3.state.componentno}</Badge>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>



                {/* table */}
                <TableContainer py={"2%"}>
                    <Table variant='striped' bg="#79b4ed" fontWeight='semibold'>
                        <Thead>
                            <Tr bg="#020561">
                                <Th fontSize='m' color='white'>DNo</Th>
                                <Th fontSize='m' color='white'>UNo</Th>
                                <Th fontSize='m' color='white'>Report</Th>
                                <Th fontSize='m' color='white'>File</Th>
                                <Th fontSize='m' color='white'>Comment</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>
                                    <Button colorScheme='blue' onClick={downloadPDF}>
                                        Download
                                    </Button>
                                </Td>
                                <Td>Replaced the item due to damage</Td>
                            </Tr>
                            <Tr>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>
                                    <Button colorScheme='blue' onClick={downloadPDF}>
                                        Download
                                    </Button>
                                </Td>
                                <Td>Damage</Td>
                            </Tr>
                            <Tr>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>
                                    <Button colorScheme='blue' onClick={downloadPDF}>
                                        Download
                                    </Button>
                                </Td>
                                <Td>Not working</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>12345</Td>
                                <Td>
                                    <Button colorScheme='blue' onClick={downloadPDF}>
                                        Download
                                    </Button>
                                </Td>
                                <Td>Damaged</Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default Page4
