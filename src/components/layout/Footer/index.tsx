import React from 'react'

const CATEGORIES = ['About us', 'Contact', 'Blog']

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 absolute bottom-0 h-20">
      <div className="w-4/5 h-full m-auto flex justify-center items-center">
        <div className="flex">
          {CATEGORIES.map((category) => (
            <div key="category" className="mx-3">
              {category.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
