/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import { BaseLayout } from '@ui'

import { Nft } from '@_types/nft';
import { useOwnedNfts } from '@hooks/web3';
import { useEffect, useState } from 'react';



const tabs = [

  { name: 'All Categories', href: '#', current: true },


]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}




const Profile: NextPage = () => {



  const { nfts }  = useOwnedNfts();

  const [activeNft, setActiveNft] = useState<Nft>();




  useEffect(() => {
    if (nfts.data && nfts.data.length > 0) {
      setActiveNft(nfts.data[0]);
    }

    return () => setActiveNft(undefined)
  }, [nfts.data])



  return (
    <BaseLayout>

      <div className="h-full flex">

        <div className="flex-1 flex flex-col overflow-hidden">

          <div className="flex-1 flex items-stretch overflow-hidden">
            
            <main className="flex-1 overflow-y-auto">
              
              <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

                <div className="w-3/5">

                  <h1 className="text-2xl font-bold text-gray-900 my-5">Hi visitor!</h1>
                  <p>
                    This homepage is a decentralized marketplace, so you do not need to be logged in for any server. Only you need to do is connecting to 'Your' crypto-wallet like Metamask, then you can purchase directly!
</p>
                  <p>After you purchased NFT, you can find your ownership here, and Re-list it again.
                  </p>

                </div>


                <div className="flex mt-20">

                  <h1 className="flex-1 text-2xl font-bold text-gray-900">Your Ownerships</h1>

                </div>



                <div className="mt-3 sm:mt-2">


                  <div className="hidden sm:block">
                    <div className="flex items-center border-b border-gray-200">
                      <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <a
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            className={classNames(
                              tab.current
                                ? 'border-red-500 text-red-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                            )}
                          >
                            {tab.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>


                {/* DISPLAYING USER'S NFTs */}

                <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                  <ul
                    role="list"
                    className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {(nfts.data as Nft[]).map((nft) => (
                      <li
                        key={nft.tokenId}
                        onClick={() => setActiveNft(nft)}
                        className="relative">

                        {/* USER'S NFT ITEM */}
                        <div
                          className={classNames(
                            nft.tokenId === activeNft?.tokenId 
                              ? 'ring-2 ring-offset-2 ring-red-500'
                              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-500',
                            'group block w-full aspect-w-10 aspect-h-7 bg-gray-100 overflow-hidden'
                          )}
                        >

                          {/*  */}
                          <img
                            src={nft.meta.image}
                            alt=""
                            className={classNames(
                              nft.tokenId === activeNft?.tokenId  ? '' : 'group-hover:opacity-75',
                              'object-cover pointer-events-none'
                            )}
                          />

                          <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {nft.meta.name}</span>
                          </button>

                        </div>

                        {/* DISPLAYING NAME */}
                        <p className="bg-red-900 p-2 mt-4 block text-sm font-bold text-white truncate pointer-events-none">
                          {nft.meta.name}
                        </p>

                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>


            { activeNft &&
          
            // {/* DETAIL WINDOW */}
            <aside className="hidden w-128 bg-gray-300 p-8 drop-shadow-md border-l border-gray-400 overflow-y-auto lg:block">
            
            

              <div className="pb-16 space-y-6">
                
                <div>
                  <div className="block w-full aspect-w-10 aspect-h-7 drop-shadow-md overflow-hidden">
                    <img src={activeNft.meta.image} alt="" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        <span className="sr-only">Details for </span>
                        {activeNft.meta.name}
                      </h2>
                      <p className="text-sm font-medium text-gray-500">{activeNft.meta.description}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  
                  <h3 className="font-medium text-gray-900">Information</h3>
                  
                  <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {activeNft.meta.attributes.map((attr) => (
                      <div key={attr.trait_type} className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">{attr.trait_type}: </dt>
                        <dd className="text-gray-900 text-right">{attr.value}</dd>
                      </div>
                    ))}
                  </dl>

                </div>

                <div className="flex">
                  <div className="flex mt-12 w-full">
                    <button
                      type="button"
                      className="flex-1 bg-red-600 py-4 px-4 border border-transparent shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Download Image
                    </button>
                    <button
                      disabled={activeNft.isListed}
                      onClick={() => {
                        nfts.listNft(
                          activeNft.tokenId,
                          activeNft.price
                        )
                      }}
                      type="button"
                      className="disabled:text-gray-400 disabled:cursor-not-allowed flex-1 ml-3 bg-white py-4 px-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {activeNft.isListed ? "Already listed": "List Nft"}
                    </button>
                  </div>
                </div>

              </div>


              

            
            </aside>

            }

          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Profile
