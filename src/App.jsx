import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function App() {
  return (
    <header>
      <h1>Harsh jain</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}