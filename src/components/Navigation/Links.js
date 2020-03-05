import React from 'react'
import { Link } from 'gatsby'

export const menuLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Community Info',
    url: '/community-info'
  },
  {
    name: 'Partners',
    url: '/partners'
  },
]

export const accountLinks = [
  {
    name: 'Account Dashboard',
    url: '/dashboard'
  },
  {
    name: 'Settings',
    url: '/settings'
  },
  {
    name: 'Sign Out',
    url: '/logout'
  }
]

export const DesktopMenuLinks = () => (
  <>
    { menuLinks ? menuLinks.map(link => <Link key={link.name} to={link.url} activeClassName="border-indigo-500" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
      {link.name}
    </Link>) : null }
  </>
)

export const MobileMenuLinks = () => (
  <>
    { menuLinks ? menuLinks.map(link => <Link key={link.name} to={link.url} className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
      {link.name}
    </Link>) : null }
  </>
)

export const DesktopAccountLinks = () => (
  <>
    { accountLinks ? accountLinks.map(link => <Link key={link.name} to={link.url} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
      {link.name}
    </Link>) : null }
  </>
)

export const MobileAccountLinks = () => (
  <>
    { accountLinks ? accountLinks.map(link => <Link key={link.name} to={link.url} className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out">
      {link.name}
    </Link>) : null }
  </>
)