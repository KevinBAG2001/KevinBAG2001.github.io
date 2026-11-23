import { motion, useReducedMotion } from 'framer-motion'

export function CinematicBackground() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-surface)]" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -15%, color-mix(in srgb, var(--color-secondary) 18%, transparent), transparent 60%)',
        }}
      />
      {!reduce && (
        <>
          <motion.div
            className="hero-orb absolute -top-[12%] -left-[8%] h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-accent) 42%, transparent) 0%, transparent 68%)',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, 32, -16, 0], y: [0, -24, 18, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="hero-orb absolute top-[28%] -right-[12%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 38%, transparent) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, -28, 20, 0], y: [0, 30, -12, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[8%] left-[22%] h-32 w-32 rounded-full opacity-40"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--color-violet-spark) 55%, transparent), transparent 70%)',
              filter: 'blur(48px)',
            }}
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      <div className="cinematic-grain absolute inset-0" />
    </div>
  )
}