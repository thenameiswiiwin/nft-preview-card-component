import Equilibrium from '../assets/images/image-equilibrium.jpg'
import Avatar from '../assets/images/image-avatar.png'
import Ethereum from '../assets/images/icon-ethereum.svg'
import Clock from '../assets/images/icon-clock.svg'
import View from '../assets/images/icon-view.svg'

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-mainBG">
      <div className="mx-9 max-w-[451px] space-y-8 rounded-3xl bg-cardBG p-9">
        <div className="group relative overflow-hidden rounded-xl bg-cyan">
          <img
            className="hover:cursor-pointer group-hover:opacity-50"
            src={Equilibrium}
          />
          <img
            className="absolute inset-0 m-auto opacity-0 group-hover:opacity-100 "
            src={View}
          />
        </div>
        <section className="space-y-6 font-outfit text-softBlue">
          <h1 className="cursor-pointer text-3xl text-white hover:text-cyan">
            Equilibrium #3429
          </h1>
          <p className="text-xl font-light">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <span className="flex items-center gap-2">
              <img className="h-6" src={Ethereum} alt="ethereum" />
              <p className="text-xl text-cyan">0.041 ETH</p>
            </span>
            <span className="flex items-center gap-2">
              <img className="h-6" src={Clock} alt="ethereum" />
              <p className="text-xl font-light">3 days left</p>
            </span>
          </div>
          <div className="h-0.5 bg-blueLine" />
          <div className="flex items-center gap-4">
            <img
              className="w-12 rounded-full border-2"
              src={Avatar}
              alt="jules wyvern"
            />
            <p className="text-xl font-light">
              Creation of{' '}
              <a className="font-normal text-white hover:text-cyan" href="#">
                Jules Wyvern
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
