import { Card, CardContent } from "./card";

const wishesList = [
  {
    name: "Huyền",
    message: "Chúc bạn yêu trăm năm hạnh phúc nhoa ♥️♥️",
    bgColor: "bg-white",
  },
  {
    name: "Thu thuỷ phạm",
    message:
      "Chúc em trăm năm hạnh phúc bạc đầu giai lão, hôm nay hãy là cô dâu xjnh đẹp nhất nhé ❤️❤️",
    bgColor: "bg-rose-50",
  },
  {
    name: "Trang xinh đẹp",
    message: "Chúc bạn eo trăm năm hạnh phúc",
    bgColor: "bg-white",
  },
  {
    name: "Thêu Song",
    message: "Chúc bạn có cuộc sống thuận lợi êm đềm, tình cảm bền lâu☘️☘️☘️",
    bgColor: "bg-rose-50",
  },
  {
    name: "Hà",
    message:
      "Chúc bạn trăm năm hạnh phúc, vợ chồng hoà thuận, con cái ngoan ngoãn",
    bgColor: "bg-white",
  },
  {
    name: "hưng",
    message:
      "Hay sống thật hạnh phúc bên nhau nhé, chúc mừng hạnh phúc của hai bạn",
    bgColor: "bg-rose-50",
  },
];
const WishesList = () => {
  return (
    <div className="border-background-default max-h-[500px] space-y-4 overflow-y-scroll rounded-2xl border-2 shadow-2xl">
      {wishesList.map((wish, index) => (
        <Card
          key={index}
          className={`shadow-md ${wish.bgColor} m-0 rounded-none p-0`}
        >
          <CardContent className="m-0 p-2">
            <h3 className="text-lg font-semibold">{wish.name}</h3>
            <p className="text-gray-700">{wish.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WishesList;
