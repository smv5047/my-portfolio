import { useRoute } from "wouter";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { calculateReadingTime } from "@/lib/utils";
import ShareButtons from "./ShareButtons";
import Navbar from "./Navbar";

const posts = {
  "getting-started-web-dev": {
    title: "Getting Started with Web Development",
    date: "2025-01-24",
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
  "building-scalable-apps": {
    title: "Building Scalable Applications",
    date: "2025-01-20",
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
  "future-of-frontend": {
    title: "The Future of Frontend Development",
    date: "2025-01-15",
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
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["/api/blog", slug],
    enabled: !!slug,
    queryFn: async () => {
      // In a real app, this would be an API call
      return posts[slug as keyof typeof posts];
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="animate-pulse">
          <CardHeader className="space-y-4">
            <div className="h-8 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error</h1>
            <p className="text-muted-foreground">Blog post not found.</p>
            <Button className="mt-4" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onNavigate={{
          about: () => window.location.href = '/#about',
          skills: () => window.location.href = '/#skills',
          portfolio: () => window.location.href = '/#portfolio',
          blog: () => window.location.href = '/#blog',
          contact: () => window.location.href = '/#contact',
        }}
      />
      <div className="container mx-auto px-4 py-20">
        <Card>
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
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <ShareButtons url={currentUrl} title={post.title} className="mt-4" />
          </CardHeader>
          <CardContent>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => window.history.back()}
              >
                ← Back to Blog
              </Button>
              <ShareButtons url={currentUrl} title={post.title} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}