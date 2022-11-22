


import { useListedNfts } from "@hooks/web3";
import { FunctionComponent } from "react";
import NftItem from "../item";

//import dummyContents from "../../../../content/meta.json";



const NftList: FunctionComponent = () => {


  // **** BE AWARE ABOUT THERE ARE TWO ROUTES !!!!
  


  // if ( process.env.NEXT_PUBLIC_TEST_STATUS === 'Development' && process.env.NEXT_PUBLIC_TEST_STATUS_DESIGN_WITH_PREDEFINED === 'true' ) {

  //   console.log("**** USING PREDEFINED JSON")

  //   console.log(dummyContents)

  //   // WE HAVE JSON FILE IMPORTED FOR PURELY DESIGNING UI
  //   // THEN, WE WILL MIMIC RELA NFT LIST BELOW !
  //   let dummyContentsFinal = {}
  //   dummyContentsFinal.data = []

  //   for( const dumInd in dummyContents) {
  //     dummyContentsFinal = {
  //       data: []
  //     }
  //   }


  //   for( const dumInd in dummyContents) {
  //     dummyContentsFinal.data.push({
  //       meta: dummyContents[dumInd],
  //       creator: "0xDUMMY_VALUE",
  //       price: 999,
  //       tokenID: "dummy_token_id",
        
  //     })
  //   }

  //   console.log(dummyContentsFinal)


  //   // BELOW IS FOR DESIGNING UI **** DEVELOPMENT MODE + DESIGING UI
  //   return (
  //     <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-2 lg:max-w-none">
  //       { dummyContentsFinal.data.map(dumItm =>
  //         <div key={dumItm.meta.image} className="flex flex-col shadow-lg overflow-hidden">
            
  //           <NftItem
  //             isDummy={true}
  //             item={dumItm}
  //             buyNft={undefined}
  //           />

  //         </div>
  //       )}
  //     </div>
  //   )
    



  // } else {
  //   // BELOW IS FOR DEVELOPMENT MODE (GETTING REAL NFTs) + PRODUCTION MODE 


    const { nfts } = useListedNfts();
    //console.log(nfts)


    //console.log(nfts)

    return (
      <div className="mt-12 max-w-lg mx-auto grid gap-16 lg:grid-cols-2 lg:max-w-none">
        { nfts.data?.map(nft =>
          <div key={nft.meta.image} className="flex flex-col shadow-lg overflow-hidden">
            <NftItem
              // isDummy={false}
              item={nft}
              buyNft={nfts.buyNft}
            />
          </div>
        )}
      </div>
    )

  //}



}

export default NftList;
