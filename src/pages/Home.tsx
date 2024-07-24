import { useEffect, useState } from 'react'
import Layout from './Layout'
import CardNews from '../components/CardNews';
import CardNewsLoading from '../components/CardNewsLoading';
import { BsSearch } from 'react-icons/bs';
import { News } from '../data/data';

const Home = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    const fetchNews = (searchQuery = '') => {
        setIsLoading(true);
        setNews([]);
        const url = searchQuery
            ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=d010295994604bd999d6c4479f623ecf`
            : 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d010295994604bd999d6c4479f623ecf';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        fetchNews();
    }, [])

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchNews(query);
    }

    return (
        <Layout>
            <div className="max-w-screen-xl px-5 mx-auto">
                <form className='mb-8' onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <BsSearch className='size-5 text-gray-300' />
                        </div>
                        <input
                            type="search"
                            className="block p-4 pl-10 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-slate-600 focus:border-slate-600 outline-none"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-[#1F1F1F]">Search</button>
                    </div>
                </form>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:grid-rows-2">
                    {isLoading && <CardNewsLoading />}
                    {news.map((item: News, index: number) => (
                        <CardNews key={item.url} {...item} index={index}></CardNews>
                    ))}

                </div>
            </div>
        </Layout>
    )
}

export default Home