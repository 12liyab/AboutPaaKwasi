import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Format WhatsApp message
      const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${validatedData.name}\n*Email:* ${validatedData.email}\n*Message:* ${validatedData.message}`;
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // WhatsApp number (without + or spaces)
      const whatsappNumber = "233544209788";
      
      // Open WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

      toast({
        title: "Redirecting to WhatsApp",
        description: "Your message has been prepared. Please send it via WhatsApp.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full shadow-glow" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <Card className="p-6 md:p-8 bg-card/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:12sonjames@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                >
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Email</p>
                    <span className="text-sm md:text-base font-medium">12sonjames@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+233544209788"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                >
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">Phone</p>
                    <span className="text-sm md:text-base font-medium">+233 544 209 788</span>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/paa-kwesi-89557b333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                >
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">LinkedIn</p>
                    <span className="text-sm md:text-base font-medium">Connect with me</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/12liyab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 group p-3 rounded-xl hover:bg-primary/5"
                >
                  <div className="p-3 bg-gradient-primary rounded-xl group-hover:shadow-glow transition-all duration-300">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/70">GitHub</p>
                    <span className="text-sm md:text-base font-medium">View my code</span>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 md:p-8 bg-card/60 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500 animate-fade-in order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2 bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="mt-2 bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="mt-2 min-h-[150px] bg-background/50 border-2 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold text-base py-6"
              >
                {isSubmitting ? "Sending..." : "Send Message via WhatsApp"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
