import React from 'react'

export default function PhotoCollage({ images }: { images: string[] }) {
  // Use the first 4–5 images; layout is asymmetric but calm.
  const [a, b, c, d, e] = images
  return (
    <div className="relative mx-auto grid max-w-5xl grid-cols-12 gap-4">
      {/* Row 1 */}
      {a && <img src={a} alt="" className="col-span-7 h-64 w-full rounded-xl object-cover" />}
      {b && <img src={b} alt="" className="col-span-5 h-64 w-full rounded-xl object-cover" />}

      {/* Row 2 */}
      {c && <img src={c} alt="" className="col-span-4 h-52 w-full rounded-xl object-cover -mt-8 sm:mt-0" />}
      {d && <img src={d} alt="" className="col-span-8 h-52 w-full rounded-xl object-cover" />}

      {/* Optional Row 3 (light overlap on small screens) */}
      {e && <img src={e} alt="" className="col-span-6 h-52 w-full rounded-xl object-cover -mt-6 sm:mt-0" />}
    </div>
  )
}
