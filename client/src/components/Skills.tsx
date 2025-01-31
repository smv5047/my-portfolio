import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Jest", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
