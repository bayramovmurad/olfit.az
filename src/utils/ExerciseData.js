import axios from "axios";



export const exerciseOptions = {
    method: 'GET',
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: { limit: '1323' },
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
        
    }
};

export const Data = async (url, exerciseOptions) => {
    const res = await axios(url, exerciseOptions);
    const data = await res.data;

    return data;
};
