import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  news: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/news" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        date: z.date(),
        cover: image(),
      }),
  }),
  events: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/events" }),
    schema: () =>
      z.object({
        title: z.string(),
        date: z.date(),
        location: z.string(),
      }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/projects" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        cover: image(),
      }),
  }),
  media: defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/media" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        cover: image(),
        coverAlt: z.string(),
      }),
  }),
  works: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/works" }),
    schema: ({ image }) =>
      z.object({
        workNumber: z.string(),
        title: z.string(),
        shortDesc: z.string(),
        length: z.string(),
        forces: z.string(),
        compositionYear: z.string(),
        hire: z.optional(z.boolean()),
        audio: z.any(),
        pdf: z.any(),
        bannerImage: z.optional(image()),
        titleImage: z.optional(image()),
        recording: z.optional(z.string()),
        moreInfo: z.optional(z.boolean()),
        buy: z.optional(z.string()),
      }),
  }),
};
