import PageLayout from '@/components/PageLayout';
import { getPostBySlug, getAllPosts, Post } from '@/lib/posts';
import { marked } from 'marked';
import Link from 'next/link';

type Props = { params: { slug: string } };

export default function PostPage({ params }: Props) {
  const post: Post | undefined = getPostBySlug(params.slug);
  if (!post) return <PageLayout><div className="max-w-3xl mx-auto px-6 py-20 text-center">Post not found</div></PageLayout>;

  const html = marked.parse(post.content || '');
  const readNext = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-sm text-gray-500 hover:underline">
          ← Back to Blog
        </Link>

        <header className="mt-6 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mt-2 text-sm text-gray-500">
            By{' '}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Adithya S
            </span>{' '}
            •{' '}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <footer className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-3">Read next</h3>
          <div className="grid gap-3">
            {readNext.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {p.title}
                </div>
                <div className="text-sm text-gray-500">
                  {p.description}
                </div>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </PageLayout>
  );
}
