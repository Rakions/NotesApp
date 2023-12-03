import stylesheet from "./tailwind.css";
import { ChakraProvider } from '@chakra-ui/react'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-800">
        <ChakraProvider>
          <div className="w-full max-w-[1000px] mx-auto my-0">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
        </ChakraProvider>
      </body>
    </html >
  );
}

