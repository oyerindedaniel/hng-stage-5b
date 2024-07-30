import { Icons } from "./assets";

interface SidebarLink {
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SIDEBAR_LINKS: { [key: string]: SidebarLink[] } = {
  main: [
    { name: "Home", url: "/home", icon: Icons.HomeIcon },
    {
      name: "YouTube Summarizer",
      url: "/youtube-summarizer",
      icon: Icons.YouTubeIcon,
    },
    {
      name: "Podcast Summarizer",
      url: "/podcast-summarizer",
      icon: Icons.PodcastIcon,
    },
    { name: "PDF Summarizer", url: "/pdf-summarizer", icon: Icons.PDFIcon },
    {
      name: "Audio Transcriber",
      url: "/audio-transcriber",
      icon: Icons.AudioIcon,
    },
    { name: "Video Generator", url: "/video-generator", icon: Icons.VideoIcon },
    {
      name: "Thumbnail Generator",
      url: "/thumbnail-generator",
      icon: Icons.ThumbnailIcon,
    },
  ],
  others: [
    { name: "My Projects", url: "/my-projects", icon: Icons.ProjectsIcon },
    { name: "Archive", url: "/archive", icon: Icons.ArchiveIcon },
  ],
};

export const NAV_ITEMS = [
  { name: "Home", link: "/home" },
  { name: "Pricing", link: "/pricing" },
  { name: "Products", link: "/products" },
  { name: "Resources", link: "/resources", hasSubmenu: true }, // Example with a submenu
  { name: "Contact Us", link: "/contact" },
];

export const CONTACT_DETAILS = [
  {
    icon: Icons.LocationIcon,
    text: "10111, Hornchurch, London, United Kingdom",
  },
  {
    icon: Icons.PhoneIcon,
    text: "+4403989898787",
  },
  {
    icon: Icons.MessageIcon,
    text: "supportteam@gmail.com",
  },
  {
    icon: Icons.TwitterIcon,
    text: "@boilerplate23",
  },
  {
    icon: Icons.InstagramIcon,
    text: "@boilerplate234",
  },
  {
    icon: Icons.LinkendinIcon,
    text: "@boilerplate34",
  },
];

export const INQUIRY_TYPES = [
  { value: "general", name: "General Inquiry" },
  { value: "media", name: "Media Contact" },
  { value: "feedback", name: "Feedback" },
  { value: "subscription", name: "Subscription" },
  { value: "others", name: "Others" },
];
