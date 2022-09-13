import country from "../models/country.js";
import countries from "../data/countries.js";
import state from "../data/state.js";

export const getCountries = async (req, res) => {
    try {
        res.send(countries);

    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

export const getStates = async (req, res) => {
    try {
        var c = req.body.country_id;
    const result = await state.collection('country_id').find()
    console.log(result);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};