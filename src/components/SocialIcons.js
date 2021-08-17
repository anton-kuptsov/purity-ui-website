import React from "react"
import { Link } from "gatsby"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill
} from "react-icons/ri"

import { FaWordpress, FaVk } from "react-icons/fa"
import SocialMedia from "../util/socialmedia.json"

export const SocialIcons = () => {
  const Icons = {
    facebook: <RiFacebookBoxFill />,
    twitter: <RiTwitterFill />,
    linkedin: <RiLinkedinBoxFill />,
    youtube: <RiYoutubeFill />,
    instagram: <RiInstagramFill />,
    rss: <RiRssFill />,
    github: <RiGithubFill />,
    telegram: <RiTelegramFill />,
    pinterest: <RiPinterestFill />,
    snapchat: <RiSnapchatFill />,
    skype: <RiSkypeFill />,
    wordpress: <FaWordpress />,
    dribbble: <RiDribbbleFill />,
    medium: <RiMediumFill />,
    behance: <RiBehanceFill />,
    vk: <FaVk />
  }

  return SocialMedia.links.map(item => {
    return (
      <Link key={item.icon} to={item.url} target="_blank" title={item.icon}>
        {Icons[item.icon]}
      </Link>
    )
  })
}
