'use client';

export default function Home() {
  return (
    <>
      <div className="container my-24 px-6 mx-auto"><section className="mb-32 text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <p className="font-bold mb-2">I'm a novice in tech world &#128515;.</p>
            <img src="/porfolio/Subject.png" width="230" height="230" style={{ float: "left" }} alt="picture-about-me" />
            <p className="text-gray-500 mb-6 text-justify">
              I'm excited to be a part of the tech industry as a newbie!
              Java is my first love, and I'm thrilled by its versatility and power.
              Currently, I'm exploring TypeScript, and I can't wait to see where this journey takes me.
              It's been a wild ride, but I'm learning so much.
              Although IT isn't my first major, I know it's going to be my lifelong companion.
              I can't help but feel excited about the ever-changing and evolving world of technology.
              As well as being stoked to be a part of it and can't wait to see what the future holds for me.
            </p>
            <p className="font-bold mb-2">How many languages can I speak?</p>
            <p className="text-gray-500 mb-6">After lots of efford I have N1 JLPT, 715 TOEIC, greeting Chinese, native Vietnamese.
              And if you ask me how about computer languages, I can "speak" at least 3 and currently working to increase that stack🤖 </p>
            <p className="font-bold mb-2">My hobbies?</p>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 my-5 ">

              <figure className="max-w-lg">
                <img className="rounded-2xl h-72 w-full object-cover" src="/porfolio/bouldering.PNG" alt="bouldering-me" />
                <figcaption className="mt-2 text-sm text-center">I go to Bouldering🧗‍♀️ couples of time per week</figcaption>
              </figure>

              <figure className="max-w-lg">
                <img className="rounded-2xl  h-72 w-full object-cover" src="/porfolio/snowboarding.JPG" alt="snowboarding-me" />
                <figcaption className="mt-2 text-sm text-center">In Snowboarding🏂 season, I go around 2-3 times</figcaption>
              </figure>
            </div>
            <p className="font-bold mb-2">How long I live in Japan?</p>
            <p className="text-gray-500 mb-6">This year will be my fifth year &#128510;</p>
            <p className="font-bold mb-2">What is my favorite food?</p>
            <p className="text-gray-500">Anything I can eat, I love food&#128516;🍔🥘, especially ebi-sushi🍣🤤.</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
            <form action="mailto:mrtrados@gmail.com" method="post" >
              <div className="form-group mb-6">
                <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address" />
              </div>
              <div className="form-group mb-6">
                <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows={3} placeholder="Message"></textarea>
              </div>
              <div className="form-group form-check text-center mb-6">
              </div>
              <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Contact me here</button>
            </form>
          </div>
        </div>
      </section>
      </div>
      <div className="container mt-40 mx-auto px-4">
      </div>
    </>
  )
}
