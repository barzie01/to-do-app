export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  headerIcon: 'rocket',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

export const info = {
  title: 'About me',
  image: 'https://i.postimg.cc/tgJqbxSg/cat-3695213-1920.jpg',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum voluptate consequuntur, fugiat perspiciatis nemo! Placeat neque, qui repellat tempore nulla eius quo laboriosam doloremque fuga pariatur, ipsa quam laborum? Ipsam quibusdam cupiditate accusantium architecto eum deleniti, laboriosam ipsa ducimus, cumque, eveniet consequatur at dolore nulla porro ullam doloribus ut consectetur reiciendis! Magni minus at doloribus nulla, praesentium alias dicta. Quaerat deleniti numquam facere sapiente provident dolorum omnis fuga ratione tempore quis temporibus in voluptatibus non dignissimos, perferendis optio cumque officiis incidunt eius earum assumenda consequatur culpa neque repellendus! Harum?Aperiam reprehenderit, earum voluptas magni quaerat iure sapiente accusamus commodi, fugit voluptates excepturi vero tenetur, sequi labore iusto perferendis qui? Autem aspernatur ad dicta recusandae, repudiandae molestiae quibusdam atque. Minima?Eveniet, quae ratione dolor eaque velit rem odio voluptatibus temporibus atque sit illum blanditiis tenetur vero? Culpa laudantium dolores magni tenetur, sequi necessitatibus amet ipsa eum quasi dolorum eligendi ipsam?',
};

export const faq = {
  title: 'FAQ',
  image: 'https://i.postimg.cc/7Zs4KLHr/rocket-4993708-1280.png',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum voluptate consequuntur, fugiat perspiciatis nemo! Placeat neque, qui repellat tempore nulla eius quo laboriosam doloremque fuga pariatur, ipsa quam laborum? Ipsam quibusdam cupiditate accusantium architecto eum deleniti, laboriosam ipsa ducimus, cumque, eveniet consequatur at dolore nulla porro ullam doloribus ut consectetur reiciendis! Magni minus at doloribus nulla, praesentium alias dicta. Quaerat deleniti numquam facere sapiente provident dolorum omnis fuga ratione tempore quis temporibus in voluptatibus non dignissimos, perferendis optio cumque officiis incidunt eius earum assumenda consequatur culpa neque repellendus! Harum?Aperiam reprehenderit, earum voluptas magni quaerat iure sapiente accusamus commodi, fugit voluptates excepturi vero tenetur, sequi labore iusto perferendis qui? Autem aspernatur ad dicta recusandae, repudiandae molestiae quibusdam atque. Minima?Eveniet, quae ratione dolor eaque velit rem odio voluptatibus temporibus atque sit illum blanditiis tenetur vero? Culpa laudantium dolores magni tenetur, sequi necessitatibus amet ipsa eum quasi dolorum eligendi ipsam?',
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Places to visit <sup>soon!<sup>',
    description: 'Beautiful places I want to visit!',
    image: 'https://i.postimg.cc/0jBpxXJN/camp-4363073-1280.png',
  },
  {
    id: 'list-3',
    title: 'Dishes to cook <sup>soon!</sup>',
    description: 'Delicious food I want to try!',
    image: 'https://i.postimg.cc/bvh1ztd1/chef-hat-309146-1280.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
