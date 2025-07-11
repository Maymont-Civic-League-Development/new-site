// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  content: {
    collections: {
      events: {
        schema: {
          type: 'content',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'date', type: 'date', required: true },
            { name: 'time', type: 'string', required: true },
            { name: 'location', type: 'string', required: true },
            { name: 'category', type: 'string', required: true },
            { name: 'description', type: 'string', required: true },
            { name: 'image', type: 'string', required: false },
            { name: 'registration_url', type: 'string', required: false }
          ]
        }
      },
      'meeting-notes': {
        schema: {
          type: 'content',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'date', type: 'date', required: true },
            { name: 'duration', type: 'string', required: true },
            { name: 'category', type: 'string', required: true },
            { name: 'attendees', type: 'array', of: [{ type: 'string' }], required: true },
            { name: 'overview', type: 'string', required: true },
            { name: 'key_points', type: 'array', of: [{ type: 'string' }], required: true },
            { name: 'action_items', type: 'array', of: [{ type: 'string' }], required: true },
            { name: 'next_steps', type: 'array', of: [{ type: 'string' }], required: true }
          ]
        }
      }
    }
  }
});
