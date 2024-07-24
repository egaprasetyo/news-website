import { CardProps, HistoryNews } from '../data/data';

const CardNews = ({ source, author, title, description, url, urlToImage, publishedAt, index }: CardProps) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options = { weekday: 'short', day: 'numeric', month: 'long' } as const;
        const formattedDate = date.toLocaleDateString('id-ID', options);
        const formattedTime = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} ${formattedTime.replace(':', '.')}`;
    };

    const handleClick = () => {
        const newsItem = { title, url, urlToImage };
        const history = JSON.parse(localStorage.getItem('newsHistory') || '[]');
        const isDuplicate = history.some((item: HistoryNews) => item.url === newsItem.url);

        if (!isDuplicate) {
            history.unshift(newsItem);
            localStorage.setItem('newsHistory', JSON.stringify(history));
        }
    };

    return (
        <>
            {index % 5 === 0 ?
                (
                    <div className={`relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500 rounded-xl ${index % 10 === 9 ? '' : ''}`} style={{ backgroundImage: `url(${urlToImage || 'https://picsum.photos/200/300'})` }}>
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900 rounded-xl"></div>
                        <h2 className="z-10 p-5">
                            <div className="block text-sm mb-1">
                                <span className="text-white font-semibold">{source.name} • </span>
                                <span className="text-slate-400">{formatDate(publishedAt)}</span>
                            </div>
                            <a onClick={handleClick} href={url} target="_blank" className="font-medium text-md group-hover:underline lg:text-2xl lg:font-bold dark:text-gray-100">{title}</a>
                        </h2>
                    </div>
                ) : (
                    <div className="relative flex flex-col items-start w-full">
                        <img src={urlToImage || 'https://picsum.photos/400/270'} className="rounded-xl" alt="" />
                        <div className="p-4">
                            <div className="text-sm mb-1">
                                <span className="font-semibold text-red-700">{source.name}</span>
                                <span className="text-slate-400"> • </span>
                                <span className="text-slate-400 text-xs">{formatDate(publishedAt)}</span>
                            </div>
                            <a onClick={handleClick} href={url} target="_blank" className="font-medium text-md hover:underline lg:text-xl lg:font-bold">{title}</a>
                            <p className="pt-3 pb-1 text-slate-600">{description}</p>
                            <span className="text-xs text-slate-400">Author: {author || 'Unknown'}</span>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CardNews