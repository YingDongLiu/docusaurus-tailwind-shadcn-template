import React from 'react'

export default function CustomTagsList({ tags }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="inline-block rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs font-normal text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        >
          {tag.label}
        </span>
      ))}
    </div>
  )
}