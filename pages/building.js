import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Ships from '../assets/images/3l_ship.jpeg'

const building = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="col-md-10 mx-auto contentSection row">
        <div className="col-md-5 mt-4 mx-auto">
          <div>
      <p className="text-3xl py-3 dark:text-white font-deepShadow uppercase">
        Ship Building 🛠
      </p>
      <br></br>
      <p className="text-xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
        Collect blueprints and materials to build your ship. 3landers will need the required materials listed on the blueprints. Track <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://opensea.io/collection/3land-inventory"s
                     className="text-[12px]"> Materials</a>
            </span> burned, ships built and total ship captains below. 
      </p>
          </div>
        </div>
        <div className="col-md-7 mt-4 text-center rounded-lg drop-shadow-2xl py-3 bg-white">
          <Image
            src={Ships}
            alt="Ships"
            width={350}
            height={200}
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
      </div>
      <br></br>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4  shadow-2xl  text-center embbedStyle">
            <div className="rounded-md bg-white">
              <iframe
                src="https://dune.com/embeds/1229817/2107272/c13a730f-03df-4d48-a12a-22b3b78002ad"
                height="300"
                width="475"
                title="Total Captains"
              />
            </div>
          </div>
          <div className="col-md-4 shadow-2xl  bg-white embbedStyle text-center">
            <iframe
              src="https://dune.com/embeds/1225467/2101126/e38da560-676b-40c5-99e7-7e7a87c46e58"
              height="300"
              width="475"
              className="bg-white"
              title="Materials Burned"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  dark:bg-white embbedStyle text-center">
            <div className="bg-white">
              {' '}
              <iframe
                src="https://dune.com/embeds/1229708/2107095/5c74a2dd-2d19-49e5-ba12-fe3de3f4c0ef"
                height="300"
                width="475"
                title="Ships Built"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="text-2xl dark:text-white font-semibold text-center box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
        3Landers are airdropped a set of blueprints along with a variety of materials, that are to be used for ship building. 3lander holders are able to burn their materials and blueprints to build thier ship on-chain.
        </h4>
        <br></br>
        <br></br>
        <br></br>
      <br></br>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1225467/2100608/0beced34-b94b-412d-9ab3-16139f53c9df"
            width="1475"
            height="450"
            title="Materials Burned Bar"
          ></iframe>
        </div>
      </div>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1230025/2107612/b1f20ed0-a443-4359-aee3-effa8798f707"
            width="1475"
            height="350"
            title="3L Ship Holders"
          ></iframe>
        </div>
        
      </div>
    </div>
    
    )
  }

export default building 

