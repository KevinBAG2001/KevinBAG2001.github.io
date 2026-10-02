import { motion, useReducedMotion } from 'framer-motion'

export function MeshBackground() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden mesh-bg" aria-hidden>
      {!reduce && (
        <>
          <motion.div
            className="absolute -top-1/4 left-1/4 h-[480px] w-[480px] rounded-full blur-3xl"
            style={{ background: 'color-mix(in srgb, var(--color-accent) 22%, transparent)' }}
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 -right-20 h-[360px] w-[360px] rounded-full blur-3xl"
            style={{ background: 'color-mix(in srgb, var(--color-emerald) 16%, transparent)' }}
            animate={{ x: [0, -30, 25, 0], y: [0, 35, -15, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  )
}
