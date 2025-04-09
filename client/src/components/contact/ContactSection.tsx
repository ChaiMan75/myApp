import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactInfo, SocialLink } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo: ContactInfo[] = [
  {
    icon: "fas fa-envelope",
    text: "contact@solesandsouls.org",
  },
  {
    icon: "fas fa-phone",
    text: "+91 98765 43210",
  },
  {
    icon: "fas fa-map-marker-alt",
    text: "123 Community Lane, Bengaluru, Karnataka 560001",
  },
];

const socialLinks: SocialLink[] = [
  { platform: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { platform: "Twitter", href: "#", icon: "fab fa-twitter" },
  { platform: "Instagram", href: "#", icon: "fab fa-instagram" },
  { platform: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
];

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-neutral-800">Contact Us</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-neutral-100 rounded-lg p-8">
                <h3 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h3>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-heading font-medium text-neutral-700">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary"
                          />
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
                        <FormLabel className="font-heading font-medium text-neutral-700">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary"
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
                        <FormLabel className="font-heading font-medium text-neutral-700">Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                            <SelectItem value="partnership">Partnership/Sponsorship</SelectItem>
                            <SelectItem value="event">Event Information</SelectItem>
                            <SelectItem value="donation">Donation Inquiry</SelectItem>
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
                        <FormLabel className="font-heading font-medium text-neutral-700">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto font-heading font-semibold uppercase tracking-wide bg-primary hover:bg-orange-600 text-white py-3 px-8 rounded-full transition transform hover:-translate-y-1 hover:shadow-md"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-neutral-100 rounded-lg p-8 h-full">
              <h3 className="font-heading font-bold text-2xl mb-6">Get in Touch</h3>

              <div className="mb-8">
                <h4 className="font-heading font-semibold text-lg mb-2">Connect with Us</h4>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <div className="bg-primary rounded-full p-2 mr-4">
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <span className="text-neutral-700">{info.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="bg-neutral-200 hover:bg-primary hover:text-white transition p-3 rounded-full"
                      aria-label={link.platform}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-lg mb-4">Office Hours</h4>
                <p className="text-neutral-700 mb-2">
                  <span className="font-semibold">Monday to Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p className="text-neutral-700">
                  <span className="font-semibold">Saturday:</span> 9:00 AM - 1:00 PM (By appointment only)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
