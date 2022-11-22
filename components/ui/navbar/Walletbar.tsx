/* eslint-disable @next/next/no-img-element */

import { Menu } from "@headlessui/react";
import Link from "next/link";
import { FunctionComponent } from "react";

type WalletbarProps = {
  isLoading: boolean;
  isInstalled: boolean;
  account: string | undefined;
  connect: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Walletbar: FunctionComponent<WalletbarProps> = ({
  isInstalled,
  isLoading,
  connect,
  account
}) => {


  // WHILE LOADING ...
  if (isLoading) {


    return (
      <div>
        <button
          onClick={() => {}}
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Loading ...
        </button>
      </div>
    )
  }


  // IF THERE IS AN ACCOUNT
  if (account) {

    //console.log(account)

    return (

      <Menu as="div" className="flex">


        <div className="p-2 ml-2">

          <Menu.Button disabled={true} className="px-5">
            {() => (

              <a href="/profile"
                className="text-red-300 font-bold flex ">
                {/* YOUR ACCOUNT TOKEN */}
                {`ID :: 0x${account[2]}${account[3]}${account[4]}....${account.slice(-4)}`}
              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-5 w-6 h-6">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>

              </a>
            )}

          </Menu.Button>

        </div>

      </Menu>
    )
  }


  if (isInstalled) {


    return (
      <div>
        <button
          onClick={() => {
            connect()
          }}
          type="button"
          className="inline-flex items-center px-3 py-2 border-0 border-transparent font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect Wallet
        </button>
      </div>
    )


  } else {


    return (

      <div>
        <button
          onClick={() => {
            window.open ('https://metamask.io', '_ blank');
          }}
          type="button"
          className="inline-flex items-center ml-5 px-3 py-2 border-0 border-transparent font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          There is no wallet found
        </button>
      </div>

    )


  }
}

export default Walletbar;
