const CONFIG = {
    SearchIndexName: process.env["SearchIndexName"] || "cosmos-search-index",
    SearchApiKey: process.env["SearchApiKey"] || "2291A1ABCD2F478768350D6FFB6F2D8A",
    SearchServiceName: process.env["SearchServiceName"] || "srch-spg",
    SearchFacets: process.env["SearchFacets"] || "category_names*,brand", 
}
if (!CONFIG.SearchIndexName || !CONFIG.SearchApiKey || !CONFIG.SearchServiceName) throw Error("./config.js::Cognitive Services key is missing");

module.exports = { CONFIG };
