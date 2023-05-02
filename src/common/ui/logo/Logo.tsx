import { FC } from 'react';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={40}
        height={40}
        alt="Logo"
        className="md:w-[60px]"
      />
    </Link>
  );
};
