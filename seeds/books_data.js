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
