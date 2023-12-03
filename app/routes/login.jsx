import { Form } from "@remix-run/react";
import { Input } from '@chakra-ui/react'

export default function Login() {
    return (
        <>
            <Form>
                <Input placeholder='Basic usage' />
            </Form>
        </>
    )
}