import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <Card>
          <CardHeader>
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
