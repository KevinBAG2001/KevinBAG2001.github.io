import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function BlurHeadline({ text, className = '' }: { text: string; className?: string }) {
  const reduce = useReducedMotion()
  const words = text.split(/\s+/).filter(Boolean)

  if (reduce) {
    return (
      <span className={className} aria-label={text}>
        {text}
      </span>
    )
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="mr-[0.28em] inline-block"
          initial={{ opacity: 0, filter: 'blur(12px)', y: 12 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 + i * 0.07, ease }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}