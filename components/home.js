import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GifIMG from '../assets/images/gif.gif'
import BannerIMG from '../assets/images/logo_header.png'
import HandShake from '../assets/images/icons/user.png'
import Sales from '../assets/images/icons/coupon.png'
import DNALogo from '../assets/images/icons/dna.png'
import styles from '../styles/Home.module.css';

const Banner = () => {
  return (
    <div className="dark:bg-black">
      <div className="mt-1">
        <Image
          src={BannerIMG}
          alt="Captain"
          width={780}
          height={200}
          layout="responsive"
        />
      </div>
      <div className="container">
        <div className="contentSection row">
          <div className="col-md-5">
            <div>
              <h4 className="text-3xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
                Explore on chain ⛓ activity within the 3Landers ecosystem. Discover trends and popular items like DNA types, Biomes, Ship Building and much more.
              </h4>
              <br></br>
              <br></br>
              <br></br>
              <div className="mt-4 font-semibold w-full ">
                <span className="font-deepShadow uppercase dark:text-white">
                  <a
                    href="https://3landersnft.com"
                    className="text-[12px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </span>
                <span>
                  <a className="text-3xl dark:text-white"> | </a>
                </span>
                <span className="font-deepShadow uppercase dark:text-white">
                  <a
                    href="https://twitter.com/3LandersNFT"
                    className="text-[12px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </span>
                <span>
                  <a className="text-3xl dark:text-white"> | </a>
                </span>
                <span className="font-deepShadow uppercase dark:text-white">
                  <a
                    href="http://discord.gg/3Landers"
                    className="text-[12px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </span>
                <span>
                  <a className="text-3xl dark:text-white"> | </a>
                </span>
                <span className="font-deepShadow uppercase dark:text-white">
                  <a
                    href="https://opensea.io/collection/3landers"
                    className="text-[12px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Opensea
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-center w-[700px] rounded-lg drop-shadow-2xl py-2 mt-4 bg-white">
            <Image
              src={GifIMG}
              alt="Captain"
              width={600}
              height={325}
              layout="responsive"
            />
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="container mb-5 px-5">
          <div className="row justify-content-center">
            <div className="row mt-3 text-center text-xl">
              <div className="col-md-4 py-2">
                <div className="w-[80%]  py-2 hover:animate-pulse  ml-[10%] text-center rounded-lg shadow-lg  bg-white">
                  {' '}
                  <Link href="/holders" passHref>
                    <Image
                      src={HandShake}
                      alt="icon"
                      className="cursor-pointer"
                      width={90}
                      height={90}
                    />
                  </Link>
                  <div>
                    <h5 className="font-bold mt-4 text-xl">Holders</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="w-[80%] my-2 py-2 hover:animate-pulse ml-[10%] text-center rounded-lg shadow-lg  bg-white">
                  <Link href="/sales" passHref>
                    <Image
                      src={Sales}
                      className="ms cursor-pointer"
                      alt="icon"
                      width={90}
                      height={90}
                    />
                  </Link>
                  <div>
                    <h5 className="font-bold mt-4">Sales</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-[80%] my-2 py-2 hover:animate-pulse ml-[10%] text-center rounded-lg shadow-lg  bg-white">
                  <Link href="/traits" passHref>
                    <Image
                      src={DNALogo}
                      className="cursor-pointer"
                      alt="icon"
                      width={90}
                      height={90}
                    />
                  </Link>
                  <div>
                    <h5 className="font-bold mt-4">Traits</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="">
          <h2 className="text-center text-xl  dark:text-white  py-3 mb-3 uppercase tracking-tight space-x-1 font-deepShadow">
            3Landers-Recent Sales Updated
          </h2>
          <br></br>
          <div className="embbedStyle shadow-2xl  text-center activeHolders">
            <iframe
              src="https://dune.com/embeds/1111586/1899422/c9205ec4-08ff-413f-8747-4e67c3d8f868"
              width={1500}
              height={500}
              title="Popular 3Landers"
            ></iframe>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default Banner