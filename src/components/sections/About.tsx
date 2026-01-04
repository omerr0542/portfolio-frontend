'use client'

type Props = {
  about: string
}

function renderWithHighlights(text: string) {
  return <span>{text}</span>
}

export default function About({ about }: Props) {
  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="mb-12 text-center text-5xl md:text-6xl font-light tracking-tight">
          About Me
        </h2>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-muted font-light">
          {about
            .split('\n')
            .map((paragraph, index) => (
              <p key={index}>
                {renderWithHighlights(paragraph)}
              </p>
            ))}
        </div>
      </div>
    </section>
  )
}
