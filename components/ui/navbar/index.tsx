/* eslint-disable @next/next/no-img-element */

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
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



  console.log(account)
  console.log(network)


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 ">
            
            <div className="flex">


              <div className="absolute flex items-center sm:hidden">
                 {/* Mobile menu butt*/} 
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                
                </Disclosure.Button>
              </div>


              {/* DISPLAYING WALLET INFORMATION */}
              <div className="flex my-5">

                {/* NETWORK NAME LIKE "Ganache", "Ethereum Mainnet" etc */}
                <div className="">

                  <span className="rounded-full inline-flex items-center px-6 py-2 font-medium font-bold bg-blue-200 text-red-700">
                    
                    { network.isLoading ?                   // IF IT IS LOADING
                      "Loading..." :
                        
                        // WHEN IT IS LOADED
                        account.isInstalled ?            
                        "Connected to \' " + network.data + " \'" :     // PRINTING NETWORK NAME
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
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">

                    {/* MENUBAR (Marketplace) */}
                    {navigation.map((item) => (

                      <ActiveLink
                        key={item.name}
                        href={item.href}
                        activeClass="bg-gray-900 text-red-300"
                      >
                        <a
                          className="text-gray-300 font-bold hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm"
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
