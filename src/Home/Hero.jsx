import React from 'react'

const Hero = () => {
  return (
    <>
    
    <main className="bg-[#176183] bg-opacity-10 py-10 px-40 items-center justify-center">
        <section id="hero">
            <div className=" py-20">
                <div className="flex flex-col  items-center justify-between z-20 md:flex-row">
                    <div class="">
                        <div className="pb-6">
                            <h1 className="text-5xl font-medium text-white">"Unleash your thoughts in brief <br/> brilliance – where words meet <br/> impact, and ideas <br/> find expression."</h1>
                        </div>
                        <div className="py-5 space-x-5">
                            <button className="text-white text-xl bg-button-main px-5 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 cursor-pointer">Join</button>
                            <button className="text-logo text-xl border-solid border-2 border-button-main px-5 py-3 rounded-md capitalize font-bold hover:text-white hover:opacity-80 ease-in duration-200 cursor-pointer">Read More</button>
                        </div>
                    </div>

                    <div>
                        <img src="./src/assets/read.svg" className="transform scale-x-[-1]" alt="" width="500" height="300"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    </>
  )
}

export default Hero