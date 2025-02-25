type Submenu = {
  href: string
  label: string
  active: boolean
}

export type Nav = {
  label: string
  href: string
  active: boolean
  submenus?: Submenu[] | null
  SubMenu?: React.ComponentType
}
