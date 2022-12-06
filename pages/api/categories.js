export async function getCategoryPoster(category) {
    const details = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MOVIE_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=' + category + '&with_watch_monetization_types=flatrate')
    const data = await details.json();
    return 'https://image.tmdb.org/t/p/w185' + data.results[0].poster_path
}

export async function getCategories() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.MOVIE_KEY + '&language=en-US')
    const data = await res.json();

    let newData = await Promise.all(data.genres.map(async (i) => {return [i.id, i.name, await getCategoryPoster(i)]}))
    return newData
}

export default async (req, res) => {
    try {
        const categories = await getCategories();
        return res.status(201).json({ errorText: '', data:  categories});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ errorText: "Could not retrieve movie categories." });
    }
}