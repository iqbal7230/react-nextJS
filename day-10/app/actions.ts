'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateImages() {
  // @ts-expect-error Next.js 16 type definition requires 2 arguments but 1 is valid
  revalidateTag('images');
}
