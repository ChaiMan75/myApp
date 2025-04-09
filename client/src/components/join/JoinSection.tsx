import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
});

type FormValues = z.infer<typeof formSchema>;

const volunteerAreas = [
  { value: "marathons", label: "Marathons & Walkathons" },
  { value: "blood", label: "Blood Donation Camps" },
  { value: "organ", label: "Organ Donation Awareness" },
  { value: "anganwadi", label: "Anganwadi Support" },
  { value: "elderly", label: "Elderly Care Programs" },
  { value: "palliative", label: "Palliative Care Awareness" },
  { value: "admin", label: "Administrative Support" },
  { value: "fundraising", label: "Fundraising" },
];

const JoinSection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interests: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/volunteer", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Registration successful!",
        description: "Thank you for volunteering with Soles & Souls.",
      });
      form.reset();
      setSelectedInterests([]);
    },
    onError: (error) => {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const toggleInterest = (value: string) => {
    if (selectedInterests.includes(value)) {
      const newInterests = selectedInterests.filter(i => i !== value);
      setSelectedInterests(newInterests);
      form.setValue('interests', newInterests);
    } else {
      const newInterests = [...selectedInterests, value];
      setSelectedInterests(newInterests);
      form.setValue('interests', newInterests);
    }
  };

  return (
    <section id="join" className="py-16 bg-gradient-to-br from-orange-100/10 via-green-100/10 to-blue-100/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 p-8 lg:p-12">
                <h2 className="font-heading font-bold text-3xl mb-6">Join Our Movement</h2>
                <p className="text-neutral-700 mb-6">
                  There are many ways to get involved with Soles & Souls. Whether you want to volunteer your time, participate in events, or support our initiatives, your contribution makes a difference.
                </p>

                <div className="mb-8">
                  <h3 className="font-heading font-bold text-xl mb-4">How You Can Help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Volunteer for our events and initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Participate in our marathons and walkathons</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Become a regular blood or organ donor</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Support our Anganwadi or elderly care programs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Spread awareness about our causes</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild className="font-heading font-semibold uppercase tracking-wide bg-primary hover:bg-orange-600 text-white py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
                    <Link href="#volunteer-form">
                      Become a Volunteer
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="font-heading font-semibold uppercase tracking-wide bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:shadow-md">
                    <Link href="/contact#donate">
                      Make a Donation
                    </Link>
                  </Button>
                </div>
              </div>

              <div id="volunteer-form" className="w-full lg:w-1/2 bg-primary p-8 lg:p-12 text-white">
                <h3 className="font-heading font-bold text-2xl mb-6">Volunteer Registration</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-2 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                          </FormControl>
                          <FormMessage className="text-white/90" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-2 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                          </FormControl>
                          <FormMessage className="text-white/90" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading font-medium">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-2 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                          </FormControl>
                          <FormMessage className="text-white/90" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem>
                          <FormLabel className="font-heading font-medium">Areas of Interest</FormLabel>
                          <div className="bg-white rounded-lg text-neutral-800 p-4 h-40 overflow-y-auto">
                            {volunteerAreas.map(area => (
                              <div key={area.value} className="mb-2 flex items-center">
                                <input 
                                  type="checkbox" 
                                  id={area.value}
                                  checked={selectedInterests.includes(area.value)} 
                                  onChange={() => toggleInterest(area.value)}
                                  className="mr-2"
                                />
                                <label htmlFor={area.value}>{area.label}</label>
                              </div>
                            ))}
                          </div>
                          <FormMessage className="text-white/90" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full font-heading font-semibold uppercase tracking-wide bg-white text-primary hover:bg-neutral-100 py-3 px-8 rounded-full transition transform hover:-translate-y-1 hover:shadow-md"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Registering..." : "Register as Volunteer"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
