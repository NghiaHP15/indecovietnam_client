import { twMerge } from "tailwind-merge";
import { cn } from "@/constants/utils";
import PriceFormatter from "./PriceFormatter";
import { useEffect, useState } from "react";

interface Props {
  price: number;
  discount: number;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  const [priceValue, setPriceValue] = useState<number>(price);
  const [discountValue, setDiscountValue] = useState<number>(price);
  console.log(price);
  

  useEffect(() => {
    setPriceValue(price);
    setDiscountValue(discount);
  },[price, discount]);
  
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        <PriceFormatter
          amount={price}
          className={cn("text-darkColor", className)}
        />
        {price && discount && (
          <PriceFormatter
            amount={price + (discountValue * priceValue) / 100}
            className={twMerge(
              "line-through text-xs font-normal text-zinc-500",
              className
            )}
          />
        )}
      </div>
    </div>
  );
};

export default PriceView;