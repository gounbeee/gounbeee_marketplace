/* eslint-disable @next/next/no-img-element */

import { Disclosure } from '@headlessui/react';
//import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAccount, useNetwork } from '@hooks/web3';
import ActiveLink from '../link';
import Walletbar from './Walletbar';

const navigation = [
  { name: 'Gounbeee\'s Marketplace', href: '/', current: true },


  //{ name: 'Create', href: '/nft/create', current: false }



]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}



export default function Navbar() {


  const { account } = useAccount();
  const { network } = useNetwork();



  // console.log(account)
  // console.log(network)


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 md:px-6 ">
            
            <div className="flex">


              <div className="absolute right-5 top-5 flex items-center md:hidden">

                {/* Mobile menu butt*/} 
                <a href='/' className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>


                </a>


              </div>


              {/* DISPLAYING WALLET INFORMATION */}
              <div className="flex my-5">

                {/* NETWORK NAME LIKE "Ganache", "Ethereum Mainnet" etc */}
                <div className="">

                  <span className="rounded-full inline-flex items-center px-6 py-2 font-medium font-bold bg-blue-300 text-red-500">
                    
                    { network.isLoading ?                   // IF IT IS LOADING
                      "Loading..." :
                        
                        // WHEN IT IS LOADED
                        account.isInstalled ?            
                        "Connected to " + network.data :     // PRINTING NETWORK NAME
                        "First Install Your Web3 Wallet"                       // OR DISPLAY MESSAGE TO INSTALL WALLET
                    }

                  </span>

                </div>

                {/* DISPLAYING CONNECTED WALLET */}
                {/* THIS IS USER BUTTON */}
                <Walletbar
                  isInstalled={account.isInstalled}
                  isLoading={account.isLoading}
                  connect={account.connect}
                  account={account.data}
                />

              </div>



              {/* LOGO AND MENU */}
              <div className="absolute right-10 flex my-5 items-center">

                {/* MENU */}
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4">

                    {/* MENUBAR (Marketplace) */}
                    {navigation.map((item) => (

                      <ActiveLink
                        key={item.name}
                        href={item.href}
                        activeClass="bg-gray-900 text-red-300"
                      >
                        <a
                          className="text-gray-300 font-bold bg-red-800 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>

                      </ActiveLink>

                    ))}
                  </div>
                </div>


                {/* LOGO */}
                <div className="ml-10">
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src="/images/LOGO.png"
                    alt="Workflow"
                  />
                </div>


              </div>


            </div>
          </div>

        </>
      )}
    </Disclosure>
  )
}
