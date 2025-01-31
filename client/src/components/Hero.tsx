import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Hero() {
  return (
    <div
      className="min-h-screen pt-16 flex items-center"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            tabIndex={0}
          >
            Steven Vandenburg
          </h1>
          <h2
            className="text-2xl md:text-3xl text-muted-foreground"
            tabIndex={0}
          >
            AI Enhanced Business Builder
          </h2>
          <p className="text-lg text-muted-foreground max-w-prose" tabIndex={0}>
            Building beautiful and functional web applications with modern
            technologies.
          </p>
          <div
            className="flex gap-4"
            role="group"
            aria-label="Call to action buttons"
          >
            <Button size="lg" aria-label="View my portfolio">
              View Portfolio
            </Button>
            <Button size="lg" variant="outline" aria-label="Contact me">
              Contact Me
            </Button>
          </div>
        </div>
        <Card className="flex-1 p-2 max-w-md">
          <img
            src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
            alt="Professional headshot of Jane Doe, a full stack developer"
            className="w-full h-auto rounded-lg"
            loading="eager"
            tabIndex={0}
          />
        </Card>
      </div>
    </div>
  );
}
