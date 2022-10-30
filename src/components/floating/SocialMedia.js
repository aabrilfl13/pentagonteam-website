import React from 'react'
import {AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'

export const SocialMedia = () => {
  return (
    <div className='header__socials'>
      <a href="#"><AiOutlineYoutube/></a>
      <a href="#"><AiOutlineInstagram/></a>
      <a href="#"><AiOutlineFacebook/></a>
    </div>
  )
}

export default SocialMedia;