import country from "../models/country.js";
import countries from "../data/countries.js";


export const getCountries = async(req, res) => {
    try {
    res.send(countries);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};