'use client' // Error components must be Client components
import { useEffect } from 'react'
import { Container, StyledButton } from './styles'
import Navbar from '@/components/Layout/Navbar'
import { inter } from '@/components/Font/font'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navbar />

      <Container>
        <h1 className={inter.className} style={{ color: 'var(--purple)' }}>
          Something went wrong!
        </h1>
        <StyledButton onClick={() => reset()}>Try again</StyledButton>
      </Container>
    </>
  )
}
