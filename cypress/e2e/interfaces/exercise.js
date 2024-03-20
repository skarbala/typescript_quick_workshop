import { format, addDays } from "date-fns";

it('', () => {
    const post_1 = {
        text: 'This is a very interesting post',
        author: 'Markus Kaleta, blondata kotleta',
        socialMedia: SocialMedia.INSTAGRAM,
        id: 56,
        scheduledDate: new Date(),
        hashtags: ['nature', 'blog', 'lifestyle']
    }
    const post_2 = {
        text: 'This is a very interesting post',
        author: 'demotivacia',
        socialMedia: SocialMedia.FACEBOOK,
        id: 52,
        scheduledDate: new Date(),
        hashtags: ['motivation', 'blog', 'lifestyle']
    }
    cy.log(getFormattedDate(post_2))
})

function getFormattedDate(post) {
    return format(post.scheduledDate, "d.M.yyyy")
}
