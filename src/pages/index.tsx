import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { FaTelegram } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Dropdown = dynamic(() => import('rc-dropdown'), { ssr: false });

const menu = (
  <div className="border py-2 rounded-md shadow-md bg-white">
    <ul className="items-center gap-3 xl:gap-10 2xl:gap-[91px] text-base font-medium text-[#797979] space-y-1">
      <li className="px-5 hover:bg-[#E8F0F5]">
        <a href={'#spaces'}>Spaces</a>
      </li>
      <li className="px-5 hover:bg-[#E8F0F5]">
        <a href={'#tokenomics'}>Tokenomics</a>
      </li>
      <li className="px-5 hover:bg-[#E8F0F5]">
        <a href={'#roadmap'}>Roadmap</a>
      </li>
      <li className="px-5 hover:bg-[#E8F0F5]">
        <a href={'#links'}>Links</a>
      </li>
      <li className="px-5 hover:bg-[#E8F0F5]">
        <a href={'#socials'}>Socials</a>
      </li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <main className="bg-[#FFFFFF] font-urbanist max-w-[1920px] mx-auto">
      <header className="py-3 px-[5%] pt-4 sm:pt-[26px] border-b border-[#ECECEC] flex items-center justify-between">
        <Link href={'/'}>
          <span className="flex items-center">
            <span className="w-[49px] lg:w-[59px] xl:w-[79px]">
              <Image src={'/img/logo.png'} width={79} height={87} alt="logo" />
            </span>
            <h3 className="hidden md:block text-lg lg:text-2xl xl:text-[32px] font-extrabold text-[#3A2215]">
              celebcheck.com
            </h3>
          </span>
        </Link>
        <div className="flex items-center">
          <div className="hidden sm:block">
            <nav className="">
              <ul className="flex items-center gap-3 xl:gap-10 2xl:gap-[91px] text-base font-bold text-[#797979]">
                <li className="hover:text-[#194E6A] transition-colors duration-200 ease-in-out">
                  <a href={'#spaces'}>Spaces</a>
                </li>
                <li className="hover:text-[#194E6A] transition-colors duration-200 ease-in-out">
                  <a href={'#tokenomics'}>Tokenomics</a>
                </li>
                <li className="hover:text-[#194E6A] transition-colors duration-200 ease-in-out">
                  <a href={'#roadmap'}>Roadmap</a>
                </li>
                <li className="hover:text-[#194E6A] transition-colors duration-200 ease-in-out">
                  <a href={'#links'}>Links</a>
                </li>
                <li className="hover:text-[#194E6A] transition-colors duration-200 ease-in-out">
                  <a href={'#socials'}>Socials</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden  sm:flex items-center gap-4 lg:gap-[36px] ml-[40px] lg:ml-[80px] xl:ml-[131px]">
            <Link href={'https://t.me/CelebCheckEth'} target="_blank">
              <div className="w-[23px] h-[23px]">
                <FaTelegram className="text-2xl text-[#8ACFF2] hover:text-[#48aadb] duration-300" />
              </div>
            </Link>
            <Link href={'https://twitter.com/Celebcheck_eth'} target="_blank">
              <div className="w-[23px] h-[23px]">
                <AiFillTwitterCircle className="text-[26.58px] leading-6 text-[#8ACFF2] hover:text-[#48aadb] duration-300" />
              </div>
            </Link>
          </div>
        </div>
        <div className="sm:hidden">
          <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
            <HiBars3BottomRight className="text-3xl text-[#3D81AC]" />
          </Dropdown>
        </div>
      </header>
      <div className="lg:bg-[url('/img/bg_image.png')] bg-no-repeat">
        <div className="lg:bg-white/75">
          <section className="pt-3.5 lg:flex flex-row-reverse px-[10%] 2xl:px-[16%] pb-5">
            <div className="lg:flex-1 w-[303px] h-[424px] mx-auto lg:mx-0 lg:w-auto lg:h-auto">
              <Image
                src={'/img/hero.png'}
                width={603}
                height={724}
                alt="hero image"
              />
            </div>
            <div className="mt-[50px] lg:mt-[130px] lg:max-w-[50%]">
              <h3 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1318]">
                $Check yourself before you wreck yourself
              </h3>
              <p className="text-center md:text-left font-semibold text-base sm:text-lg md:text-xl mt-5 sm:mt-7 lg:mt-[45px] text-[#7A7A7A]">
                Are you tired of the same old Twitter drama? Do you want to add some
                entertaining content to your social media feed? Then check out
                $CHECK, the platform that's all about epic memes and social
                commentary. It started up in response to Twitter's lame verification
                system changes and has become a go-to spot for anyone who wants to
                chill and share their opinions in an engaging manner. Whether you're
                a verified user, just cruising through, or a total MEME lord, $CHECK
                has something for you. So lets dive in and explore the wild world of
                Twitter, where we can roast all the stuff that leaves us scratching
                our heads. With our clever humor and relatable content, we're sure
                to put a smile on your face and brighten up your day. So why not
                give it a shot and see what all the fuss is about?
              </p>
              <p className="font-semibold text-base sm:text-lg md:text-xl mt-4 md:mt-[25px] lg:mt-[45px] text-[#7A7A7A]">
                So what's the fuss? Well, $CHECK is all about creating a space where
                everyone can come together and share some laughs. We're not into the
                haters who can't take a joke or want to cancel everything. So let's
                kick back, grab some brews, and enjoy the good vibes with $CHECK.
                It's gonna be a total blast!
              </p>
            </div>
          </section>
          <section
            id="spaces"
            className="bg-[#FFF6EB] 2xl:w-[1324px] mx-[5%] 2xl:mx-auto px-8 md:px-10 pt-8 md:pt-14 lg:pt-[123px] pb-[30px] lg:pb-[114px] mt-14 md:mt-20 lg:mt-36 rounded-xl"
          >
            <div className="sm:flex gap-4">
              <div className="flex-1">
                <div className="relative w-full h-[260px] xs:h-[340px] sm:h-[160px] md:h-[170px] lg:h-[220px] xl:h-[330px] 2xl:w-[474px] 2xl:h-[426px] rounded-[32px] drop_shadow">
                  <Image
                    src={'/img/image1.png'}
                    fill
                    alt="image"
                    className="rounded"
                  />
                </div>
                <div className="relative w-full h-[160px] xs:h-[225px] sm:h-[105px] md:h-[114px] lg:h-[140px] xl:h-[200px] 2xl:w-[474px] 2xl:h-[265px] drop_shadow mt-[9px]">
                  <Image
                    src={'/img/image4.png'}
                    fill
                    alt="image"
                    className="object-fit"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-[240px] xs:h-[330px] sm:h-[145px] md:h-[165px] lg:h-[218px] xl:h-[290px] 2xl:w-[371px] 2xl:h-[314px] drop_shadow">
                  <Image
                    src={'/img/image2.png'}
                    fill
                    alt="image"
                    className="w-full sm:w-auto"
                  />
                </div>
                <div className="relative w-full h-[350px] xs:h-[440px] sm:h-[200px] md:h-[230px] lg:h-[302px] xl:h-[410px] 2xl:w-[365px] 2xl:h-[443px] drop_shadow mt-[18px]">
                  <Image
                    src={'/img/image5.png'}
                    fill
                    alt="image"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-[290px] xs:h-[358px] sm:h-[170px] md:h-[193px] lg:h-[265px] xl:h-[330px]  2xl:w-[365px] 2xl:h-[358px] drop_shadow ">
                  <Image
                    src={'/img/image3.png'}
                    fill
                    alt="image"
                    className="w-full sm:w-auto"
                  />
                </div>
                <div className="relative w-full h-[350px] xs:h-[420px] sm:h-[200px] md:h-[235px] lg:h-[320px] xl:h-[420px] 2xl:w-[358px] 2xl:h-[440px] drop_shadow mt-[5px]">
                  <Image
                    src={'/img/image6.png'}
                    fill
                    alt="image"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
            <p className="mt-14 md:mt-20 lg:mt-[163px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] xl:leading-[60px] 2xl:text-[64px] 2xl:leadnig-[74px] font-normal text-[#194E6A] text-center pb-5 md:pb-12 lg:pb-[90px]">
              “The Tits, Prick, or Tick ($CHECK) show” is hosted on our Twitter
              Space. Watch out for the next episode
            </p>
          </section>
        </div>
      </div>
      <section
        id="tokenomics"
        className="pt-14 sm:pt-20 lg:pt-[140px] 2xl:pt-[215px] mx-[5%] lg:mx-[8%] 2xl:mx-[12.4%] px-10 pb-0 xs:pb-[50px] md:pb-[70px] lg:pb-[100px]"
      >
        <h2 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[66px] 2xl:text-[96px] font-extrabold text-[#0F1318]">
          The $CHECK Token
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-[#7A7A7A] mt-4 sm:mt-12">
          We have a community token ‘coz “why not?” haha. Our platform is
          designed to be tax-free, trustless, and immutable. No team tokens, and
          it's a fair launch baby!
        </p>
        <div className="mt-14 sm:mt-16 lg:mt-[100px] relative">
          <h2 className="hidden xs:block font-normal text-[80px] xs:text-[100px] xs:leading-[100px] sm:text-[150px] lg:text-[200px] xl:text-[250px] 2xl:text-[300px] sm:leading-[150px] lg:leading-[200px] xl:leading-[250px] 2xl:leading-[300px] font-cairo text-[#3D81AC1F] text-center">
            $CHECK
          </h2>
          <div className="font-inter font-semibold text-xs md:text-sm lg:text-base text-[#291F27] space-y-2 md:space-y-3 xl:space-y-5 xs:absolute top-0 left-[20%] xl:left-[250px]">
            <p className="">
              TOKEN SYMBOL: <span className="font-extrabold">$CHECK</span>
            </p>
            <p className="">
              CONTRACT ADDRESS: <span className="font-extrabold">TBA</span>
            </p>
            <p className="">
              MAX SUPPLY:{' '}
              <span className="font-extrabold">69,420,000,000,000</span>
            </p>
            <p className="">
              DISTRIBUTION:{' '}
              <span className="font-extrabold">88.9% DEX LIQUIDITY</span>
            </p>
            <p className="font-extrabold ml-[121px]">
              6.9% SEX (Several Exchange) LISTING
            </p>
            <p className="font-extrabold ml-[121px]">
            4.2% $CHECK pool (AIRDROPS AND PROMOTIONS)
            </p>
            <p className="font-extrabold">
              No Taxes, No team tokens, Fair Launch.
            </p>
            <p className="font-extrabold">
            88.9% of $CHECK supply used to provide liquidity. LP tokens were burnt and contract renounced.
            </p>
          </div>
        </div>
      </section>
      <section id="roadmap" className="relative xs:mt-[170px]">
        <div className="bg-[#3D81AC] w-full h-full hidden md:block absolute top-0 z-10 clip2"></div>
        <div className="bg-[#E8F0F5] px-[8%] 2xl:px-[13%] clip pb-20 md:pb-[200px] relative z-50 mt-[70px]">
          <h2 className="text-center md:text-left text-[#194E6A] font-extrabold text-4xl lg:text-[56px] xl:text-[76px] 2xl:text-[96px] pt-10 md:pt-[130px] xl:pt-[200px] 2xl:pt-[287px]">
            Roadmap
          </h2>
          <p className="text-base md:text-lg xl:text-xl font-semibold mt-[33px] lg:mt-[43px] xl:mt-[73px] text-[#194E6A]">
            The roadmap we present for $CHECK is a playful and humorous outline
            of our vision. Please note that it is not intended to be taken as a
            binding contract, and we cannot make any guarantees, promises, or
            commitments regarding its execution or timeline. In fact, our
            roadmap is a puzzle with indicative start-points and possible
            end-points; the inbetweens are deciphered and decided by our
            community. Here is an example of what might be:
          </p>
          <div className="mt-[50px] lg:mt-[70px] sm:flex gap-3 lg:gap-7 xl:gap-10 2xl:gap-[58px] text-sm md:text-base xl:text-xl text-[#194E6A] font-normal space-y-5">
            <div className="sm:max-w-[373px]">
              <h6 className="text-base xl:text-2xl font-bold pl-4">Phase 1</h6>
              <div className="py-4 md:py-9 px-5 lg:px-8 bg-[#D9D9D9] mt-1.5">
                <ol className="mt-1 list-decimal">
                  <li className="pl-2">Build social following and community</li>
                  <li className="pl-2">Launch $CHECK token</li>
                  <li className="pl-2">
                    Get $CHECK listed on Coinmarketcap & Coingecko - because
                    every project puts it on a roadmap
                  </li>
                  <li className="pl-2">Get $CHECK trending worldwide</li>
                  <li className="pl-2">
                    Tits, Prick, or Tick ($CHECK) show hosted on Twitter Space
                  </li>
                </ol>
              </div>
            </div>
            <div className="sm:max-w-[373px] sm:mt-[29px]">
              <h6 className="text-base xl:text-2xl font-bold pl-4">Phase 2</h6>
              <div className="py-4 md:py-9 px-5 lg:px-8 bg-[#D9D9D9] mt-1.5">
                <ol className="mt-1 list-decimal">
                  <li className="pl-2">Host Elon Musk on our Twitter Space</li>
                  <li className="pl-2">
                    Save a non-celebrity-fund for Twitter verification
                  </li>
                  <li className="pl-2">
                    {' '}
                    Collaborate with Doge as payment for Twitter verification
                    for commoners
                  </li>
                  <li className="pl-2">
                    Twitter starts accepting $CHECK as payment for verification
                  </li>
                  <li className="pl-2">$CHECK-ed NFT verification badges</li>
                  <li className="pl-2">
                    Listing on Several exchanges (SEX LISTINGS)
                  </li>
                </ol>
              </div>
            </div>
            <div className="sm:max-w-[373px] sm:mt-[60px]">
              <h5 className="text-base xl:text-2xl font-bold pl-4">Phase 3</h5>
              <div className="py-4 md:py-9 px-5 lg:px-8 bg-[#D9D9D9] mt-1.5">
                <ol className="mt-1 list-decimal">
                  <li className="pl-2">
                    Create a "Wall of Shame" for thin-skinned celebrities who
                    can't take a joke
                  </li>
                  <li className="pl-2">
                    Partner with top meme creators for $CHECK-exclusive content
                  </li>
                  <li className="pl-2">
                    Launch $CHECK merchandise line, including t-shirts, mugs,
                    and stickers
                  </li>
                  <li className="pl-2">
                    Host a charity event where celebrities donate to charity in
                    exchange for their blue $CHECKmark
                  </li>
                  <li className="pl-2">
                    Hold a $CHECK meme contest with a grand prize of a verified
                    Twitter account
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#194E6A] mt-10 md:mt-[62px]">
            Remember, this roadmap is just the beginning. We're counting on our
            community to help us decide where to take $CHECK next!
          </p>
        </div>
      </section>
      <section
        id="links"
        className="pt-16 xs:pt-20 lg:pt-[100px] xl:pt-[170px] mx-[8%] 2xl:mx-[13%]"
      >
        <h3 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[66px] 2xl:text-[96px] font-extrabold text-[#616161]">
          find $CHECK on
        </h3>
        <div className="mt-10 sm:mt-14 lg:mt-[100px] 2xl:mt-[159px] flex items-center justify-center flex-wrap gap-7 md:gap-[56px] lg:gap-[86px]">
          <div className="w-[150px] xs:w-[200px] md:w-[250px] lg:w-[300px] h-[50px] xl:w-[380px] xl:h-[90px] 2xl:w-[434px] 2xl:h-[115px]">
            <Image
              src={'/img/coingecko.png'}
              width={434}
              height={115}
              alt="find check on image"
            />
          </div>
          <div className="w-[80px] lg:w-[100px] h-[50px] xl:w-[170px] xl:h-[90px] 2xl:w-[204px] 2xl:h-[115px]">
            <Image
              src={'/img/CoinMarketCap.png'}
              width={204}
              height={115}
              alt="find check on image"
            />
          </div>
          <div className="w-[80px] xs:w-[100px] md:w-[150px] lg:w-[200px] h-[50px] xl:w-[290px] xl:h-[90px] 2xl:w-[367px] 2xl:h-[115px]">
            <Image
              src={'/img/dextools.png'}
              width={367}
              height={115}
              alt="find check on image"
            />
          </div>
          <div className="w-[80px] md:w-[130px] lg:w-[180px] h-[50px] xl:w-[250px] xl:h-[90px] 2xl:w-[338px] 2xl:h-[115px] flex items-center">
            <Image
              src={'/img/uniswap.png'}
              width={338}
              height={80}
              alt="find check on image"
            />
          </div>
          <div className="relative w-[160px] xs:w-[210px] md:w-[260px] lg:w-[310px] h-[50px] xs:h-[60px] md:h-[70px] lg:h-[90px] xl:w-[250px] xl:h-[70px] 2xl:w-[435px] 2xl:h-[115px]">
            <Image
              src={'/img/etherscan1.png'}
              fill
              alt="find check on image"
            />
          </div>
        </div>
      </section>
      <footer
        id="socials"
        className="px-[5%] lg:px-[8%] 2xl:px-[10%] bg-[#E8F0F5] pt-10 md:pt-[53px] xl:pt-[83px] mt-12 md:mt-20 lg:mt-[120px] xl:mt-[180px] 2xl:mt-[224px]"
      >
        <div className="block sm:flex">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="w-[50px] sm:w-[70px] md:w-[90px] lg:w-[120px] xl:w-[150px] 2xl:w-[177px]">
              <Image
                src={'/img/footer_logo.png'}
                width={177}
                height={177}
                alt="logo"
              />
            </div>
            <div className="">
              <h4 className="text-2xl xl:text-[32px] font-extrabold">
                celebcheck.com
              </h4>
              <p className="text-sm xl:text-xl font-semibold text-[#7A7A7A] mt-2 max-w-[185px]">
                $CHECK will make Twitter great again! No kidding!
              </p>
            </div>
          </div>
          <div className="ml-3 lg:ml-[50px] mt-[31px] md:flex items-center justify-center sm:justify-start">
            <p className="text-center md:text-left font-medium text-lg md:text-xl xl:text-3xl 2xl:text-[40px] text-[#8ACFF2] lg:mt-3.5">
              Join us on every step of our journey!
            </p>
            <div className="flex items-center justify-center md:justify-normal gap-1.5 md:gap-3 lg:gap-[35px] xl:gap-[45px] 2xl:gap-[65px] ml-5 lg:ml-12">
              <Link href={'https://t.me/CelebCheckEth'} target="_blank">
                <span className="w-5 md:w-[30px] lg:w-9 xl:w-14 2xl:w-[86px]">
                  <FaTelegram className="text-xl md:text-[30px] lg:text-[36px] xl:text-[56px] 2xl:text-[86px] text-[#8ACFF2] hover:text-[#48aadb] duration-300" />
                </span>
              </Link>
              <Link href={'https://twitter.com/Celebcheck_eth'} target="_blank">
                <span className="w-5 md:w-[30px] lg:w-9 xl:w-14 2xl:w-[86px]">
                  <AiFillTwitterCircle className="text-xl md:text-[30px] lg:text-[36px] xl:text-[56px] 2xl:text-[96px] text-[#8ACFF2] hover:text-[#48aadb] duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#194E6A] mt-7 sm:mt-[43px] xl:mt-[63px] 2xl:mt-[93px] pb-[33px] text-center">
          copyright©2023 celebcheck.com. All rights reserved
        </p>
      </footer>
    </main>
  );
}
