import React from 'react'

const Hero = () => {
  return (
    <>
    
    <main class="bg-[#176183] bg-opacity-10 py-10 px-20">
        <section id="hero">
            <div class="container py-20">
                <div class="flex flex-col  items-center justify-between z-20 md:flex-row">
                    <div class="">
                        <div class="pb-6">
                            <h1 class="text-5xl font-medium text-white">"Unleash your thoughts in brief <br/> brilliance – where words meet <br/> impact, and ideas <br/> find expression."</h1>
                        </div>
                        <div class="py-5 space-x-5">
                            <button class="text-white text-xl bg-button-main px-5 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 cursor-pointer">Join</button>
                            <button class="text-logo text-xl border-solid border-2 border-button-main px-5 py-3 rounded-md capitalize font-bold hover:text-white hover:opacity-80 ease-in duration-200 cursor-pointer">Read More</button>
                        </div>
                    </div>

                    <div>
                        <img src="./src/assets/read.svg" class="transform scale-x-[-1]" alt="" width="500" height="300"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    </>
  )
}

export default Hero