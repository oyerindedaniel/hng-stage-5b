"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INQUIRY_TYPES, CONTACT_DETAILS } from "../constants";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "../assets";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const manrope = Manrope({ subsets: ["latin"] });

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  subject: z.string().optional(),
  message: z.string().min(1, {
    message: "Message cannot be empty",
  }),
});

export default function ContactUs() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: INQUIRY_TYPES[0].value,
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "Contact submitted successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <main className={cn("w-full", manrope.className)}>
      <div className="mb-20 w-fit mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-1">
          Contact Our Team
        </h2>
        <p className="text-center text-lg">
          Get In Touch, We’ll love to hear from you.
        </p>
      </div>

      <div className="flex justify-between flex-col md:flex-row gap-16 md:gap-0">
        <div className="md:bg-[#FAFAFA] w-full md:w-2/4 md:p-[32px] md:rounded-lg md:shadow-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {INQUIRY_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                leftElement={<Icons.MessageIcon className="w-4 h-4 mr-2" />}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
        <div className="w-full md:w-[35%] flex flex-col justify-between gap-16 md:gap-0">
          <div className="p-6 bg-[#FAFAFA] rounded-lg shadow-md space-y-4 w-full">
            <div className="mb-6">
              <h3 className="text-xl text-[#525252] mb-4 font-semibold">
                United Kingdom
              </h3>
              <p className="text-gray-500 text-sm">Business hours: 8am - 6pm</p>
            </div>
            <div className="space-y-2 text-sm flex flex-col gap-3">
              {CONTACT_DETAILS.map((detail, idx) => (
                <div key={idx} className="flex items-center text-[#525252]">
                  <detail.icon className="w-4 h-4" />
                  <p className="ml-2">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 bg-[#FAFAFA] rounded-lg shadow-md w-full h-40">
            <div className="mb-3 flex justify-between items-center text-[#B15210]">
              <h3 className="text-2xl underline font-semibold">FAQs</h3>
              <Icons.ArrowRightIcon className="w-6 h-6" />
            </div>
            <div className="text-lg text-[#525252] leading-tight">
              <p>See and get answers to the most frequent asked questions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
