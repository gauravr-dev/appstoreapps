 
export default function NotFound({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
      <html>
        <body>
          <h2>404 NotFound</h2>
        </body>
      </html>
    )
  }