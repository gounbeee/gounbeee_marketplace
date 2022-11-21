

import '../styles/globals.css'
import type { AppProps }      from 'next/app'
import { Web3Provider }       from '@providers'

import { ToastContainer }     from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// < .d.ts FILES >
// :: TypeScript has two main kinds of files. 
//    .ts files are implementation files that contain types and executable code. 
//    These are the files that produce .js outputs, and are where you’d normally 
//    write your code.
//
//
//    .d.ts files are declaration files that contain only type information. These 
//                    ~~~~~~~~~~~~~~~~~
//    files don’t produce .js outputs; they are only used for typechecking. We’ll 
//          ~~~~~~~~~~~~~~~~~~~~~~~~~  
//    learn more about how to write our own declaration files later.


// ------------------------------------
// < Next JS TYPESCRIPT >
// TYPES ARE DEFINED LIKE BELOWS !!!!
//
//
// < AppProps TYPE >
// 
// DEFINED AT _app.d.ts (IN node_modules/next/dist/pages/ FOLDER !)
//
// export declare type AppProps<P = {}> = AppPropsType<Router, P>;
//                             ~~~~~~~~                        ~           
//                                |                            |
//                             Object P                        2nd TEMPLATE PARAMETER OF AppPropsType TYPE
//                                                                        |
//                                                                        |
//                                                                        |
//                                                                        V
//                                  Router                             ~~~~~~
// export declare type AppPropsType<R extends NextRouter = NextRouter, P = {}> = AppInitialProps & {
//     Component: NextComponentType<NextPageContext, any, P>;              |                     ^
//     router: R;                                                          |                     |
//     __N_SSG?: boolean;                                                  |-3. WITH THIS OBJECT |
//     __N_SSP?: boolean;                                                  |                     ^
//     __N_RSC?: boolean;                                                  |                     |-2. EXAPANDING HERE !
// };                                                                      |                     |
//                                                                                               ^
//                                                                                               |
//                                                                                               |
//                                                                                               ^
// export declare type AppInitialProps = {                    **** 1. BEGINNING WITH any (MORE BROADER TYPE) TYPE ??
//     pageProps: any;
// };
//
//
//




// ---------------------
// < declare KEYWORD >
//
// The declare keyword in TypeScript is used for the Ambient declaration of variables 
// or for methods. Ambient Declarations is like an import keyword. Which tells the 
// compiler that the source exists in another file.
//
// Let suppose we have third-party JavaScript code which has a variable that contains 
// the value of some variable but we don’t not the value but with the help of declaring 
// keyword we can use the value of the variable in our code
//
//
// Third-party Code:
// 
// var pi_1 = 3.1415926535 ;
// var pi_2 = 3.14159265358979323846 ;
// var pi_3 = 3.141592653589793238462643383279;
//
//
// TypeScript Code:                    **  WE DO NOT NEED TO WRITE SAME CODE AGAIN !!!! (BY DECLARING THIS IS FROM SOMEWHERE OUTSIDE !)
//
// declare var pi_1 : any ;
// ~~~~~~~~~~~~~~~~
// console.log("Value of pi is :",pi_1)
//


function MyApp({ Component, pageProps }: AppProps) {
  
  // console.log("MyApp EXECUTED !")
  // console.log(Component)                // -->  Component "Home" IN index.tsx 
  // console.log(pageProps)                // -->  props PARAMETERS PASSING TO Home COMPONENT

  // pageProps = { a: 1, b: 2, c: 3 }


  // debugger


  return (
    <>
      <ToastContainer />
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </>
  )


}

export default MyApp
