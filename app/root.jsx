import { Meta, Links } from '@remix-run/react'
import style from './styles/index.css'

export function meta() {
   return (
      {
         charset: 'UTF-8',
         title: 'GuitarLA - Remix',
         viewport: 'width=device-width, initial-scale=1',
         description: 'GuitarLA - Remix',
         keywords: 'GuitarLA - Remix',
      }
   )
}

export function links() {
   return [
      {
         rel: 'stylesheet',
         href: style
      }
   ]
} 

export default function App() {
   return (
      <body>
         <Document>
            <h1>Hola Mundo!</h1>
         </Document>
      </body>
   )
}

function Document({ children }) {
   return (
      <html>
         <head>
            <Meta />
            <Links />
         </head>

         <body>
            {children}
         </body>
      </html>
   )
}