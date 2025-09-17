import React from 'react'

type Item = { id: string; title: string; content: React.ReactNode }
export default function Accordion({
  items,
  defaultOpenId,
  className = ''
}: {
  items: Item[]
  defaultOpenId?: string
  className?: string
}) {
  const [open, setOpen] = React.useState<string | null>(defaultOpenId ?? null)

  return (
    <div className={`divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 ${className}`}>
      {items.map((it) => {
        const isOpen = open === it.id
        const toggle = () => setOpen(isOpen ? null : it.id)
        const panelId = `panel-${it.id}`
        const btnId = `button-${it.id}`

        return (
          <div key={it.id}>
            <button
              id={btnId}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold hover:bg-white/[0.06]"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={toggle}
            >
              <span className="font-serif text-lg">{it.title}</span>
              <span className={`transition-transform ${isOpen ? 'rotate-45' : ''}`}>＋</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-white/85">{it.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
