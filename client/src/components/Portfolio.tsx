import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates.",
    tech: ["Next.js", "Express", "MongoDB"],
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with customizable widgets.",
    tech: ["React", "D3.js", "TypeScript"],
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
