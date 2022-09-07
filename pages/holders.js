import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GifIMG from '../assets/images/campfire.gif'
import styles from '../styles/Home.module.css'
import Dreamers from '../assets/images/3landers_team.png'

const Holders = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="col-md-10 mx-auto contentSection row">
        <div className="col-md-5 mt-4 mx-auto">
          <div>
            <p className="text-3xl py-3 dark:text-white font-deepShadow uppercase">
              Holders 🤝
            </p>
            <br></br>
            <h4 className="text-xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              Tracking 3landers holders since pre-sale mint date February 19,
              2022. Explore unique holders, top holders, new holders and other
              holder related stats.
            </h4>
          </div>
        </div>
        <div className="col-md-7 mt-4 text-center rounded-lg drop-shadow-2xl py-3 bg-white">
          <Image
            src={GifIMG}
            alt="Captain"
            width={450}
            height={250}
            layout="responsive"
            className="shadow-md rounded-md "
          />
        </div>
        <div className="col-md text-right">
        <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://tenor.com/view/3lander-3land-lazyoyster-campfire-nft-gif-25242774"s
                     className="text-[8px]"> Source:</a>
        </span>
      </div>
        <br></br>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4  shadow-2xl  text-center embbedStyle">
            <div className="rounded-md bg-white">
              <iframe
                src="https://dune.com/embeds/446387/848432/86dbaca6-296c-4414-994c-cdc8ef384de2"
                height="300"
                width="475"
                title="Unique Holders"
              />
            </div>
          </div>
          <div className="col-md-4 shadow-2xl  bg-white embbedStyle text-center">
            <iframe
              src="https://dune.com/embeds/446387/848433/5b69b906-ed78-46c4-9956-dd8f5ffe4d0f"
              height="300"
              width="475"
              className="bg-white"
              title="Unique Holders Ratio"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  dark:bg-white embbedStyle text-center">
            <div className="bg-white">
              {' '}
              <iframe
                src="https://dune.com/embeds/453683/861992/92545284-9c40-4f62-b9ee-4d898b2846fa"
                height="300"
                width="475"
                title="Most Owned"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="mt-4 shadow-2xl ">
        <Image
          src={Dreamers}
          alt="Captain"
          width={780}
          height={250}
          layout="responsive"
        />
      </div>
      <br></br>
      <div className="col-md-5">
        <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://nftevening.com/3landers-biomes-everything-you-should-know-about-these-nft-lands/"s
                     className="text-[8px]"> Source:</a>
        </span>
      </div>
        <br></br>
        <br></br>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/454235/863041/de8f3c43-644c-497c-96f8-2ad4db0ec20b"
            width="1500"
            height="350"
            title="Daily Change"
          ></iframe>
        </div>
      </div>

      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/454235/863043/83991e01-176f-484d-a035-3ff572aad737"
            width="1500"
            height="400"
            title="Active Holders"
          ></iframe>
        </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/445132/845939/30baeb87-fe07-40c1-9a94-c7583686b883"
              height="300"
              width="725"
              title="Top 10 Holders"
            ></iframe>
          </div>
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/445132/845941/b3bb61a6-3e54-4436-b67d-adf82da71ac9"
              height="300"
              width="725"
              title="Top 10 Holders PiChart"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1111175/1898633/0e53df16-adbe-470f-9e55-e71fc0c54945"
            width="1500"
            height="350"
            title="Active Holders"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Holders
