export interface ContactInfo {
  name: string;
  profession: string;
  location: string;
  phone: string;
  email: string;
  github: SocialLink;
  linkedin: SocialLink;
}

interface SocialLink {
  text: string;
  link: string;
}