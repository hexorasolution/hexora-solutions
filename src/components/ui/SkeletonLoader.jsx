const Skeleton = ({ className = '', style = {} }) => (
  <div
    className={`skeleton ${className}`}
    style={style}
    aria-hidden="true"
  />
)

export const SkeletonCard = () => (
  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
    <Skeleton className="skeleton--image rounded-xl mb-4" />
    <Skeleton className="skeleton--title rounded mb-3" style={{ width: '70%' }} />
    <Skeleton className="skeleton--text rounded mb-2" />
    <Skeleton className="skeleton--text rounded mb-2" style={{ width: '85%' }} />
    <Skeleton className="skeleton--text rounded" style={{ width: '60%' }} />
  </div>
)

export const SkeletonBlogCard = () => (
  <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden">
    <Skeleton className="skeleton--image" style={{ aspectRatio: '16/9' }} />
    <div className="p-5">
      <Skeleton className="skeleton--text rounded mb-3" style={{ width: '30%' }} />
      <Skeleton className="skeleton--title rounded mb-2" />
      <Skeleton className="skeleton--title rounded mb-4" style={{ width: '80%' }} />
      <Skeleton className="skeleton--text rounded mb-2" />
      <Skeleton className="skeleton--text rounded" style={{ width: '75%' }} />
    </div>
  </div>
)

export const SkeletonTeamCard = () => (
  <div className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 overflow-hidden">
    <Skeleton style={{ height: 240 }} />
    <div className="p-5">
      <Skeleton className="skeleton--title rounded mb-2" style={{ width: '60%' }} />
      <Skeleton className="skeleton--text rounded" style={{ width: '45%' }} />
    </div>
  </div>
)

export default Skeleton