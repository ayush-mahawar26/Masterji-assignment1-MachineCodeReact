

export function PrimaryWhiteHeading({ label }) {
  return <div className={`text-6xl font-bold text-slate-50 font-mono`}>
    {label}
  </div>
}

export function PrimaryBlackHeading({ label }) {
  return <div className={`text-6xl font-bold text-black font-mono`}>
    {label}
  </div>
}

export function PrimaryBlueHeading({ label }) {
  return <div className={`text-6xl font-bold text-[#444B79] font-mono`}>
    {label}
  </div>
}


export function SecondaryHeading({ label }) {
  return <div className="text-3xl font-bold text-black font-sans text-center">
    {label}
  </div>
}


export function TaglineHeading({ label }) {
  return <div className="font-sans  text-slate-400">
    {label}
  </div>
}