import React, { FC } from 'react';
import Coolify from '../public/coolify.png';
import Proxmox from '../public/Proxmox.png';
import TrueNAS from '../public/TrueNAS.png';
import Amp from '../public/Amp.png';
import HomeAssistant from '../public/HomeAssistant.jpeg';
import Ollama from '../public/Ollama.png';
import SilverBullet from '../public/SilverBullet.png';

interface BookMarkImageProps {
  type: string;
}

const imageMap: { [key: string]: any } = {
  Proxmox: Proxmox,
  TrueNAS: TrueNAS,
  Coolify: Coolify,
  Amp: Amp,
  HomeAssistant: HomeAssistant,
  Ollama: Ollama,
  SilverBullet: SilverBullet,
};

const BookMarkImage: FC<BookMarkImageProps> = ({ type }) => {
  const image = imageMap[type];
  return <img src={image} width="100%" loading="lazy" alt="" />;
};

export default BookMarkImage;
