import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col justify-between m-5 items-center h-auto
                      sm:flex-row">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        // Resize an element’s content to stay contained within its container using
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={100}
        height={100}
      />
    </header>
  );
}

export default Header;