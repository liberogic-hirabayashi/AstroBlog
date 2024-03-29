import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client=createClient({
    serviceDomain:import.meta.env.SERVICE_DOMAIN,
    apiKey:import.meta.env.API_KEY,

})

export const getBlogs=async function(queries:MicroCMSQueries){
    return await client.get({endpoint:"blogs",queries})

}
export const getBlogsDetail=async function(blogid:string, queries?:MicroCMSQueries){
    return await client.getListDetail({endpoint:"blogs",contentId:blogid,queries})
}