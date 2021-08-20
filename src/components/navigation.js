import React, { useState } from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { ThemeSwitcher } from "./themeSwitcher"
import * as style from "./nav.module.scss"

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/blog",
    title: "Blog"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  }
]

const ListLink = props => (
  <li>
    <Link to={props.to} className={style.link}>
      {props.children}
    </Link>
  </li>
)

export const NavBar = () => {
  const [isShowMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!isShowMenu)
  }

  const listMenuItems = MenuItems.map((menuItem, index) => (
    <ListLink key={index} to={menuItem.path}>
      {menuItem.title}
    </ListLink>
  ))

  return (
    <nav className={style.container}>
      <button
        onClick={toggleMenu}
        className={
          style.menu_trigger + " " + (isShowMenu ? style.is_active : "")
        }
      >
        <div className={style.icon_menu_line}>
          <RiMenu3Line />
        </div>
        <div className={style.icon_menu_close}>
          <RiCloseLine />
        </div>
      </button>
      <ul>
        {listMenuItems}
        <div className={style.line} />
        <div className={style.switcher}>
          <ThemeSwitcher />
        </div>
      </ul>
    </nav>
  )
}
