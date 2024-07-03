import type {ComicResponse} from '$lib/types';

const getComicId = async (email: string): Promise<string> => {
    const searchParams = new URLSearchParams({email});
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${searchParams}`);
    return response.text();
};

const getComicData = async (comicId: string): Promise<ComicResponse> => {
    const comicSearch = new URLSearchParams({id: comicId});
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${comicSearch}`);
    return response.json();
};

export {getComicId, getComicData};