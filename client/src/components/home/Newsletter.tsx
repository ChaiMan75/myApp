import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/subscribe", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-white">Stay Connected</h2>
          <p className="text-white opacity-90 mb-8">
            Subscribe to our newsletter to receive updates on upcoming events, success stories, and ways to get involved.
          </p>

          {submitted ? (
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-heading font-bold text-xl text-white mb-2">Thank You!</h3>
              <p className="text-white">
                You've successfully subscribed to our newsletter. We look forward to sharing our journey with you.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <Input
                          placeholder="Your email address"
                          {...field}
                          className="px-4 py-3 rounded-full text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white/90" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="font-heading font-semibold bg-white text-primary hover:bg-neutral-100 py-3 px-8 rounded-full transition transform hover:-translate-y-1 hover:shadow-md"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          )}

          <p className="text-white opacity-75 text-sm mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
