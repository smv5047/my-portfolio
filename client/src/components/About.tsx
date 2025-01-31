import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardContent className="p-2">
              <img
                src="https://images.unsplash.com/photo-1518655048521-f130df041f66"
                alt="Workspace"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Hi, I'm Jane! I'm a passionate full-stack developer with over 5 years of experience
              building web applications. I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me contributing to open source projects,
              writing technical blog posts, or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
