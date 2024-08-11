import Link from 'next/link'
import React from 'react'

const pastEvents = () => {
  return (
    <div>
        <Link href={'/events/past-events/fevent'}>
        <div>First Event</div></Link>
    </div>
  )
}

export default pastEvents