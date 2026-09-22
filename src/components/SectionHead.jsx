export default function SectionHead({ label, heading }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3.5 md:gap-10 items-start mb-10">
      <div className="text-[15px] font-bold">
        {label}
        <span className="label-rule" />
      </div>
      {heading && (
        <h2 className="font-display font-[560] text-[clamp(24px,3.2vw,34px)] m-0 tracking-[-0.01em] max-w-[640px]">
          {heading}
        </h2>
      )}
    </div>
  )
}
