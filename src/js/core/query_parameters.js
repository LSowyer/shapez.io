const queryString = require("query-string");
const options = queryString.parse(location.search);

export let queryParamOptions = {
    embedProvider: null,
    abtVariant: null,
    campaign: null,
};

if (options.embed) {
    queryParamOptions.embedProvider = options.embed;
}

if (options.abtVariant) {
    queryParamOptions.abtVariant = options.abtVariant;
}
if (options.utm_campaign) {
    queryParamOptions.campaign = options.utm_campaign;
}
