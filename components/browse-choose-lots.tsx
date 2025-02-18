import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

type ChooseLotsTitle = {
  text?: string;

  /** Style props */
  chooseLotsBackground?: CSSProperties["background"];
};

const ChooseLots: NextPage<ChooseLotsTitle> = ({
  text = "Choose Pick-up and Return Lots",
  chooseLotsBackground,
}) => {
  const chooseLotsStyle: CSSProperties = useMemo(() => {
    return {
      background: chooseLotsBackground,
    };
  }, [chooseLotsBackground]);

  return (
    <div
      className="flex flex-row items-center justify-center pt-0 px-[100px] pb-[70px] box-border text-center text-36xl text-black font-body-large self-stretch flex-1"
      style={chooseLotsStyle}
    >
        <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-9xl text-black font-reg-heading">
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <ul className="flex flex-col items-center justify-start gap-[10px] list-none">
              <li className="text-sm">Step 1: Choose lots</li>
              <li>Step 2: Enter dates</li>
              <li>Step 3: View vehicles</li>
            </ul>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[75px] text-24xl">
            <div className="self-stretch flex flex-row items-center justify-center pt-[100px] px-0 pb-[25px] text-45xl">
              <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[100%] italic font-medium font-inherit">
                Choose car lots
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                  Pickup lot*:
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
                <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                    <select name="pickup-lot" id="pickup-lot" required> 
                        <option value="albany">Albany</option> 
                        <option value="rhinebeck">Rhinebeck</option> 
                        <option value="poughkeepsie">Poughkeepsie</option> 
                        <option value="westchester">Westchester</option> 
                    </select>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="relative tracking-[0.5px] leading-[100%] font-medium">
                  Return lot*:
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-17xl">
                <div className="w-[280px] h-[153px] flex flex-col items-start justify-start">
                    <select name="return-lot" id="return-lot" required> 
                        <option value="albany">Albany</option> 
                            <option value="rhinebeck">Rhinebeck</option> 
                            <option value="poughkeepsie">Poughkeepsie</option> 
                            <option value="westchester">Westchester</option> 
                    </select>
                </div>
              </div>
              <Link href="../browse_choose_dates"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
              >
                    <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                        Continue
                    </div>
                    </div>
              </Link>
              <Link href="/"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
              >
                <div className="box-border w-[314px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                    <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                        Back to Home
                    </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChooseLots;