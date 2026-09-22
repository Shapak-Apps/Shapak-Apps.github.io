import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'
import { useApp } from '../context/AppContext'
import { dict } from '../data/i18n'
import { posts } from '../data/posts'

export default function Blog() {
  const { t } = useApp()

  return (
    <>
      <PageHero title={t(dict.blog.title)} lead={t(dict.blog.lead)} />
      <section className="py-10">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            {posts.map((post, i) => (
              <Reveal key={post.id} delay={i * 60}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
