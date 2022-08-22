import { faker } from '@faker-js/faker';

const stafflist = [
    {
        avatar: faker.image.city(),
        book: faker.company.name(),
        name: "4.5  "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "JS6"
    },
    {
        avatar: faker.image.abstract(),
        book: faker.company.name(),
        name: "5.0  "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "React Router"
    },
    {
        avatar: faker.image.cats(),
        book: faker.company.name(),
        name: "4.7  "+faker.name.firstName() + " "+ faker.name.firstName(),
        description: "Express"
    }
]

export default stafflist