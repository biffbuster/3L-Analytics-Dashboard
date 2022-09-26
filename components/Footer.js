import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import opensea from '../assets/images/icons/opensea1.png'
import navlogo from '../assets/images/Eyes.gif'
import Logo from '../assets/images/3l_logo.png'

const footer = () => {
  return (
    <footer className="p-4 dark:bg-gray-800 bg-gray-100 shadow-md rounded-md md:px-6 md:py-2 ">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-[0.34] w-full  items-center justify-center">
          <div className="w-36 h-36 -my-6 flex items-center ">
            <Image src={Logo} alt="3landers" width={140} height={50} />
          </div>
        </div>
        <div className="flex-[0.33] w-full flex items-center justify-center">
          <p className="font-semibold dark:text-white items-center">
          Made by&nbsp; <span className="my-8 dark:text-white uppercase font-deepShadow">
            <a href="https://twitter.com/biff_buster" className="text-[9px]" target="_blank" rel="noopener noreferrer"> biff_buster </a>  </span> |&nbsp;  Not affiliated with 3Landers.
          </p>
        </div>
        <div className="flex-[0.33]   w-full flex items-center justify-center">
          <ul className="flex dark:text-white flex-wrap items-center  text-md text-gray-500 sm:mb-0 ">
            <li>
              <a href="https://medium.com/@3landers.nft" className="mr-4 hover:underline md:mr-6">
                Medium
              </a>
            </li>
            <li>
              <a href="https://www.barriersworldwide.com/password" className="mr-4 hover:underline md:mr-6 ">
                Merchandise
              </a>
            </li>
            <li>
              <a href="https://looksrare.org/collections/0xb4d06d46A8285F4EC79Fd294F78a881799d8cEd9" className="hover:underline">
                LooksRare
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div>
//         <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
//           <h6 className="text-gray-800 font-semoibold">
//             copyright &copy;2022 3landers analytics. | Created by @biff_buster | Not affiliated with 3landers.</h6>
//         </div>
//       </div>
//     </footer>
//   );
// };

export default footer
