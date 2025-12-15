import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { ContactItemData } from "./types";
import { facebook, instagram, tiktok } from "@/images";


export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];

export const socailLinks = [
    { title: "Facebook", href: "https://www.facebook.com/profile.php?id=61576607768367", icon: facebook.src},
    { title: "Instagram", href: "https://www.instagram.com/indeco.vietnam/", icon: instagram.src },
    // { title: "YouTube", href: "https://www.youtube.com", icon: youtube.src },
    { title: "TikTok", href: "https://www.tiktok.com/@indeco_vietnam", icon: tiktok.src },
]

export const contact: ContactItemData[] = [
  {
    title: "Địa chỉ",
    subtitle: "Thạch Thất, Hà Nội",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-dark_brownish transition-colors" />
    ),
  },
  {
    title: "Liên hệ",
    subtitle: "+84 32 8494998",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
  {
    title: "Giờ làm việc",
    subtitle: "T2 - T7: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
  {
    title: "Email",
    subtitle: "indecovietnam.fur@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:dark_brownish transition-colors" />
    ),
  },
];

export const sizeOptions: { size: string; code: string }[] = [
  { size: "Nhỏ", code: "small" },
  { size: "Vừa", code: "medium" },
  { size: "Lớn", code: "large" },
  { size: "Tùy chỉnh", code: "custom" },
];

export const priceOptions: { title: string; value: string }[] = [
  { title: "1 Triệu - 3 Triệu", value: "1000000-3000000" },
  { title: "3 Triệu - 6 Triệu", value: "3000000-6000000" },
  { title: "6 Triệu - 9 Triệu", value: "6000000-9000000" },
  { title: "Trên 9 Triệu", value: "9000000-100000000" },
];

export const typeFeedbackOptions: { title: string; value: string }[] = [
  { title: "Liên hệ", value: "contact" },
  { title: "Thiết kế", value: "design" },
  { title: "Đánh giá", value: "feedback" },
  { title: "Khác", value: "other" },
]
