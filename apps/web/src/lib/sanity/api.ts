function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? 'v2025-05-03';

export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ?? 'http://localhost:3333';
