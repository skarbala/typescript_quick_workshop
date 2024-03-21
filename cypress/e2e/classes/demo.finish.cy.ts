import { has } from "cypress/types/lodash";
import { format } from "date-fns";

it('', () => {
    let post_1 = new Post(
        "text",
        "Markus Kaleta, blondata kotleta",
        SocialMedia.FACEBOOK,
        56,
        new Date(),
    )
    let post_2 = new Post(
        'This is a very interesting post',
        'demotivacia',
        SocialMedia.FACEBOOK,
        52,
        new Date(),
    )
    cy.log(post_1.getFormattedDate())
    cy.log((post_2.getFormattedDate()))
})


class Post {
    text: string;
    author: string
    socialMedia: SocialMedia;
    id: number;
    scheduledDate: Date

    getFormattedDate(): string {
        return format(this.scheduledDate, "d.M.yyyy")
    }
    constructor(
        text: string,
        author: string,
        socialMedia: SocialMedia,
        id: number,
        scheduledDate: Date,
    ) {
        this.text = text
        this.author = author
        this.socialMedia = socialMedia
        this.id = id
        this.scheduledDate = scheduledDate
    }
}



enum SocialMedia {
    INSTAGRAM = "Instagram",
    FACEBOOK = "Facebook"
}