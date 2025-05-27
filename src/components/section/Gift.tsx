import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function GiftSection() {
  return (
    <section id="donate" className="w-full py-16 bg-background-default/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Image
            src={"/couple/sec-title-flower.png"}
            alt={"sec-title"}
            width={150}
            height={150}
          />

          <h2 className="text-4xl font-black mb-4 font-dancing-script">
            Hộp mừng cưới
          </h2>
        </div>

        <div className="max-w-md mx-auto border-2 border-background-default rounded-2xl shadow-lg">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Mừng cưới đến cô dâu</h3>

              <div className="mb-6 mx-auto w-48 h-48 relative">
                <Image
                  src="/footer/couple.jpg"
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2 text-left">
                <p>
                  Ngân hàng:
                  <span className="font-semibold ">
                    NGÂN HÀNG NÔNG NGHIỆP VÀ PHÁT TRIỂN NÔNG THÔN VIỆT NAM
                  </span>
                </p>
                <p>
                  Tên tài khoản:
                  <span className="font-semibold ">TRAN THI THANH HANG</span>
                </p>
                <p>
                  Số tài khoản:
                  <span className="font-semibold ">3211205415898</span>{" "}
                </p>
                <p>
                  Chi nhánh:
                  <span className="font-semibold ">
                    CN HUYỆN VỤ BẢN BẮC NAM ĐỊNH
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
