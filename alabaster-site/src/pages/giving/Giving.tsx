import Reveal from '@/components/common/Reveal'
import Section from '@/components/common/Section'
import React from 'react'

// One-time (Square hosted checkout)
const SQUARE_CHECKOUT_URL =
  'https://checkout.square.site/merchant/your-merchant/checkout/your-checkout-id'

// Venmo
const VENMO_USERNAME = 'YourVenmoUser' // e.g., 'alabasterchurch'
const DEFAULT_NOTE = 'Alabaster Giving'

// Recurring plans (Square Subscriptions)
const RECURRING_PLANS = [
  { id: 'm25', label: '$25 / month', href: 'https://square.link/u/plan-25' },
  { id: 'm50', label: '$50 / month', href: 'https://square.link/u/plan-50' },
  { id: 'm100', label: '$100 / month', href: 'https://square.link/u/plan-100' },
  { id: 'custom', label: 'Custom / month', href: 'https://square.link/u/plan-custom' },
]

export default function Giving() {
  // Tabs: once vs monthly
  const [mode, setMode] = React.useState<'once' | 'monthly'>('once')

  // One-time amount state
  const [amount, setAmount] = React.useState<number | ''>('')
  const [coverFees, setCoverFees] = React.useState(true)
  const [showQR, setShowQR] = React.useState(false)

  // Currency formatter for UI display
  const currency = React.useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }),
    []
  )

  // Compute grossed-up total (or null if no amount)
  const withFeesNum = React.useMemo<number | null>(() => {
    if (amount === '') return null
    if (!coverFees) return Number(amount)
    const fee = amount * 0.029 + 0.3 // adjust if your Square rate differs
    const grossed = amount + fee
    return Math.round(grossed * 100) / 100
  }, [amount, coverFees])

  const quick = [25, 50, 100, 250]

  function sanitizeInput(v: string) {
    const n = Number(v.replace(/[^\d.]/g, ''))
    if (Number.isNaN(n)) return ''
    return Math.max(0, Math.min(n, 100000))
  }

  // Venmo deep links (decimal string only when numeric)
  const venmoAmountStr = withFeesNum !== null ? withFeesNum.toFixed(2) : undefined

  const venmoAppLink = venmoAmountStr
    ? `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(
        VENMO_USERNAME
      )}&amount=${venmoAmountStr}&note=${encodeURIComponent(DEFAULT_NOTE)}`
    : `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(
        VENMO_USERNAME
      )}&note=${encodeURIComponent(DEFAULT_NOTE)}`

  const venmoWebLink = venmoAmountStr
    ? `https://venmo.com/${encodeURIComponent(
        VENMO_USERNAME
      )}?txn=pay&amount=${venmoAmountStr}&note=${encodeURIComponent(DEFAULT_NOTE)}`
    : `https://venmo.com/${encodeURIComponent(
        VENMO_USERNAME
      )}?txn=pay&note=${encodeURIComponent(DEFAULT_NOTE)}`

  const squareHref = SQUARE_CHECKOUT_URL

  return (
    <div className="relative">
      {/* Small banner hero */}
      <div className="relative w-full overflow-hidden">
        <div className="h-[28vh] sm:h-[36vh]">
          <img
            src="/images/photos/giving-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <Section className="py-10">
        <Reveal>
          <h1 className="font-serif text-4xl sm:text-5xl">Give</h1>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-3 max-w-2xl text-white/80">
            Thank you for practicing generosity with us. Your giving supports worship, formation,
            hospitality, and serving our city.
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 p-1" role="tablist" aria-label="Giving mode">
          <button
            role="tab"
            aria-selected={mode === 'once'}
            onClick={() => setMode('once')}
            className={`px-4 py-2 rounded-lg text-sm transition ${mode==='once' ? 'bg-teal text-ink' : 'hover:bg-white/5 text-white/90'}`}
          >
            One-time
          </button>
          <button
            role="tab"
            aria-selected={mode === 'monthly'}
            onClick={() => setMode('monthly')}
            className={`px-4 py-2 rounded-lg text-sm transition ${mode==='monthly' ? 'bg-teal text-ink' : 'hover:bg-white/5 text-white/90'}`}
          >
            Monthly
          </button>
        </div>
      </Section>

      {/* ONE-TIME MODE */}
      {mode === 'once' && (
        <>
          {/* Amount + methods */}
          <Section className="py-6">
            <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
              <Reveal>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-white/70">Choose an amount</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quick.map((v) => (
                      <button
                        key={v}
                        onClick={() => setAmount(v)}
                        className={[
                          'rounded-xl border px-4 py-2',
                          amount === v ? 'border-teal bg-teal/10' : 'border-white/15 hover:bg-white/5',
                        ].join(' ')}
                      >
                        {currency.format(v)}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <label className="text-sm text-white/70">Custom amount</label>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-xl border border-white/15 bg-black/20 px-3 py-2">$</span>
                      <input
                        inputMode="decimal"
                        value={amount}
                        onChange={(e) => setAmount(sanitizeInput(e.target.value))}
                        placeholder="0.00"
                        className="w-40 rounded-xl border border-white/15 bg-black/20 px-3 py-2 outline-none placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={coverFees}
                        onChange={() => setCoverFees((v) => !v)}
                        className="h-4 w-4 accent-teal"
                      />
                      <span className="text-sm">Cover card processing fees (~2.9% + $0.30)</span>
                    </label>
                    <div className="text-sm text-white/70">
                      {withFeesNum !== null && coverFees ? `Total: ${currency.format(withFeesNum)}` : null}
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-white/60">
                    * Fee estimate for online card gifts via Square. Adjust copy if your rate differs.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="grid gap-6">
                  {/* One-time: Square */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-serif text-2xl">Give by Card (Square)</h2>
                        <p className="mt-1 text-white/75 text-sm">
                          Secure debit/credit processing. You’ll receive a receipt by email.
                        </p>
                      </div>
                      <img src="/images/logos/square.svg" alt="Square" className="h-8 w-auto opacity-80" />
                    </div>
                    <a
                      href={SQUARE_CHECKOUT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block rounded-2xl bg-teal px-5 py-2 font-semibold text-ink hover:brightness-110"
                    >
                      Continue to Square
                    </a>
                  </div>

                  {/* One-time: Venmo */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-serif text-2xl">Give with Venmo</h2>
                        <p className="mt-1 text-white/75 text-sm">
                          Opens the Venmo app. If the app doesn’t open, use the browser option or scan the QR.
                        </p>
                      </div>
                      <img src="/images/logos/venmo.svg" alt="Venmo" className="h-8 w-auto opacity-80" />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a href={venmoAppLink} className="rounded-2xl border border-white/15 px-4 py-2 hover:bg-white/5">
                        Open Venmo App
                      </a>
                      <a
                        href={venmoWebLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl border border-white/15 px-4 py-2 hover:bg-white/5"
                      >
                        Open in Browser
                      </a>
                      <button
                        onClick={() => setShowQR(true)}
                        className="rounded-2xl border border-white/15 px-4 py-2 hover:bg-white/5"
                      >
                        Show QR
                      </button>
                    </div>

                    {withFeesNum !== null && (
                      <p className="mt-2 text-sm text-white/70">
                        Prefilled amount: <span className="font-semibold">{currency.format(withFeesNum)}</span> • Note: “{DEFAULT_NOTE}”
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </Section>
        </>
      )}

      {/* MONTHLY MODE */}
      {mode === 'monthly' && (
        <Section className="py-6">
          <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
            <Reveal>
              {/* Messaging card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="font-serif text-2xl">Make it Monthly</h2>
                <p className="mt-2 text-white/80">
                  Join our monthly supporters. You can change or cancel anytime on Square’s secure site.
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-white/75 text-sm">
                  <li>Receipts emailed automatically</li>
                  <li>Track your giving history on Square</li>
                  <li>Helps us plan and serve consistently</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              {/* Plan buttons */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-serif text-2xl">Choose a Plan</div>
                    <p className="mt-1 text-white/75 text-sm">
                      Select a monthly amount below to set up your subscription.
                    </p>
                  </div>
                  <img src="/images/logos/square.svg" alt="Square" className="h-8 w-auto opacity-80" />
                </div>
                <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
                  {RECURRING_PLANS.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 px-4 py-2 text-center hover:bg-white/5"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/60">
                  You’ll manage the subscription on Square’s secure site.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Trust & FAQs */}
      <Section className="py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-serif text-xl">Tax-Deductible</h3>
              <p className="mt-2 text-white/80 text-sm">
                Gifts are tax-deductible to the extent allowed by law. Annual statements are emailed in January.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-serif text-xl">Receipts & Records</h3>
              <p className="mt-2 text-white/80 text-sm">
                You’ll receive a receipt for each gift. Contact us if you need help updating your info.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-serif text-xl">Security</h3>
              <p className="mt-2 text-white/80 text-sm">
                Payments are processed by Square/Venmo on their secure platforms; no card data is stored on our site.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Venmo QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-ink p-6">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl">Scan to give on Venmo</h4>
              <button
                onClick={() => setShowQR(false)}
                className="rounded-lg border border-white/15 px-3 py-1 text-white/80 hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 grid place-items-center">
              <img src="/images/qr/venmo.png" alt="Venmo QR" className="h-64 w-64 rounded-xl bg-white p-2" />
            </div>
            <p className="mt-3 text-center text-sm text-white/70">@{VENMO_USERNAME}</p>
          </div>
        </div>
      )}
    </div>
  )
}
