import React, { useState } from "react";
import Pfp from "./algumacoisa"
import Contato from "./contato"

function ProfileCard() {
    return (
        <div
            style={{ width: "500px" }}
            className="max-w-md rounded overflow-hidden shadow-lg bg-white text-center p-6 m-auto mt-20"
        >

            <div className="mt-5">
            
            </div>

                <Pfp/>

                <h1 className="text-2xl font-black">Pedro Afonso</h1>


               <h2 className="whitespace-pre-line pt-5">Olá, eu me chamo Pedro Afonso, eu tenho 18 anos e sou
               dev, atualmente estou sem emprego, então me chame caso necessite de algo!</h2>


             <div id="dropdown" className="flex flex-col  space-y-5 box-decoration-slice border-4 border-double border-black mb-5">
                   <ul className="py-2 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownHoverButton">
                      <li>
                          <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Python</a>
                      </li>
                      <li>
                          <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Php</a>
                      </li>
                      <li>
                           <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Css</a>
                      </li>
                      <li>
                           <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Html</a>
                      </li>
                       <li>
                           <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Javascript</a>
                      </li>
                       <li>
                           <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Next.Js</a>
                      </li>
                      </ul>
            </div>

        


            <div className="mt-5">
            
            </div>

            <h1 className="text-xl font-black">Contato</h1>

                 <Contato/>


       
        </div>
    );
}

export default ProfileCard;
