import next from "next";
import { Card, CardContent } from "./card";

interface Wish {
  name: string;
  content: string;
}

const getWish = async (): Promise<Wish[]> => {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbxVxHwlumhB_fg84dnjJQ-6Qez3yD-DtzOdGSTXEPEaYRgRxvRFItMD1Mlpkq9UmtGndQ/exec",
    {
      next: {
        tags: ["wishList"],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json();
  return data.data;
};
const WishesList = async () => {
  const wishes = await getWish();

  return (
    <div className="border-background-default max-h-[500px] space-y-4 overflow-y-scroll rounded-2xl border-2 shadow-2xl">
      {wishes.map((wish, index) => (
        <Card
          key={wish.name}
          className={`shadow-md ${index + (1 % 2) ? "bg-white" : "bg-rose-50"} m-0 rounded-none p-0`}
        >
          <CardContent className="m-0 p-2">
            <h3 className="text-lg font-semibold">{wish.name}</h3>
            <p className="text-gray-700">{wish.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WishesList;
