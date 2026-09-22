export default function PageHero({ title, lead }) {
  return (
    <section className="pt-16 pb-10">
      <div className="wrap">
        <h1 className="font-display font-[560] text-[clamp(32px,5vw,48px)] m-0 mb-3.5 tracking-[-0.01em]">
          {title}
        </h1>
        {lead && <p className="text-[17px] text-muted max-w-[600px] m-0">{lead}</p>}
      </div>
    </section>
  )
}
