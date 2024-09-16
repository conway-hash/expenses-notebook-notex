import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

import {
  ChevronRight,
} from "lucide-react"

import {
  Button }
from "@/components/ui/button"

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

type Article = {
  author: string,
  category: string,
  country: string,
  description: string,
  language: string,
  published_at: string,
  source: string,
  title: string,
  url: string
};

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Failed to fetch news');

        const data = await response.json();
        setArticles(data.data || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
  <>
  <div className="w-full px-4 flex gap-3 overflow-x-scroll overflow-y-hidden no-scrollbar relative">
    <CardTitle className=''>Latest News</CardTitle>
    {loading ? (
      <>
      <Card className="min-w-72 p-4 flex flex-col gap-3">
        <Skeleton className='h-10 w-5/6 bg-[#EEEFF3]'/>
        <Skeleton className='h-10 w-full bg-[#EEEFF3]'/>
        <Skeleton className='h-5 w-20 bg-[#EEEFF3]'/>
      </Card>
      <Card className="min-w-72 p-4 flex flex-col gap-3">
        <Skeleton className='h-10 w-5/6 bg-[#EEEFF3]'/>
        <Skeleton className='h-10 w-full bg-[#EEEFF3]'/>
        <Skeleton className='h-5 w-20 bg-[#EEEFF3]'/>
      </Card>
      </>
    ) : (
      articles.map((article, index) => (
        <Card className="min-w-72 p-4 flex flex-col gap-3" key={index}>
          <div className='h-10 flex items-center'>
            <CardTitle className='text-sm line-clamp-2'>{article.title}</CardTitle>
          </div>
          <div className='h-10 flex items-center'>
            <CardDescription className='text-xs line-clamp-3'>{article.description}</CardDescription>
          </div>
          <Button className='flex justify-start p-0 h-auto' variant="link" asChild>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className='flex gap-1 items-center'>
              <p className='text-sm'>Read more</p>
              <ChevronRight className="h-3 w-3" strokeWidth={2} />
            </a>
          </Button>
        </Card>
      ))
    )}
  </div>
  </>
  );
}