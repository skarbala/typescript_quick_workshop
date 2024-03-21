import { format, addDays } from "date-fns";

it('', () => {
    const post_1: Post = {
        text: 'This is a very interesting post',
        socialMedia: SocialMedia.INSTAGRAM,
        id: 56,
        scheduledDate: new Date(),
    }
    const post_2: Post = {
        text: 'This is a very interesting post',
        socialMedia: SocialMedia.FACEBOOK,
        id: 52,
        scheduledDate: new Date(),
    }
    cy.log(getFormattedDate(post_2))
})

function getFormattedDate(post: Post): string {
    return format(post.scheduledDate, "d.M.yyyy")
}

interface Post {
    text: string;
    socialMedia: SocialMedia;
    id: number;
    scheduledDate: Date
}

enum SocialMedia {
    INSTAGRAM = "Instagram",
    FACEBOOK = "Facebook"
}