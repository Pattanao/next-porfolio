import Link from 'next/link'

export const Header = () => {
  return (
    <div className="h-14 bg-gray-500 flex items-center justify-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href={'/home'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
