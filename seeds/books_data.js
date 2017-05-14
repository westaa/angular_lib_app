exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),
    // Inserts seed entries
    knex('books').insert({
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'fiction',
        description: "The protagonist of the novel, Winston Smith, is a member of the Outer Party, who works for the Ministry of Truth (or Minitrue in Newspeak), which is responsible for propaganda and historical revisionism. His job is to rewrite past newspaper articles, so that the historical record always supports the party line.",
        image_url: 'https://s-media-cache-ak0.pinimg.com/originals/1e/f0/43/1ef0433312fab886466cb97a03cf8fa1.jpg'
    }),
    knex('books').insert({
      title: 'Slaughterhouse-Five',
      author: 'Kurt Vonnegut',
      year: 1969,
      genre: 'science fiction',
      description: "Slaughterhouse-Five, or The Children's Crusade: A Duty-Dance with Death (1969) is a satirical novel by Kurt Vonnegut about World War II experiences and journeys through time of Billy Pilgrim, from his time as an American soldier and chaplain's assistant, to postwar and early years.",
      image_url: 'https://liquidprose.files.wordpress.com/2008/10/slaughterhouse_five.jpg'
    }),
    knex('books').insert({
      title: 'Cat\'s Cradle',
      author: 'Kurt Vonnegut',
      year: 1963,
      genre: 'science fiction',
      description: "Cat's Cradle is the fourth novel by American writer Kurt Vonnegut, first published in 1963. It explores issues of science, technology, and religion, satirizing the arms race and many other targets along the way. ... The title of the book derives from the string game Cat's Cradle. ",
      image_url: 'https://upload.wikimedia.org/wikipedia/en/e/e6/CatsCradle(1963).jpg'
    }),
    knex('books').insert({
      title: 'The Giver',
      author: 'Lois Lowry',
      year: 1993,
      genre: 'dystopian fiction',
      description: "Jonas receives the memories of the past, good and bad, from the current Receiver, a wise old man who tells Jonas to call him the Giver. The Giver transmits memories by placing his hands on Jonas's bare back. The first memory he receives is of an exhilarating sled ride.",
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/81cJChEQjSL.jpg'
    }),
    knex('books').insert({
      title: 'Sword of the Lictor',
      author: 'Gene Wolfe',
      year: 1981,
      genre: 'dystopian fiction',
      description: "Having completed the journey he was sent upon when he was exiled from the Citadel, Severian takes up his position as the Lictor (or Master of Chains) of the city of Thrax. His lover Dorcas falls into depression, in part because of her position as the partner of a reviled and feared figure in a strange city. She is also becoming increasingly upset by her mysterious past, and convinced that she must unravel its secrets, however disturbing they may turn out to be.",
      image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/TheSwordOfTheLictor.jpg/220px-TheSwordOfTheLictor.jpg'
    }),
    knex('books').insert({
      title: 'A Storm of Swords',
      author: 'George RR Martin',
      year: 2000,
      genre: 'fantasy',
      description: "A Storm of Swords picks up the story slightly before the end of its predecessor, A Clash of Kings. The Seven Kingdoms of Westeros are still in the grip of the War of the Five Kings,[6] wherein Joffrey Baratheon and Stannis Baratheon compete for the Iron Throne while Robb Stark and Balon Greyjoy declare their independance. Meanwhile, a large host of wildlings approach the Wall under the leadership of Mance Rayder, the self-proclaimed 'King Beyond the Wall', with only the undermanned Night's Watch in opposition. Finally, Daenerys Targaryen approaches Pentos.",
      image_url: 'http://georgerrmartin.com/gallery/art/swords05b.jpg'
    }),
    knex('books').insert({
      title: 'Great Expectations',
      author: 'Charles Dickens',
      year: 1861,
      genre: 'fantasy',
      description: "On Christmas Eve, around 1812,[11] Pip, an orphan who is about seven years old, encounters an escaped convict in the village churchyard, while visiting the graves of his parents and siblings. Pip now lives with his abusive elder sister and her kind husband Joe Gargery, a blacksmith. The convict scares Pip into stealing food and a file. Early on Christmas morning Pip returns with the file, a pie and brandy. During Christmas dinner, at the moment Pip's theft is about to be discovered, soldiers arrive and ask Joe to repair some shackles. Joe and Pip accompany them as they recapture the convict who is fighting with another escaped convict. The first convict confesses to stealing food from the smithy.",
      image_url: 'https://s-media-cache-ak0.pinimg.com/736x/2b/09/88/2b09889e3262e42c6e30b9c3d7b5a18d.jpg'
    }),
    knex('books').insert({
      title: 'Shane',
      author: 'Jack Schaefer',
      year: 1949,
      genre: 'western',
      description: "Shane is a western novel by Jack Schaefer published in 1949. It was initially published in 1946 in three parts in Argosy magazine, and originally titled Rider from Nowhere.",
      image_url: 'http://oldwesternboy.com/wp-content/uploads/2009/07/shane.jpg'
    }),
    knex('books').insert({
      title: 'Strangers in Their Own Land',
      author: 'Arlie Russell Hochschild',
      year: 2016,
      genre: 'nonfiction',
      description: "From the bestselling author of The Second Shift and The Outsourced Self, a brilliant new book that plumbs our deep political divide and asks the question: how does the world look from the heart of the right?",
      image_url: 'http://cdn.newsday.com/polopoly_fs/1.12322701.1473973190!/httpImage/image.jpeg_gen/derivatives/display_600/image.jpeg'
    }),
    knex('books').insert({
      title: 'The Theory of Poker',
      author: 'David Sklansky',
      year: 1987,
      genre: 'nonfiction',
      description: "Discusses theories and concepts applicable to nearly every variation of the game, including five-card draw (high), seven-card stud, hold 'em, lowball draw, and razz (seven-card lowball stud). ",
      image_url: 'http://img.rankplan.net/img-2000/images/1097.jpg'
    }),
    knex('books').insert({
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      year: 2014,
      genre: 'fiction',
      description: "This thoroughly revised edition reflects the current state of JavaScript and Web browsers, with new material, such as a chapter on code performance in JavaScript, and expanded coverage of recursion and closures. Haverbeke immerses readers in example code from the start, while exercises and full-chapter projects give you hands-on experience with writing their own programs. ",
      image_url: 'http://eloquentjavascript.net/img/cover.png'
    }),
    knex('books').insert({
      title: 'Hatchet',
      author: 'Gary Paulsen',
      year: 1987,
      genre: 'fiction',
      description: "Hatchet is a 1987 Newbery Honor-winning young-adult wilderness survival novel written by American writer Gary Paulsen. It is the first novel of five in the Hatchet series.",
      image_url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Hatchet.jpg'
    })
  );
};
