/* eslint-disable @next/next/no-img-element */

import { FunctionComponent } from "react";
import { NftMeta, Nft } from "../../../../types/nft";

type NftItemProps = {
  item: Nft;
  buyNft: (token: number, value: number) => Promise<void>;
}

function shortifyAddress(address: string) {
  return `0x****${address.slice(-4)}`
}




const NftItem: FunctionComponent<NftItemProps> = ({item, buyNft}) => {

  // console.log(item)
  // console.log(buyNft)


  return (
    <>
      <div className="flex-shrink-0">
        <img
          className={`h-full w-full object-cover`}
          src={item.meta.image}
          alt="New NFT"
        />
      </div>
      <div className="flex-1 text-gray-100 bg-gray-800 p-6 flex flex-col justify-between">
        <div className="flex-1">

          <div className="flex justify-between items-center">

            <div className="flex items-center mt-2">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="/images/default_avatar.png"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-200 group-hover:text-gray-900">Creator</p>
                <p className="text-xs font-medium text-gray-200 group-hover:text-gray-700">{shortifyAddress(item.creator)}</p>
              </div>

            </div>
            
            {/* NAME OF COLLECTIBLE */}
            <p className="text-sm font-medium text-gray-200">
              Memories of Gounbeee
            </p>

          </div>
          <div className="block mt-6">
            <p className="text-xl font-semibold text-gray-100">{item.meta.name}</p>
            <p className="mt-3 mb-3 text-base text-gray-200">{item.meta.description}</p>
          </div>
        </div>

        <div className="overflow-hidden mt-4 mb-4">
          <dl className="-mx-4 -mt-4 flex flex-wrap">
            <div className="flex flex-col px-4 pt-4">
              <dt className="order-2 text-sm font-medium text-gray-100">Price</dt>
              <dd className="order-1 text-xl font-extrabold text-red-600">
                <div className="flex justify-center items-center">
                  {item.price}
                  <img className="h-6" src="/images/small-eth.webp" alt="ether icon"/>
                </div>
              </dd>
            </div>

            {/* LISTING METADATA */}

            { item.meta.attributes.map(attribute =>
              <div key={attribute.trait_type} className="flex flex-col px-4 pt-4 ml-2">
                <dt className="order-2 text-sm font-medium text-gray-100">
                  {attribute.trait_type}
                </dt>
                <dd className="order-1 text-xl font-extrabold text-gray-300">
                  {attribute.value}
                </dd>
              </div>
            )}

          </dl>
        </div>


        <div className="flex my-3">

          {/* BUY BUTTON */}
          <button
            onClick={() => {
              buyNft(item.tokenId, item.price);
            }}
            type="button"
            className="w-full justify-center disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-red-500"
          >
            Buy
          </button>

          {/* PREVIEW BUTTON */}
          {/*
          <button
            type="button"
            className="ml-3 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:cursor-not-allowed inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Preview
          </button>
          */}

        </div>
      </div>
    </>
  )
}

export default NftItem;
