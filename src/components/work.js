import React from "react";
import apps from "@/data/apps";

const Work = () => {
  return (
    <section className="py-6">
      <div class="flex justify-center">
        <div class="w-1/2">
          <h1 class="font-bold text-2xl text-center mb-10">
            Aplicaciones <br/> que he realizado:
          </h1>

          <ul className="pt-4">
            {apps.map( app => {
              return (
                <>
                <li class="flex">
                  <img src={app.logo} class="w-20 h-20 rounded-2xl"/>
                  <div class="ml-4"> 
                    <h3 class="font-bold text-md">{app.name}</h3>
                    <p></p> 
                    <div class="flex items-center mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      
                      <a href={app.androidUrl} target="_blank" class="text-gray-400 text-sm">Ver en la playstore</a>
                    </div>
                    <div class="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      
                      <a href={app.iosUrl} target="_blank" class="text-gray-400 text-sm">Ver en la appstore</a>
                    </div>
                  </div>
                </li>
                <hr class="border-gray-200 my-8"></hr>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Work;