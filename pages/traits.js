import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GifIMG from '../assets/images/spiritglow.gif'
import Human from '../assets/images/DNAs/human_3lander.png'
import Ape from '../assets/images/DNAs/Ape_3lander.png'
import Bot3L from '../assets/images/DNAs/3l_bot_3lander.png'
import Sealander from '../assets/images/DNAs/sealander_3lander.png'
import Spirit from '../assets/images/DNAs/spirit_3lander.png'
import Zombie from '../assets/images/DNAs/Zombie.png'
import Golem from '../assets/images/DNAs/golem_3lander.png'
import Alien from '../assets/images/DNAs/alien_3lander.png'
import Bubbly from '../assets/images/DNAs/3lander_bubble.png'
import Cyborg from '../assets/images/DNAs/cyborg_3lander.png'
import Devil from '../assets/images/DNAs/3lander_devil.png'
import Meltie from '../assets/images/DNAs/meltie_3lander.png'
import styles from '../styles/Home.module.css'

const Traits = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="contentSection row col-md-10 mx-auto">
        <div className="col-md-5 mx-auto  mt-4">
          <div>
            <p className="text-3xl py-3 dark:text-white font-deepShadow uppercase">
              DNA 🧬
            </p>
            <br></br>
            <h4 className="text-xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              Breakdown sales by DNA (12) to see the average sale price for
              each DNA. Explore hundreds of unique combinations and popular traits as well as sale history per DNA trait. See the <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://3landersnft.com/lore/dna"s
                     className="text-[12px]"> DNA</a>
            </span> traits here: 
            </h4>
            <br></br>
          </div>
        </div>
        <div className="col-md-7 text-center mt-4 rounded-lg w-[450px] py-2 drop-shadow-2xl  bg-white">
          <Image src={GifIMG} alt="Captain" width={700} height={650} />
        </div>
        <div className="col-md-12 text-right">
        <span className="font-deepShadow uppercase dark:text-white">
                  <a href="https://tenor.com/view/3lander-star-ghost-spirit-gif-25290605"s
                     className="text-[8px]"> Source:</a>
        </span>
      </div>
      </div>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl   text-center bg-white rounded-lg activeHolders">
          <iframe
            src="https://dune.com/embeds/466426/884229/f67583a4-2839-4233-bbbe-a9d6215d07a1"
            width={1500}
            height={300}
            title="Popular 3Landers"
          />
        </div>
      </div>

      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3 shadow-2xl ">
            <div>
              <Image
                src={Human}
                alt="Human"
                width={400}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/467155/885484/448d81e2-9b91-4aed-b207-0752737e3023"
              height="350"
              width="350"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders text-center">
            <iframe
              src="https://dune.com/embeds/467155/885487/78e02f57-4a2e-4167-8c98-5eac0066cb09"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Ape}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/466668/884613/cad642f9-d09a-4a83-9823-0a0270313be5"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/466668/884612/104abea1-f1f3-4dc7-8211-d1ebfe9d4f95"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Bot3L}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/464136/880351/98c301ee-d76c-4cfb-8263-24ffd79816c0"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/464136/880352/fd176e84-a54b-46b1-be13-58cd49c25a71"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Sealander}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/448968/880050/07fc5bb7-79e2-421b-9da5-0335efee83cc"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/448968/853289/8439fd31-92d2-4745-9504-279fcfb43793"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Spirit}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/448768/880245/28f0e81d-0db8-4521-80b9-4860161ff56c"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/448768/852910/7f344ee3-26c0-430e-871a-682e1d024ca7"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Zombie}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/448554/880253/f78a0ec9-a0ba-4ec2-85bc-17a903c30b2e"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/448554/852466/3becf80c-b6e5-4150-8426-9aa73bb1dce0"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Golem}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/445170/880262/3b0a4f2d-a79d-41b0-afdb-14d0fed0e9ae"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/445170/846122/94a61d34-eaaa-4e04-a52e-0a4c0dddfe63"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Cyborg}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/445292/880309/3366d0ac-ffed-48a1-a0a1-0c85c23d47c4"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/445292/846232/8424f5da-c9ef-4cc6-b955-4946a9c91078"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Alien}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/449088/880291/beee050f-9816-4362-a06f-2d1b108c0d33"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/449088/853527/35bf5164-e413-4326-97a6-7c6fb2d10928"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Devil}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/449093/880285/20aaeb5e-25ed-418f-94b0-6ca0ba9fe5d1"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/449093/853536/9f608893-04c5-4217-8971-b81bb6e9df6b"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Meltie}
                alt="Human"
                width={450}
                height={415}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/449094/880267/4fb9c5bb-91dd-4108-bc6f-923b31a2274a"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/449094/853539/48837c37-41eb-4ce8-b657-b661fac531d1"
              height="300"
              width="725"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mt-4 shadow-2xl  embbedStyle">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Image
                src={Bubbly}
                alt="Human"
                width={400}
                height={350}
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            <iframe
              src="https://dune.com/embeds/466563/884395/e03d519a-691f-456c-a612-ddf6d00ceacb"
              height="325"
              width="325"
              title="Min Sale 24hr"
            ></iframe>
          </div>
          <div className="col-md-6 activeHolders">
            <iframe
              src="https://dune.com/embeds/466563/884394/a3c99903-a393-4108-903b-7559871ad0a0"
              height="300"
              width="700"
              title="Min Sale 24hr"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traits
