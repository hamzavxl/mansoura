import DATA from "@/data/data.json";

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  date: string;
  rating: number;
}

export const SCHOOL_INFO = DATA.SCHOOL_INFO;
export const COMMUNITY_REVIEWS = DATA.COMMUNITY_REVIEWS as ReviewItem[];

export default DATA;
