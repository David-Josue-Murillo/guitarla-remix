export default function App() {
   return (
      <body>
         <Document>
            <h1>Hola Mundo!</h1>
         </Document>
      </body>
   );
}

function Document({ children }) {
   return (
      <html>
         <head>
            <title>GuitarLA - Remix</title>
         </head>

         <body>
            {children}
         </body>
      </html>
   )
}