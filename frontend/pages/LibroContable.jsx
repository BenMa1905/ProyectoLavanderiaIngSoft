import { useState } from 'react'
import { useToast, Textarea, Stack, Button, Container, Input, Text, Heading, Table, Thead, Tbody, FormControl, Tfoot, Tr, Th, Td, FormLabel, Box } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import SideNavigationBar from '../components/SideNavigationBar'

const LibroContable = () => {

    const toast = useToast()

    const [values, setValues] = useState({
        cashBalance: '',
        debitBalance: '',
        totalDebt: ''
    })

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/ledger`, values)
            if (response.status == 201) {
                toast({
                    title: 'Libro creado.',
                    description: "El libro contable se creo correctamente.",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                router.push('/Finances')
            } else {
                toast({
                    title: 'Error al crear libro.',
                    description: "El libro contable no se pudo crear.",
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                })
            }
            console.log(response.data.name)
        }
        catch (err) {
            console.log(err)
            toast({
                title: 'Error al crear libro.',
                description: "El libro contable no se pudo crear.",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name, e.target.value)
    }

    const onBack = (e) => {
        router.push('/Finances')
    }

    return (
        <>
            <SideNavigationBar></SideNavigationBar>
            <Container bg='whiteAlpha.800' display={"flex"} flexDirection="column" minH='50vh' minW='70vw'>
                <Heading textAlign={"center"} my={"10"}>Editar libro contable</Heading>
                <Stack>
                    <Table variant={"striped"}>
                        <Thead>
                            <Tr>
                                <Td width={"350px"}>Cantidad de dinero en efectivo</Td>
                                <Td width={"200px"}>Cantidad de dinero en cuenta</Td>
                                <Td width={"150px"}>Deuda total inicial</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <FormControl>
                                        <Input placeholder="Dinero en caja" type={"number"} min={"0"} onChange={onChange} name={"cashBalance"} />
                                    </FormControl>
                                </Td>
                                <Td>
                                    <FormControl>
                                        <Input placeholder="Dinero en cuenta" type={"number"} min={"0"} onChange={onChange} name={"debitBalance"} />
                                    </FormControl>
                                </Td>
                                <Td>
                                    <FormControl>
                                        <Input placeholder="Deuda total" type={"number"} min={"0"} onChange={onChange} name={"totalDebt"} />
                                    </FormControl>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Button colorScheme={"teal"} size={"md"} type={"submit"} my={"5"} onClick={onSubmit}>Crear Libro contable</Button>
                </Stack>
                <Button colorScheme={'red'} onClick={onBack}>Volver</Button>
            </Container>
        </>
    )
}

export default LibroContable