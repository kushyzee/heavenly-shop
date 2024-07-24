import React from 'react'

const PageSection = ({children}) => {
  return (
    <section className="px-5 mt-28 mb-14 md:my-20 text-gray-700 text-base md:text-lg md:max-w-5xl mx-auto max-w-xl">
      {children}
    </section>
  )
}

export default PageSection