import { useMemo, type CSSProperties } from "react";
import CarCardRow from "./car-card-row";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type MainContentCarCardsType = {
  image1?: string;
  image11?: string;

  /** Style props */
  mainContentCarCardsAlignSelf?: CSSProperties["alignSelf"];
  mainContentCarCardsFlex?: CSSProperties["flex"];
};

export default async function MainContentCarCards(fn: MainContentCarCardsType) {
  const mainContentCarCardsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: fn.mainContentCarCardsAlignSelf,
      flex: fn.mainContentCarCardsFlex,
    };
  }, [fn.mainContentCarCardsAlignSelf, fn.mainContentCarCardsFlex]);

  async function getModels() {
    const models = await prisma.model.findMany({});
    return models;
  }

  type modelsType = Prisma.PromiseReturnType<typeof getModels>;

  const models = await getModels();
  const pairwiseModels = models.reduce<modelsType[]>(
    (result, _, index, array) => {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []
  );
  console.log(pairwiseModels);

  return (
    <div
      className="[background:linear-gradient(180deg,_#ebf5ff,_#92c9f9)] flex flex-col items-center justify-center py-[50px] px-[100px] gap-[35px]"
      style={mainContentCarCardsStyle}
    >
      {pairwiseModels.map((model) => (
        <CarCardRow
          key={model[0].id}
          image1="/image-11@2x.png"
          image11="/image-11@2x.png"
          makeValueText1="ford"
          modelValueText1={model[0].name}
          colorValueText1="ford"
          yearValueText1="ford"
          typeValueText1="ford"
          priceValueText1="ford"
          makeValueText2="ford"
          modelValueText2={(model.length === 2 && model[1].name) || ""}
          colorValueText2="ford"
          yearValueText2="ford"
          typeValueText2="ford"
          priceValueText2="ford"
        />
      ))}
    </div>
  );
}
