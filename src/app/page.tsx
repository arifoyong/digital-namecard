import Image from 'next/image'
import AppBar from '@/components/AppBar/AppBar'
export default function Home() {

  return (
    <div className="bg-white container">
        <AppBar />

        {/* Hero */}
        <div className="flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-20">
          <div className="flex flex-col px-6">
            <h2 className="text-4xl font-bold mb-2 text-white">
              You digital business card
            </h2>
            <h3 className="text-2xl mb-8 text-gray-200">
              HiMyaName is a digital business card designed to help you grow your network
            </h3> 
            <div>
            <button
              className="flex bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Try for free
            </button>
            </div>
            
          </div>
          <div className="ml-12 hidden md:block">
            <Image src="/images/hero_image.svg"
              width={200}
              height={200}
              alt="himyname"/>
          </div>
        </div>

        {/* <!-- Features --> */}
        <section className="container mx-auto px-6 md:px-24 p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center flex-wrap mb-20">
            <div className="flex flex-col">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Grow Your Network
              </h4>
              <p className="text-gray-600 mb-8">
                HiMyName is a digital business card that can be shared easily with anyone you meet. Share your contact through a weblink or QR code. Your contact can be saved directly to your phone, without needing any app. 
              </p>
            </div>
            <div className="flex justify-center px-8">
              <Image src="/images/network.svg"
                width={300}
                height={300}
                alt="grow your network"/>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center flex-wrap mb-20">
            <div className="order-last md:order-first flex justify-center px-8">
              <Image src="/images/business.svg"
                width={300}
                height={300}
                alt="make great first impression"/>
            </div>
            <div className="flex flex-col">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Make a Great First Impression
              </h4>
              <p className="text-gray-600 mb-8">
                Network smarter with digital business card. Stand out from the crowd by going digital, you'll sure to make great first impression with your customer.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center flex-wrap mb-20">
            <div className="flex flex-col">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Go green, Go Paperless
              </h4>
              <p className="text-gray-600 mb-8">
                With HiMyName, you're not only embracing the future of digital technology, but you are also contributing toward greener future. Less paper, less trees being cut, less waste  
              </p>
            </div>
            <div className="flex justify-center px-8">
              <Image src="/images/environment.svg"
                width={300}
                height={300}
                alt="go green"/>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Monitoring and tracking my health vitals anywhere I go and on
                    any platform I use has never been easier.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    John Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    As an Athlete, this is the perfect product for me. I wear my
                    Smart Health Monitoring Wristwatch everywhere I go, even in the
                    bathroom since it's waterproof.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Jane Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    I don't regret buying this wearble gadget. One of the best
                    gadgets I own!.
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    James Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!--Call to Action--> */}
        <section >
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-white">
              Limited in Stock
            </h2>
            <h3 className="my-4 text-2xl text-white">
              Get yourself the Smart Health Monitoring Wristwatch!
            </h3>
            <button
              className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Pre Order
            </button>
          </div>
        </section>
        
        {/* <!--Footer--> */}
        <footer className="bg-gray-100">
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >FAQ</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Help</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Support</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Terms</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Facebook</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Linkedin</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left ">
                <h5 className="uppercase mb-6 font-bold">Company</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Official Blog</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >About Us</a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="hover:underline text-gray-600 hover:text-orange-500"
                      >Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div> 
  )
}
