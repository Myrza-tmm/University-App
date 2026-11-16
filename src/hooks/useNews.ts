import { useEffect, useState, useCallback } from 'react';
import type { NewsItem, Status } from '../types/news';

export function useNews() {
  const [data, setData] = useState<NewsItem[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setStatus('loading');
    try {
      const res = await fetch('https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=3b57c1526f0aa35b3b4255e9ed98dba4');
      const json = await res.json();

      // МІНЕ ОСЫ ЖЕР - АУДАРУ
      const mapped: NewsItem[] = (json.articles || []).map((a: any) => ({
        id: a.url,
        title: a.title,
        summary: a.description,
        image_url: a.image,
        published_at: a.publishedAt,
      }));

      setData(mapped);
      setStatus('success');
    } catch (e) {
      setStatus('error');
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchNews(); }, [fetchNews]);

  return { data, status, refreshing, refresh: () => fetchNews(true) };
}