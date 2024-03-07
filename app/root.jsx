import { Meta, Links, Outlet } from '@remix-run/react'
import style from './styles/index.css'
import header from './components/header'

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
         href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.googleapis.com'
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.gstatic.com',
         crossorigin: 'true'
      },
      {
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'
      },
      {
         rel: 'stylesheet',
         href: style
      }, 
   ]
} 

export default function App() {
   return (
      <body>
         <Document>
            <Outlet />
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