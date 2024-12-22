/* eslint-disable react/prop-types */
import clsx from "clsx";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

function CardDetails({ data }) {
  return (
    <div className="p-6 bg-black/5 w-full md:w-[calc(50%-1rem)]">
      {data && (
        <div>
          <h5 className="text-xs font-medium text-black/80">{data.cardName}</h5>
          <p className="font-semibold my-2 text-xl">
            {data.cardType === "amount" ? "$ " : ""}
            {data.cardTotalPrice}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-base text-black/60">
              {data.cardTotalCount}
            </span>
            <span
              className={clsx(
                "flex justify-center items-center w-fit text-sm",
                data.cardStatus === "down" ? "text-red-700" : "text-green-600"
              )}
            >
              <span className="w-4 h-auto">
                {data.cardStatus === "down" ? (
                  <MdArrowDropDown />
                ) : (
                  <MdArrowDropUp />
                )}
              </span>
              {data.cardPercent}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
