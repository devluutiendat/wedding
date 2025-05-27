"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function WishesForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast("Vui lòng điền đầy đủ thông tin", {
        description: "Họ tên và lời chúc là bắt buộc",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast("Gửi lời chúc thành công!", {
        description: "Cảm ơn bạn đã gửi lời chúc đến đám cưới của chúng mình",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="w-full border-2 border-background-default rounded-2xl shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Nhập họ tên*"
                className="p-6"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                className="p-6"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Nhập lời chúc của bạn*"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="min-h-[200px] p-6"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-background-default hover:bg-background-hover"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang gửi..." : `Gửi lời chúc`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
