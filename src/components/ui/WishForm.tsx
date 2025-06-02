"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { addWish } from "@/action/wishes";

// Define form schema
const formSchema = z.object({
  name: z.string().min(1, "Họ tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ").or(z.literal("")),
  message: z.string().min(1, "Lời chúc là bắt buộc"),
});

const WishesForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      addWish({
        name: values.name,
        email: values.email,
        content: values.message,
      });
      toast.success("Cảm ơn bạn đã để lại lời chúc");
    } catch (error) {
      toast.error(
        "Gửi lời chúc chưa thành công , vui lòng kiểm tra lai" + error,
      );
    }
  };

  return (
    <Card className="border-background-default w-full rounded-2xl border-2 shadow-lg">
      <CardContent className="p-6">
        {/* ShadCN Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Họ tên*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nhập họ tên"
                        {...field}
                        className="p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Nhập email"
                        {...field}
                        className="p-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lời chúc*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Nhập lời chúc của bạn"
                      {...field}
                      rows={5}
                      className="min-h-[200px] p-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-background-default hover:bg-background-hover w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Đang gửi..." : "Gửi lời chúc"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WishesForm;
