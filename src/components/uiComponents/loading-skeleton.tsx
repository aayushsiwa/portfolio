import styled from "styled-components";

const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .dark & {
    background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
    background-size: 200% 100%;
  }
`;

export function ProjectCardSkeleton() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Image Skeleton */}
        <SkeletonCard className="h-48 sm:h-52 w-full" />

        {/* Content Skeleton */}
        <div className="p-6">
          <div className="mb-4">
            <SkeletonCard className="h-6 w-3/4 mb-2 rounded" />
            <SkeletonCard className="h-4 w-full mb-2 rounded" />
            <SkeletonCard className="h-4 w-2/3 rounded" />
          </div>

          {/* Tags Skeleton */}
          <div className="flex gap-2 mb-4">
            <SkeletonCard className="h-6 w-16 rounded-full" />
            <SkeletonCard className="h-6 w-20 rounded-full" />
            <SkeletonCard className="h-6 w-14 rounded-full" />
          </div>

          {/* Actions Skeleton */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex gap-3">
              <SkeletonCard className="h-8 w-16 rounded-lg" />
              <SkeletonCard className="h-8 w-16 rounded-lg" />
            </div>
            <SkeletonCard className="h-4 w-8 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
