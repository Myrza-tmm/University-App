import { useEffect, useState } from 'react';
import type { NewsItem, Status } from '../types/news';

export function useNews() {
    const [data, setData] = useState<NewsItem[]>([]);
    const [status, setStatus] =useState<Status>('loading');

    useEffect(() => {
        async function fetchNews() {
            setStatus('loading');
            try {
                const res = await fetch ('https://api.spaceflightnewsapi.net/v4/articles/?limit=10');
                const json = await res.json();
                setData(json.results);
                setStatus('success');
            } catch (e) {
                setStatus('error');
            }
        }
        fetchNews();
    }, []);

    return { data, status };
}