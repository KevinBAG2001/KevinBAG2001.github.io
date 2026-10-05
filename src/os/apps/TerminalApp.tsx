import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { tOs } from '../i18n/osCopy'
import { runTerminalCommand, type TerminalLine } from '../terminal/commands'

export function TerminalApp() {
  const { locale } = useLocale()
  const t = tOs('terminal', locale)
  const [lines, setLines] = useState<TerminalLine[]>([{ type: 'out', text: t.welcome }])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const exec = useCallback(
    (raw: string) => {
      const trimmed = raw.trim()
      if (!trimmed) return
      setHistory((h) => [...h, trimmed])
      setHistIdx(-1)
      setLines((prev) => [...prev, { type: 'cmd', text: `${t.prompt} ${trimmed}` }])
      const out = runTerminalCommand(trimmed, locale)
      if (out.some((l) => l.text === '__CLEAR__')) {
        setLines([{ type: 'out', text: t.welcome }])
        return
      }
      setLines((prev) => [...prev, ...out])
    },
    [locale, t.prompt, t.welcome],
  )

  return (
    <div
      className="flex h-full flex-col bg-[#0d0d12] font-mono text-[13px] text-[#c8cad4]"
      onClick={() => inputRef.current?.focus()}
      role="presentation"
    >
      <p className="border-b border-[#2a2a38] bg-[#14141c] px-3 py-2 text-[11px] text-[#888]">{t.banner}</p>
      <pre className="pointer-events-none px-3 pt-3 text-[10px] leading-tight text-[var(--color-accent)]/80">
{`┌──────────────────────────────────────┐
│  KEVIN OS · Engineering × Builder    │
└──────────────────────────────────────┘`}
      </pre>
      <div className="flex-1 overflow-y-auto px-3 pb-2">
        {lines.map((line, i) => (
          <div
            key={`${i}-${line.text.slice(0, 24)}`}
            className={
              line.type === 'cmd'
                ? 'mt-2 text-[#e8e8f0]'
                : line.type === 'err'
                  ? 'text-red-400'
                  : 'whitespace-pre-wrap text-[#a8aab8]'
            }
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form
        className="flex items-center gap-2 border-t border-[#2a2a38] px-3 py-2"
        onSubmit={(e) => {
          e.preventDefault()
          exec(input)
          setInput('')
        }}
      >
        <span className="shrink-0 text-[var(--color-emerald)]">{t.prompt}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              e.preventDefault()
              if (!history.length) return
              const next = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1)
              setHistIdx(next)
              setInput(history[next] ?? '')
            }
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              if (histIdx < 0) return
              const next = histIdx + 1
              if (next >= history.length) {
                setHistIdx(-1)
                setInput('')
              } else {
                setHistIdx(next)
                setInput(history[next] ?? '')
              }
            }
          }}
          className="min-w-0 flex-1 bg-transparent outline-none"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  )
}
