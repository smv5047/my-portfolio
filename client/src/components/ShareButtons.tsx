import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

export default function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareUrls.twitter, "_blank")}
        className="hover:text-blue-400"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareUrls.facebook, "_blank")}
        className="hover:text-blue-600"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareUrls.linkedin, "_blank")}
        className="hover:text-blue-700"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  );
}
