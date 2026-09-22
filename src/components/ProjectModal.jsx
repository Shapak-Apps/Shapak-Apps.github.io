import { useState, useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { categoryLabel } from '../data/projects'
import { dict } from '../data/i18n'

export default function ProjectModal({ project, onSave, onClose }) {
  const { t } = useApp()
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState('lang')
  const [img, setImg] = useState(null)
  const nameRef = useRef(null)

  const open = Boolean(project)

  useEffect(() => {
    if (!project) return
    setName(t(project.name))
    setDesc(t(project.desc))
    setCategory(project.category)
    setImg(project.badgeImg ?? null)
    const id = setTimeout(() => nameRef.current?.focus(), 60)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project])

  useEffect(() => {
    document.documentElement.setAttribute('data-scroll-lock', String(open))
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImg(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSave = () => {
    onSave(project.id, {
      name: name.trim(),
      desc: desc.trim(),
      category,
      ...(img && img !== project.badgeImg ? { badgeImg: img } : {}),
    })
    onClose()
  }

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-[rgba(10,8,4,0.5)] transition-opacity duration-[250ms] ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`fixed z-[91] left-1/2 top-1/2 w-[min(440px,92vw)] max-h-[86vh] overflow-y-auto bg-bg border border-rule rounded-[18px] p-[22px] pb-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-[250ms] ease-[cubic-bezier(.16,1,.3,1)] ${
          open
            ? 'opacity-100 pointer-events-auto -translate-x-1/2 -translate-y-1/2 scale-100'
            : 'opacity-0 pointer-events-none -translate-x-1/2 -translate-y-[46%] scale-[0.96]'
        }`}
      >
        {project && (
          <>
            <div className="flex items-center justify-between mb-[18px]">
              <h3 className="font-display font-[650] text-[19px] m-0">{t(dict.projects.modalTitle)}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label={t(dict.common.close)}
                className="w-[30px] h-[30px] rounded-lg border border-rule grid place-items-center cursor-pointer shrink-0 transition-colors hover:border-ray"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
                  <path d="M3 3l10 10M13 3 3 13" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[7px]">
                <span className="text-[12.5px] font-bold text-muted">{t(dict.projects.fieldImage)}</span>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-[10px] overflow-hidden shrink-0 grid place-items-center text-white font-extrabold text-sm"
                    style={{ background: project.badgeColor }}
                  >
                    {img ? <img src={img} alt="" className="w-full h-full object-cover" /> : project.badgeText}
                  </div>
                  <label className="inline-flex items-center gap-2 font-bold text-[13.5px] px-3.5 py-2 rounded-lg border border-rule cursor-pointer transition-colors hover:border-ink">
                    {t(dict.projects.changeImage)}
                    <input type="file" accept="image/*" hidden onChange={handleFile} />
                  </label>
                </div>
              </div>

              <label className="flex flex-col gap-[7px]">
                <span className="text-[12.5px] font-bold text-muted">{t(dict.projects.fieldName)}</span>
                <input
                  ref={nameRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-[14.5px] bg-bg border border-rule rounded-[10px] px-3 py-2.5 transition-colors focus:border-ray outline-none"
                />
              </label>

              <label className="flex flex-col gap-[7px]">
                <span className="text-[12.5px] font-bold text-muted">{t(dict.projects.fieldDesc)}</span>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="text-[14.5px] bg-bg border border-rule rounded-[10px] px-3 py-2.5 resize-y transition-colors focus:border-ray outline-none"
                />
              </label>

              <label className="flex flex-col gap-[7px]">
                <span className="text-[12.5px] font-bold text-muted">{t(dict.projects.fieldCategory)}</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-[14.5px] bg-bg border border-rule rounded-[10px] px-3 py-2.5 transition-colors focus:border-ray outline-none"
                >
                  <option value="lang">{t(categoryLabel.lang)}</option>
                  <option value="tools">{t(categoryLabel.tools)}</option>
                </select>
              </label>
            </div>

            <div className="flex justify-end gap-2.5 mt-[22px]">
              <button
                type="button"
                onClick={onClose}
                className="font-bold text-[13.5px] px-3.5 py-2 rounded-lg border border-rule cursor-pointer transition-colors hover:border-ink"
              >
                {t(dict.common.cancel)}
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="font-bold text-[13.5px] px-3.5 py-2 rounded-lg border border-ink bg-ink text-bg cursor-pointer transition-colors hover:bg-ember hover:border-ember"
              >
                {t(dict.common.save)}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
