import { useState } from "react";
import InputBox from "./components/Input.jsx";
import Usecurrencyconverter from "./Hooks/covconrrency.js";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyinfo = Usecurrencyconverter(from);
  const options = Object.keys(currencyinfo);
  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };
  const convert = () => {
    setconvertedamount(amount * currencyinfo[to.toUpperCase()]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/16035532/pexels-photo-16035532/free-photo-of-camping-car-dans-la-nature-en-norvege-avec-un-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                setcurrency={setfrom}
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountchange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                setcurrency={setto}
                label="To"
                amount={convertedamount}
                onAmountchange={(convertedamount) =>
                  setconvertedamount(convertedamount)
                }
                currencyOptions={options}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
