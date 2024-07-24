import { useEffect, useState } from "react";
import Layout from "./Layout"

interface HistoryNews {
    title: string;
    url: string;
    urlToImage: string;
}

const History = () => {
    const [historyNews, setHistoryNews] = useState<HistoryNews[]>([]);

    useEffect(() => {
        const storedHistory = localStorage.getItem('newsHistory');
        if (storedHistory) {
            const parsedHistory: HistoryNews[] = JSON.parse(storedHistory);
            const uniqueHistory = Array.from(new Set(parsedHistory.map(item => item.url)))
                .map(url => parsedHistory.find(item => item.url === url)!);
            setHistoryNews(uniqueHistory);
        }
    }, []);

    return (
        <Layout>
            <h1 className="p-5 text-3xl font-bold">History</h1>
            <div className="p-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {historyNews.map((item) => (
                    <div key={item.url} className={`relative flex items-end justify-start w-full text-left bg-center bg-cover h-60 group dark:bg-gray-500 rounded-xl`} style={{ backgroundImage: `url(${item.urlToImage || 'https://picsum.photos/200/300'})` }}>
                        <a href={item.url} target="_blank" className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900 rounded-xl"></a>
                        <h2 className="z-10 p-5">
                            <a href={item.url} target="_blank" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-bold dark:text-gray-100">{item.title}</a>
                        </h2>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default History