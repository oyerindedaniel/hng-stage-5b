"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { StarRating } from "@/components/star";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"] });

const feedbackOptions = [
  { value: "comments", label: "Comments" },
  { value: "concerns", label: "Concerns" },
  { value: "suggestions", label: "Suggestions" },
];

const FormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  feedbackType: z.enum(["comments", "concerns", "suggestions"], {
    required_error: "You need to select a feedback type.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  rating: z.number().min(1, { message: "Rating is required." }).max(5),
});

export default function Feedback() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Feedback submitted successfully!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <main className={cn("w-full", manrope.className)}>
      <div className="mb-20 w-fit">
        <h2 className="font-semibold text-3xl md:text-4xl mb-4">
          Feedback Form
        </h2>
        <p className="text-md text-black/65">
          We would love to hear your thoughts, suggestions, concerns, or
          problems with anything so we can improve!
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-xl mb-8">Fill in your details:</h4>
        <Form {...form}>
          <form
            className="flex flex-col gap-8 md:gap-16"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[40%]">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full md:w-[40%]">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full md:w-[40%]">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedbackType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Feedback Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-wrap flex-col md:flex-row md:space-x-6 space-y-3 md:space-y-0"
                    >
                      {feedbackOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center space-x-3"
                        >
                          <RadioGroupItem value={option.value} />
                          <FormLabel>{option.label}</FormLabel>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[350px]"
                      placeholder="Type your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="mx-auto">
                  <FormLabel className="text-lg flex justify-center mb-6">
                    Rate Us
                  </FormLabel>
                  <FormControl>
                    <StarRating
                      color="#B15210"
                      maxRating={5}
                      defaultRating={Number(field?.value || 0)}
                      //   size={60}
                      className="w-6 h-6 md:w-14 md:h-14"
                      onSetRating={field.onChange}
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <Button size="lg" type="submit" className="w-fit mx-auto">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
