import { FC } from "react";

export interface MenuItemProps {
  image: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const MenuItem: FC<MenuItemProps> = ({
  image,
  weight,
  title,
  ingredients,
  price,
}) => {
  return (
    <div className="w-96 shadow-xl rounded-2xl bg-white">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-[15rem] rounded-t-2xl"
          src={`assets/pizza/${image}`}
          alt={title}
        />
        <span className="text-white text-sm absolute bottom-1.5 right-3 bg-gray-900/50 px-2 py-1 rounded-[2rem] leading-none">
          {weight} g
        </span>
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-8">{ingredients} </p>
        <span className="text-xl font-semibold">{price} uah</span>
      </div>
    </div>
  );
};
