export default function Login() {
  return (
    <>
      <div className="container bg-slate-500">
        <div className="w-full px-4 py-8">
          <div className="mx-auto text-center mb-4">
            <h4 className="font-bold text-large text-slate-900"> LOGIN MENU</h4>
            <p className="font-base text-large text-slate-900 py-4">
              Silahkan Masukkan Username dan Password Anda !!!
            </p>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-4 ">
                <label
                  htmlFor="username"
                  className="text-base font-bold text-primary "
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="john@doe"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="password"
                  className="text-base font-bold text-primary"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="******"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-slate-700 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
