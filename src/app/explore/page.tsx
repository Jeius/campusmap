import Search from "@/app/explore/search";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const InfoSheet = dynamic(() => import('@/components/info-sheet'), { ssr: false });

type ExploreTabProps = {
    params: {},
    searchParams: { [key: string]: string | string[] | undefined };
};

const ExploreTab = async () => {
    return (
        <>
            <section role='search' className={cn(
                'relative w-full max-w-xl place-self-center',
                'flex flex-col p-3 z-10 pointer-events-auto',
            )}>
                <Search />
            </section >
            <div className="flex flex-grow" />
            <InfoSheet />
        </>
    );
};

export default ExploreTab;
