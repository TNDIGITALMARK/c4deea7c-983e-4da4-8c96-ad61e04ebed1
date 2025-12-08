'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-cream">
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected error. Don't worry, we're working on it!
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="gradient-pink px-8 py-4 rounded-xl font-heading font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Try Again
          </button>
          <a
            href="/"
            className="gradient-yellow px-8 py-4 rounded-xl font-heading font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Return Home
          </a>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-8 text-left bg-card rounded-xl p-6 shadow-lg">
            <summary className="cursor-pointer font-heading font-semibold text-primary mb-4">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 p-4 bg-muted rounded-lg text-sm overflow-auto max-h-96 font-mono">
              {error.message}
              {error.stack && '\n\nStack trace:\n' + error.stack}
              {error.digest && '\n\nError ID: ' + error.digest}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}