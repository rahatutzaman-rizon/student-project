import { ClerkProvider } from '@clerk/nextjs'

//import './globals.css'
 
const PlatformLayout =({
  children
}:
 {
  children: React.ReactNode
}) =>{
  
  return (
    // <ClerkProvider>
    //  {children}
    // </ClerkProvider>

    <ClerkProvider  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    {children}
  </ClerkProvider>


  )
} 

export  default PlatformLayout;