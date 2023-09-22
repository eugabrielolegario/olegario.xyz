import { MediumPost } from "../interfaces/MediumPost";

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eugabrielolegario'
    );
    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();

    return data.items.map((item: MediumPost) => ({
      title: item.title,
      link: item.link,
    })) as MediumPost[];
  } catch (error) {
    console.error('Error');
    return [];
  }
}
