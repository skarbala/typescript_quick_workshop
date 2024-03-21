import { format } from "date-fns";

it('working with interfaces', () => {
    //TODO 1: these 2 objects are bit messy, think about how the structure can be unified
    //TODO 2: create an interface that would define shape of these 2 objects
    const post_1 = {
        statusText: 'This is a very interesting post',
        //TODO 3: for social media, create an enum and define fixed social media
        //more about enums here https://www.typescriptlang.org/docs/handbook/enums.html
        socialMedia: 'Instagram',
        id: 56,
        scheduledDate: new Date(),
        hashtags: ['nature', 'blog', 'lifestyle']
    }
    const post_2 = {
        text: 'This is a very interesting post',
        socialMedia: 'Facebook',
        postId: 52,
        postDate: new Date(),
        hashtags: ['motivation', 'blog', 'lifestyle']
    }
    cy.log(getFormattedDate(post_2))
})
//TODO 4: update this function = define
function getFormattedDate(scheduledDate) {
    return format(scheduledDate, "d.M.yyyy")
}
