export const isCurrentPage = (currentPath: string, href: string) => {
  if (href === '/' || href === '/en/') {
    return currentPath === href
  }

  return currentPath === href || currentPath.startsWith(href)
}
