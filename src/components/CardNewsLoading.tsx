import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardNewsLoading = () => {
    return (
        <>
            <div className="w-full h-96 md:col-span-2 lg:row-span-2 lg:h-full">
                <Skeleton containerClassName="flex-1" width={'100%'} height={'100%'} />
            </div>
            <div className="w-full">
                <Skeleton containerClassName="flex-1" width={'100%'} height={200} />
                <Skeleton count={2} />
            </div>
            <div className="w-full">
                <Skeleton containerClassName="flex-1" width={'100%'} height={200} />
                <Skeleton count={2} />
            </div>
            <div className="w-full">
                <Skeleton containerClassName="flex-1" width={'100%'} height={200} />
                <Skeleton count={2} />
            </div>
            <div className="w-full">
                <Skeleton containerClassName="flex-1" width={'100%'} height={200} />
                <Skeleton count={2} />
            </div>
        </>
    )
}

export default CardNewsLoading