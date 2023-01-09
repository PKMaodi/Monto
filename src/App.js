import './App.css';
function App() {
 
  return (
    <div className="App" class="w-screen">
      <div class="py-10 w-full h-42 flex justify-center">
      <img src="hRes.jpeg" class="max-w-full h-auto" alt="" />
      </div>
      <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full w-[100px] h-[100px] block mx-auto sm:mx-0 sm:shrink-0"
        src="hRes.png"
        alt="Defenders of house"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold"><a href="https://hearthis.at/koketso-koketso-koketso/defenders-of-house-vol41/" target="_blank" rel="noreferrer">Defenders of house Vol.41</a></p>
        </div>
      </div>
    </div>
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full w-[100px] h-[100px] block mx-auto sm:mx-0 sm:shrink-0"
        src="hRes.png"
        alt="Defenders of house"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold"><a href="https://hearthis.at/koketso-koketso-koketso/defenders-of-house-mix-vol15/" target="_blank" rel="noreferrer">Defenders of house Vol.15</a></p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;