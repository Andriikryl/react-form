export default function Main() {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2 ">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 ">Let get started</h1>
          <p className="text-lg">jojo is stile alive</p>
          <div className="mt-6">
            <div className="pb-2">
              <label className="block text-sm pb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-green-600 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="enter your name"
              ></input>
            </div>

            <div className="pb-2">
              <label className="block text-sm pb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-green-600 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="enter your email"
              ></input>
            </div>
          </div>
        </div>
        <div></div>
      </form>
    </main>
  );
}
