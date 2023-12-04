import { Form } from "@remix-run/react";
import { Input } from '@chakra-ui/react'

export default function Login() {
    return (
        <>
            <div class="flex justify-center items-center h-screen">
                <div class="md:p-52 sm:20 p-8 w-full">
                    <h1 class="text-2xl font-semibold mb-4 text-teal-300">Login</h1>
                    <Form method="POST">
                        <div class="mb-4">
                            <label for="username" class="block text-gray-400 ">Username</label>
                            <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-400 ">Password</label>
                            <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" />
                        </div>
                        <div class="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
                            <label for="remember" class="text-gray-400  ml-2">Remember Me</label>
                        </div>
                        <div class="mb-6 text-blue-500">
                            <a href="#" class="hover:underline">Forgot Password?</a>
                        </div>
                        <button type="submit" class="bg-teal-300 hover:bg-teal-500 transition text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                    </Form>
                    <div class="mt-6 text-blue-500 text-center">
                        <a href="#" class="hover:underline">Sign up Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}