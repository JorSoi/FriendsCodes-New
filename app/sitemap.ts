import { createClient } from "@/utils/supabase/client";
import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

const supabase = createClient();

const generateProfilesSitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const { data, error } = await supabase.from(`profiles`).select();
  if (error) return [];
  return data.map((profile) => {
    return {
      url: `https://friendscodes.app/${profile.user_name}`,
      lastModified: profile.last_activity_at ?? new Date(), // Just setting default date to now
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const profileSitemap = await generateProfilesSitemap();

  return [
    {
      url: "https://friendscodes.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://friendscodes.app/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://friendscodes.app/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...profileSitemap,
  ];
}
