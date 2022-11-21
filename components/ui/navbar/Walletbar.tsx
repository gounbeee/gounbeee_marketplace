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


        <div className="p-2 ml-5">

          <Menu.Button className="px-5">
            {() => (

              <button
                disabled={true}
                className="disabled:text-red-300 font-bold ">
                {/* YOUR ACCOUNT TOKEN */}
                {`Your ID :: 0x${account[2]}${account[3]}${account[4]}....${account.slice(-4)}`}
              </button>


            )}
          </Menu.Button>


          <Menu.Button className="pl-5">
            {() => (

              <Link href="/profile">
                <a
                  className={classNames(
                    
                    'block text-gray-100 font-bold')}      // AND, ADD THESE
                >
                  Dashboard
                </a>
              </Link>


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
