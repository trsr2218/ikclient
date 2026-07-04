import { ImageResponse } from 'next/og';
import { BRAND_CARD_SIZE, renderBrandCard } from '@/lib/brand-card';

export const alt = 'A Place Called Home';
export const size = BRAND_CARD_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(await renderBrandCard(), size);
}
