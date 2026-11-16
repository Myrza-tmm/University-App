export type NewsItem = {
    id: number;
    title: string;
    summary: string;
    image_url: string;
    published_at: string;
};

export type Status = 'loading' | 'error' | 'success';