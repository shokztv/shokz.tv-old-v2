import { ReactElement } from "react";
import Header from "../../Header";
import { Video } from "../../../api/@types/Video";
import { usePagination } from "../../../hooks/entryPagination";
import { fetchVideoIds, fetchVideos } from "../../../api/video";
import Pagination from "../../block/Pagination";
import LoadingImage from "../../block/ImageLoader";

export default function VideoList(): ReactElement {
    const {
        page,
        total,
        setPage,
        entries
    } = usePagination<Video>(10, fetchVideoIds, fetchVideos);

    return <>
        <Header title={'Alle Videos'} />

        <Pagination  page={page} total={total} setPage={setPage} />

        <div className={'videoGrid'}>
            {entries.map((video, index) => <div className={'column'} key={(video && video.id) + '-' + index}>
                <a href={video && video.source} target={'_blank'} rel={'noreferrer'}>
                    <div className={'thumbnail'}>
                        <LoadingImage src={video && video.thumbnail} 
                                      webp={video && video.thumbnailWEBP} 
                                      jp2={video && video.thumbnailJP2} />
                    </div>
                </a>
            </div>)}
        </div>

        <Pagination  page={page} total={total} setPage={setPage} />

        <style jsx>{`
            .videoGrid {
                display: flex;
                flex-wrap: wrap;
                margin: -20px;
            }

            .column {
                padding: 20px;
                width: 33%;
            }

            .thumbnail {
                position: relative;
                padding-bottom: 56.2%;
            }
        `}</style>      
    </>;
}