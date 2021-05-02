import sanityClient from '@sanity/client';
//once project id hosted , need to add hosted url in manage.sanity.io
export default sanityClient({
    projectId:"v0n5lrrb",
    dataset:"production"
})