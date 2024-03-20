import { format, addDays } from "date-fns";

it('', () => {
    const post_1: Post = {
        text: 'This is a very interesting post',
        author: 'Markus Kaleta, blondata kotleta',
        socialMedia: SocialMedia.INSTAGRAM,
        id: 56,
        scheduledDate: new Date(),
        hashtags: ['nature', 'blog', 'lifestyle']
    }
    const post_2: Post = {
        text: 'This is a very interesting post',
        author: 'demotivacia',
        socialMedia: SocialMedia.FACEBOOK,
        id: 52,
        scheduledDate: new Date(),
        hashtags: ['motivation', 'blog', 'lifestyle']
    }
    cy.log(getFormattedDate(post_2))
})

function getFormattedDate(post: Post): string {
    return format(post.scheduledDate, "d.M.yyyy")
}

interface Post {
    text: string;
    author: string
    socialMedia: SocialMedia;
    id: number;
    scheduledDate: Date
    hashtags: string[];
}

enum SocialMedia {
    INSTAGRAM = "Instagram",
    FACEBOOK = "Facebook"
}