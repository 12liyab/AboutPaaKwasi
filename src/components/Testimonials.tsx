import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import agedeImage from "@/assets/testimonials/agede.png";
import caesarImage from "@/assets/testimonials/caesar.png";
import ceceImage from "@/assets/testimonials/cece.png";
import josephImage from "@/assets/testimonials/joseph.png";

const testimonials = [
  {
    quote: "Liyab delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
    author: "Cece Abotsi",
    role: "Head of Policy Advocacy abilityHEALTH",
    rating: 5,
    image: ceceImage
  },
  {
    quote: "Working with Liyab was a game-changer for our business. He transformed our outdated system into a modern, scalable platform that our users love.",
    author: "Caesar Seade",
    role: "Product Manager, InnovateCo",
    rating: 5,
    image: caesarImage
  },
  {
    quote: "Professional, reliable, and incredibly skilled. Liyab brought our vision to life with clean code and thoughtful architecture. Highly recommended!",
    author: "Agede Mawuena",
    role: "Deputy Executive Director, empowerAbilityOrg",
    rating: 5,
    image: agedeImage
  },
  {
    quote: "The level of expertise and dedication Liyab brought to our project was outstanding. He's not just a developer, he's a problem solver who truly cares about delivering quality.",
    author: "Joseph Lawrence Hammond",
    role: "Director of thenovus.Solutions",
    rating: 5,
    image: josephImage
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-10 w-10 text-primary mb-4 animate-float" />
                      
                      <blockquote className="text-muted-foreground mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-primary fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 hover:scale-110 transition-transform duration-300"
                        />
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
