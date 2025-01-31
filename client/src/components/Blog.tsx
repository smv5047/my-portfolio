import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarIcon, SearchIcon, Clock } from "lucide-react";
import { useState } from "react";
import { calculateReadingTime } from "@/lib/utils";

const posts = [
  {
    title: "Getting Started with Web Development",
    date: "2025-01-24",
    preview: "My journey into web development and the lessons I've learned along the way...",
    slug: "getting-started-web-dev",
    content: `
      # Getting Started with Web Development

      Web development is an exciting journey that combines creativity with technical skills. In this post, I'll share my experience and insights on how to begin your web development journey.

      ## The Fundamentals
      Before diving into frameworks and libraries, it's crucial to understand the basics:
      - HTML for structure
      - CSS for styling
      - JavaScript for interactivity

      ## My Learning Path
      When I first started, I focused on building small projects that helped me understand core concepts. This hands-on approach was invaluable for my learning process.

      ## Tips for Beginners
      1. Start with the basics
      2. Build projects, not just tutorials
      3. Join developer communities
      4. Practice regularly
      5. Don't be afraid to make mistakes

      Remember, everyone starts somewhere. The key is to keep learning and building!
    `,
  },
  {
    title: "Building Scalable Applications",
    date: "2025-01-20",
    preview: "Key principles and practices for creating maintainable software...",
    slug: "building-scalable-apps",
    content: `
      # Building Scalable Applications

      Creating applications that can grow with your user base is a crucial skill in modern web development.

      ## Key Principles
      - Modular Architecture
      - Clean Code Practices
      - Performance Optimization
      - Testing Strategies

      ## Best Practices
      In my experience, following these practices has helped create maintainable applications...
    `,
  },
  {
    title: "The Future of Frontend Development",
    date: "2025-01-15",
    preview: "Exploring emerging trends and technologies in frontend development...",
    slug: "future-of-frontend",
    content: `
      # The Future of Frontend Development

      The frontend development landscape is constantly evolving. Let's explore some emerging trends and technologies.

      ## Current Trends
      - Server Components
      - Edge Computing
      - Web Assembly
      - AI-Powered Development

      ## What's Next?
      The future of frontend development looks exciting with new technologies on the horizon...
    `,
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const searchContent = `${post.title} ${post.preview}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Blog</h2>

        {/* Search Input */}
        <div className="mb-8 max-w-md mx-auto relative">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No blog posts found matching your search.
          </p>
        )}

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2 gap-4">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {calculateReadingTime(post.content)}
                  </div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.preview}</CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={`/blog/${post.slug}`} 
                  className="text-primary hover:underline"
                >
                  Read more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}