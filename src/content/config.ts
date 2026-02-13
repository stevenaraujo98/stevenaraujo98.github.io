import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    details: z.boolean().optional(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const paperSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    publishedIn: z.string().optional(),
    publisher: z.string().optional(),
    url: z.string().optional(),
    dateOfConference: z.string().optional(),
    // Allow loose schema for other likely fields
}).catchall(z.any());

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PaperSchema = z.infer<typeof paperSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const paperCollection = defineCollection({ schema: paperSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'paper': paperCollection
}