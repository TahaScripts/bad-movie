import { getCategories } from "./categories";

export default async (req, res) => {
    const category = req.body.category;
    const page = req.body.page ? req.body.page : 1

    const categoryID = (await getCategories()).filter(item => item[1].toLowerCase() == category);

    try {
        const details = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + process.env.MOVIE_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=' + categoryID + '&with_watch_monetization_types=flatrate&page=' + page)
        const detailJSON = await details.json();
        return res.status(201).json({ errorText: '', data: detailJSON});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ errorText: 'Could not retrieve movies.'});

    }
}