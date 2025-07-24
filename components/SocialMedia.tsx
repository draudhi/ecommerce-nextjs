import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { title } from "process";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
    className: "w-5 h-5",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
    className: "w-5 h-5",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: Youtube,
    className: "w-5 h-5",
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-2", className)}>
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 hover:text-white hover:border-white hovereffect",
                  iconClassName
                )}
              >
                <item.icon />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={5}
              className={cn(
                " bg-white text-black font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
