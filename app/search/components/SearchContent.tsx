"use client";

import { Song } from "@/types/types";
import useOnPlay from "@/hooks/useOnPlay";
import ListSongs from "@/components/LikesdSongs";

interface SearchContentProps {
    songs: Song[];
}

/**
 * Renders the search results.
 * If there are no search results, a message will be displayed.
 * Otherwise, the list of songs will be displayed.
 *
 * @param songs (Song[]): list of songs (search results
 * @returns (React.FC): list of songs with like buttons
 */

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
    const onPlay = useOnPlay(songs);
    return <ListSongs songs={songs} message="No songs found" onPlay={onPlay} />;
};

export default SearchContent;