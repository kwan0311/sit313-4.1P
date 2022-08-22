import { faker } from '@faker-js/faker';

const stafflist = [
    {
        avatar: faker.image.animals(),
        book: faker.company.name(),
        name: "4.9  "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "React"
    },
    {
        avatar: faker.image.business(),
        book: faker.company.name(),
        name: "4.3  "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "Vue"
    },
    {
        avatar: faker.image.food(),
        book: faker.company.name(),
        name:"4.8  "+ faker.name.firstName() + " "+ faker.name.firstName(),
        description: "HTML"
    }
]

export default stafflist