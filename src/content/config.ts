import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string().optional(),
    registration_url: z.string().optional(),
  }),
});

const meetingNotes = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.date(),
    duration: z.string(),
    category: z.string(),
    attendees: z.array(z.string()),
    overview: z.string(),
    key_points: z.array(z.string()).optional(),
    action_items: z.array(z.string()),
    next_steps: z.array(z.string()),
  }),
});

export const collections = {
  events,
  'meeting-notes': meetingNotes,
}; 