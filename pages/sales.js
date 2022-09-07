import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GifIMG from '../assets/images/3landers_vortex.gif'
import bioms from '../assets/images/biomes_forest.png'
import styles from '../styles/Home.module.css'
const Sales = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="col-md-10 mx-auto contentSection row">
        <div className="col-md-5  mt-4 mx-auto">
          <div>
            <p className="text-3xl py-3 dark:text-white font-deepShadow uppercase">
              Sales 🏷
            </p>
            <h4 className="text-xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              3landers secondary sales from NFT Marketplaces broken down by
              Floor Price, Top Sales, Daily Sales, 24hr sales, Min Sales, Max
              Sales, etc. 
              <br></br>
              <br></br>
              View 3landers sales metrics from Opensea, LooksRare,
              and X2Y2.
              </h4>
          </div>
        </div>
        <div className="col-md-7 text-center w-[450px] rounded-lg drop-shadow-2xl py-2 mt-4 bg-white">
          <Image src={GifIMG} alt="Captain" width={700} height={650} />
        </div>
        <div className="col-md-12 text-right">
        <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://tenor.com/view/3landers-3lander-lander-3land-land-gif-24939955"s
                     className="text-[8px]"> Source:</a>
        </span>
      </div>
      </div>
      <div className="container text-center shadow-2xl  ">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/445102/845889/3e56f657-0ebf-4c07-9f3b-920375da2ec7"
              height="300"
              width="450"
              title="Floor Price"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/445609/846832/51c71940-dfc7-4001-8167-7ffd5c39c9aa"
              height="300"
              width="450"
              title="Sales Last 24 Hours"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/445609/1924604/9032cbcf-b450-4c11-9bea-126db22257b1"
              height="300"
              width="450"
              title="OpenSea 7 Day Sales"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1141636/1949679/1372af4e-01e8-48cb-a73e-d0cf30b3ebb3"
            width="1475"
            height="300"
            title="OpenSea Sales Table"
          ></iframe>
        </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/448197/851593/822271c4-d209-4f0b-a122-865f4074bdc3"
              height="300"
              width="720"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/448197/851596/80aa918d-6d33-483f-b12e-f860b38f178c"
              height="300"
              width="720"
              title="Max Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <div>
        <br></br>
        <br></br>
          <p className="text-2xl my-8 dark:text-white text-center uppercase font-deepShadow">
            ✨ View all-time 3landers Sales ✨
          </p>
          <br></br>
        <br></br>
        </div>

        <div className="embbedStyle shadow-2xl  text-center activeHolders mb-5">
          <iframe
            src="https://dune.com/embeds/1111586/1899667/75d95164-15e0-4847-90c8-a07435c36b58"
            width="1475"
            height="315"
            title="OpenSea Sales Table"
          ></iframe>
        </div>
        <br></br>
        <br></br>

        <p className="text-2xl my-8 dark:text-white text-center uppercase font-deepShadow">
          🏔 Biomes 🏔 {' '}
        </p>
        <br></br>
        <h4 className="text-2xl dark:text-white font-semibold text-center box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
        Biomes are adventure NFTs in the 3landers ecosystem. 3landers are giving an adventure bag which they can burn for one biome. Each biome is filled with beauty, and rich in natural resources. The materials found in these unique pockets of 3Land are used for many things, including the construction of ships.
        </h4>
        <br></br>

        <div className="container text-center shadow-2xl  ">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/1105549/2061987/e54d9723-d2a6-491f-8911-26918a3fd9dd"
              height="300"
              width="450"
              title="Avg Sale Biome"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1105549/2061985/69c0fd18-23c0-4e2a-8188-3194376c1a79"
              height="300"
              width="450"
              title="Highest Sale"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1105549/2062010/14b9a62a-d232-4cc9-8887-7755f780eba1"
              height="300"
              width="450"
              title="Total Volume Biome"
            ></iframe>
          </div>
        </div>
      </div>

        <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1205858/2064357/f0249303-55cc-406e-b15e-6b524e6fbd12"
              height="350"
              width="720"
              title="Recent Sales"
            ></iframe>
          </div>
          <div className="col-md-6 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1105601/2061965/bfcffe35-fb84-4e9d-a7d3-f2e496048324"
              height="350"
              width="720"
              title="Sales Amount"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1205858/2064356/bbc2b4cb-5af2-41cf-9266-13fe6494fc0f"
            width="1475"
            height="350"
            title="Biomes Sales Table"
          ></iframe>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Sales
