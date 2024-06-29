const email = 'n.timofeev@innopolis.university';

interface ComicResponse {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}


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

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const displayComic = (comic: ComicResponse) => {
    const comicDate = new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day));
    const titleElement = document.querySelector('.comic-title');
    const dateElement = document.querySelector('.comic-date');
    const imgElement = document.querySelector('.comic-img') as HTMLImageElement;

    if (titleElement) titleElement.textContent = comic.safe_title;
    if (dateElement) dateElement.textContent = comicDate.toLocaleDateString();
    if (imgElement) {
        imgElement.src = comic.img;
        imgElement.alt = comic.alt;
    }

    titleElement?.classList.add('visible');
    dateElement?.classList.add('visible');
    imgElement?.classList.add('visible');

    const backButton = document.querySelector('.back-button') as HTMLElement;
    if (backButton) backButton.style.visibility = 'visible';

    document.title = `Comic: ${comic.safe_title}`;
};

const removeLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) loader.remove();
};

const init = async () => {
    try {
        const comicId = await getComicId(email);
        const [comic] = await Promise.all([getComicData(comicId), delay(1500)]);
        displayComic(comic);
    } catch (error) {
        console.error('Error fetching the comic:', error);
    } finally {
        removeLoader();
    }
};

document.addEventListener("DOMContentLoaded", init);
