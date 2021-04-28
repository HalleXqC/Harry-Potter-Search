const database = [
    {
        name: 'Harry Potter',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Daniel Radcliffe',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
        isFav: false,
        id: 0,
        info: "Harry James Potter is a fictional character and the titular protagonist in J. K. Rowling's series of eponymous novels. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The book and film series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort."
    },
    {
        name: 'Hermione Granger',
        species: 'human',
        gender: 'female',
        faculty: 'Gryffindor',
        actor: 'Emma Watson',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
        isFav:  false,
        id: 1,
        info: "Hermione Jean Granger is a fictional character in J. K. Rowling's Harry Potter series. She first appears in Harry Potter and the Philosopher's Stone, as a new student on her way to Hogwarts. After Harry and Ron save her from a mountain troll in the girls' restroom, she becomes best friends with them and often uses her quick wit, deft recall, and encyclopaedic knowledge to lend aid in dire situations. Rowling has stated that Hermione resembles herself as a young girl, with her insecurity and fear of failure."
    },
    {
        name: 'Ron Weasley',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Rupert Grint',
        image: 'http://hp-api.herokuapp.com/images/ron.jpg',
        isFav:  false,
        id: 2,
        info: "Ronald Bilius Weasley is a fictional character in J. K. Rowling's Harry Potter fantasy novel series. His first appearance was in the first book of the series, Harry Potter and the Philosopher's Stone, as the best friend of Harry Potter and Hermione Granger. He is a member of the Weasley family, a pure blood family that resides in 'The Burrow' outside Ottery St. Catchpole. Being the only member of the three main characters raised in magical society, he also provides insight into the Wizarding World's magical customs and traditions. Along with Harry and Hermione, he is a member of Gryffindor house and is present for most of the action throughout the series."
    },
    {
        name: 'Draco Malfoy',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Tom Felton',
        image: 'http://hp-api.herokuapp.com/images/draco.jpg',
        isFav:  false,
        id: 3,
        info: "Draco Lucius Malfoy is a fictional character in J. K. Rowling's Harry Potter series. He is a student in Harry Potter's year belonging in the Slytherin house. He is frequently accompanied by his two cronies, Vincent Crabbe and Gregory Goyle, who act as henchmen. Draco is characterised as a cowardly bully who tricks and hurts people to get what he wants; nevertheless, he is a cunning user of magic. He was played by Tom Felton in the Harry Potter film series."
    },
    {
        name: 'Minerva McGonagall',
        species: 'human',
        gender: 'female',
        faculty: 'Gryffindor',
        actor: 'Dame Maggie Smith',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
        isFav:  false,
        id: 4,
        info: "Professor Minerva McGonagall is a fictional character in J. K. Rowling's Harry Potter series. Professor McGonagall is a professor at Hogwarts School for Witchcraft and Wizardry and is the head of Gryffindor House and professor of Transfiguration, as well as being the Deputy Headmistress under Albus Dumbledore and a member of the Order of the Phoenix. Following Lord Voldemort's defeat at the hands of her student Harry Potter and the deaths of Headmasters Albus Dumbledore and Severus Snape, McGonagall takes the position of Headmistress. Professor McGonagall was portrayed in the film adaptations by Maggie Smith."
    },
    {
        name: 'Cedric Diggory',
        species: 'human',
        gender: 'male',
        faculty: 'Hufflepuff',
        actor: 'Robert Pattinson',
        image: 'http://hp-api.herokuapp.com/images/cedric.png',
        isFav:  false,
        id: 5,
        info: "Cedric Diggory is a fictional character in J. K. Rowling's Harry Potter series. Cedric is one of the main characters in the fourth book, Harry Potter and the Goblet of Fire, as he represents Hogwarts School of Witchcraft and Wizardry in the Triwizard Tournament, alongside Harry Potter. Cedric is murdered by Peter Pettigrew on Lord Voldemort's orders during Voldemort's resurrection in Little Hangleton. Cedric's death becomes a point of trauma and guilt for Harry and continues to haunt him, which leads him to form Dumbledore's Army as a way to help teach his fellow students to protect themselves in battle."
    },
    {
        name: 'Cho Chang',
        species: 'human',
        gender: 'female',
        faculty: 'Ravenclaw',
        actor: 'Katie Leung',
        image: 'http://hp-api.herokuapp.com/images/cho.jpg',
        isFav:  false,
        id: 6,
        info: "Cho Chang is a Ravenclaw student one year above Harry, and is the Seeker for the Ravenclaw Quidditch team. She is best known for being Harry's first love interest, is described as being 'very pretty' with long dark hair and is frequently accompanied by a group of giggling girls. In Goblet of Fire, Harry's crush on Cho intensifies and he works up the courage to ask her out to the Yule Ball, one of the necessary events in the Triwizard Tournament, but Cho apologises and replies that she had previously accepted Cedric Diggory's offer. Nonetheless, Cho is still kind to Harry, much to his relief, and she refuses to wear one of Draco Malfoy's 'Potter Stinks' badges. She and Cedric maintain their relationship until he is murdered by Peter Pettigrew on Voldemort's orders."
    },
    {
        name: 'Severus Snape',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Alan Rickman',
        image: 'http://hp-api.herokuapp.com/images/snape.jpg',
        isFav:  false,
        id: 7,
        info: "Severus Snape is a fictional character in J. K. Rowling's Harry Potter series. He is an exceptionally skilled wizard whose sarcastic, controlled exterior conceals deep emotions and anguish. A Professor at Hogwarts School of Witchcraft and Wizardry, Snape is hostile to Harry due to his resemblance to his father James Potter. According to the series, James bullied Snape during their time together at Hogwarts. As the series progresses, Snape's character becomes more layered and enigmatic. A central mystery is unravelled concerning his loyalties. Snape dies at the hands of Lord Voldemort in the seventh book, at which time his back story is revealed."
    },
    {
        name: 'Rubeus Hagrid',
        species: 'half-giant',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Robbie Coltrane',
        image: 'http://hp-api.herokuapp.com/images/hagrid.png',
        isFav:  false,
        id: 8,
        info: "Rubeus Hagrid is a fictional character in the Harry Potter book series written by J. K. Rowling. He is introduced in Harry Potter and the Philosopher's Stone as a half-giant and half-human who is the gamekeeper and Keeper of Keys and Grounds of Hogwarts, the primary setting for the first six novels. In the third novel Harry Potter and the Prisoner of Azkaban, Hagrid is promoted to Care of Magical Creatures professor, and is later revealed to be a member of the Order of the Phoenix. A loyal, friendly, softhearted personality who is easily brought to tears, he is also known for his thick West Country accent."
    },
    {
        name: 'Neville Longbottom',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Matthew Lewis',
        image: 'http://hp-api.herokuapp.com/images/neville.jpg',
        isFav:  false,
        id: 9,
        info: "Neville Longbottom is a fictional character in J. K. Rowling's Harry Potter book series. He is described as a round-faced Gryffindor student in the central character Harry Potter's year. Throughout the series, Neville is often portrayed as a bumbling and disorganised character, and a rather mediocre student, though he is highly gifted at Herbology. However, the character's personality appears to undergo a transition after he joins Dumbledore's Army in Harry Potter and the Order of the Phoenix. The encouragement he receives gives him confidence in his magical abilities, turning him into a more competent wizard. Eventually, Neville becomes the leader of Dumbledore's Army during Harry, Ron and Hermione's absence searching for Horcruxes. Neville is instrumental in the downfall of Lord Voldemort and eventually destroys the final Horcrux, which allows Harry to defeat The Dark Lord once and for all. Neville is portrayed in the film adaptations by Matthew Lewis."
    },
    {
        name: 'Luna Lovegood',
        species: 'human',
        gender: 'female',
        faculty: 'Ravenclaw',
        actor: 'Evanna Lynch',
        image: 'http://hp-api.herokuapp.com/images/luna.jpg',
        isFav:  false,
        id: 10,
        info: 'Luna Lovegood is a fictional character in the Harry Potter book series written by J. K. Rowling. The character first appears in Harry Potter and the Order of the Phoenix, in which she is described as having straggly, waist-length dirty-blond hair and a dazed look on her face. Her eyes are "silvery", "misty", and "protuberant" (the last quality serving to give her a "permanently surprised look").'
    },
    {
        name: 'Ginny Weasley',
        species: 'human',
        gender: 'female',
        faculty: 'Gryffindor',
        actor: 'Bonnie Wright',
        image: 'http://hp-api.herokuapp.com/images/ginny.jpg',
        isFav:  false,
        id: 11,
        info: "Ginevra Molly Weasley is a fictional character in J. K. Rowling's Harry Potter novel series. Ginny is introduced in the first book Harry Potter and the Philosopher's Stone, as the youngest sibling and only girl in the Weasley family. She becomes Harry's main love interest and eventually marries him at the conclusion of the series."
    },
    {
        name: 'Sirius Black',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Gary Oldman',
        image: 'http://hp-api.herokuapp.com/images/sirius.JPG',
        isFav:  false,
        id: 12,
        info: "Sirius Black is a character in J. K. Rowling's Harry Potter series. Sirius was first mentioned briefly in Harry Potter and the Philosopher's Stone as a wizard who lent Rubeus Hagrid a flying motorbike shortly after Lord Voldemort killed James and Lily Potter. His character becomes prominent in Harry Potter and the Prisoner of Azkaban, in which he is the titular prisoner, and is also revealed to be the godfather of the central character Harry Potter. He is portrayed in the film adaptations by Gary Oldman."
    },
    {
        name: 'Remus Lupin',
        species: 'werewolf',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'David Thewlis',
        image: 'http://hp-api.herokuapp.com/images/lupin.jpg',
        isFav:  false,
        id: 13,
        info: "Remus John Lupin is a fictional character in the Harry Potter book series written by J. K. Rowling. He first appears in Harry Potter and the Prisoner of Azkaban as the new Defence Against the Dark Arts professor. Lupin remains in the story long after resigning from this post as a friend to the central character, Harry Potter. In the films, he is portrayed by David Thewlis as an adult, and James Utechin as a teenager."
    },
    {
        name: 'Arthur Weasley',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Mark Williams',
        image: 'http://hp-api.herokuapp.com/images/arthur.jpg',
        isFav:  false,
        id: 14,
        info: "The Order of the Phoenix is a secret organisation in the Harry Potter series of fiction books written by J. K. Rowling. Founded by Albus Dumbledore to fight Lord Voldemort and his followers, the Death Eaters, the Order lends its name to the fifth book of the series, Harry Potter and the Order of the Phoenix."
    },
    {
        name: 'Bellatrix Lestrange',
        species: 'human',
        gender: 'female',
        faculty: 'Slythering',
        actor: 'Helena Bonham Carter',
        image: 'http://hp-api.herokuapp.com/images/bellatrix.jpg',
        isFav: false,
        id: 15,
        info: "Bellatrix Lestrange (née Black) is a fictional character in the Harry Potter book series written by J. K. Rowling. She evolved from an unnamed periphery character in Harry Potter and the Goblet of Fire into a major antagonist in subsequent novels. In the final instalment of the story, Rowling established her as Lord Voldemort's 'last, best lieutenant'. Bellatrix was the first female Death Eater introduced in the books, and remained the only woman explicitly identified as such until Harry Potter and the Half-Blood Prince."
    },
    {
        name: 'Lord Voldemort',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Ralph Fiennes',
        image: 'http://hp-api.herokuapp.com/images/voldemort.jpg',
        isFav:  false,
        id: 16,
        info: "Voldemort is the archenemy of Harry Potter, who according to a prophecy has 'the power to vanquish the Dark Lord'. He attempts to murder the boy, but instead kills his parents, Lily and James Potter, and leaves Harry with a scar on his head in the shape of a lightning bolt. Nearly every witch or wizard dares not utter his name and refers to him instead with such monikers as 'You-Know-Who', 'He Who Must Not Be Named', or 'the Dark Lord'. Voldemort's obsession with blood purity signifies his aim to rid the wizarding world of Muggle (non-magical) heritage and to conquer both worlds, Muggle and wizarding, to achieve pure-blood dominance. Through his mother's family, he is the last descendant of the wizard Salazar Slytherin, one of the four founders of Hogwarts School of Witchcraft and Wizardry. He is the leader of the Death Eaters, a group of evil wizards and witches dedicated to ridding the Wizarding World of Muggles and establishing Voldemort as its supreme ruler."
    },
    {
        name: 'Horace Slughorn',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Jim Broadbent',
        image: 'http://hp-api.herokuapp.com/images/slughorn.JPG',
        isFav:  false,
        id: 17,
        info: "Horace Slughorn is the long-serving Potions teacher and Head of Slytherin House since at least the 1940s, until his retirement after the 1981–82 school year. Following his retirement and the resurgence of Voldemort, Slughorn goes into hiding, concealing all knowledge of his whereabouts from both sides in the growing conflict in the wizarding world. However, after moving Snape to Defence Against the Dark Arts, Dumbledore locates Slughorn and uses Harry as incentive to convince him to return to teaching Potions. Slughorn is described as preferring to be a 'back-seat driver', obtaining things he desires by using his contacts, particularly students whom he has invited into the 'Slug Club', a group of students favoured by Slughorn, based either on their connections to important people (a type of cronyism) or on his belief that they have talents that will make them important and famous themselves when they leave school (meritocracy)."
    },
    {
        name: 'Kingsley Snacklebolt',
        species: 'human',
        gender: 'male',
        faculty: '',
        actor: 'George Harris',
        image: 'http://hp-api.herokuapp.com/images/kingsley.jpg',
        isFav:  false,
        id: 18,
        info: "Kingsley Shacklebolt is a senior Auror who acts as informer for the Order within the Ministry of Magic. He is first introduced in Harry Potter and the Order of the Phoenix, when he volunteers to be one of the members of the Advance Guard that escorted Harry from the Dursleys' home to Number 12, Grimmauld Place. Kingsley is in charge of the search for Sirius in the Ministry; however, knowing Sirius is innocent, he is supplying the Ministry false information that Sirius is in Tibet. He is present in the scene of the fifth book when Harry is confronted about Dumbledore's Army, after Marietta Edgecombe betrays it to Dolores Umbridge. Kingsley swiftly modifies Marietta's memory, but to avoid suspicion from the Ministry, Dumbledore is forced to hex him too as he flees."
    },
    {
        name: 'Dolores Umbridge',
        species: 'human',
        gender: 'female',
        faculty: 'Slytherin',
        actor: 'Imelda Staunton',
        image: 'http://hp-api.herokuapp.com/images/umbridge.jpg',
        isFav:  false,
        id: 19,
        info: "Dolores Jane Umbridge is a fictional character from the Harry Potter series created by J.K. Rowling. The character is the primary antagonist of the fifth novel Harry Potter and the Order of the Phoenix and was stationed at Hogwarts by the Ministry of Magic to take power away from Harry Potter and Albus Dumbledore, who were informing the Wizarding World of Lord Voldemort's return. While at Hogwarts, Umbridge grows in power and is appointed 'High Inquisitor' by the Minister of Magic in an attempt to control the school. Despite being assigned as the Defence Against the Dark Arts teacher, Umbridge refuses to teach anything practical in the subject, which leads to the formation of Dumbledore's Army as a way for the students to learn how to defend themselves. Umbridge is described as a fat, toad-like woman, with a wide, slack mouth, and a large bow."
    },
    {
        name: 'Lucius Malfoy',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Jason Isaacs',
        image: 'http://hp-api.herokuapp.com/images/lucius.jpg',
        isFav:  false,
        id: 20,
        info: "Lucius Malfoy is a Death Eater, head of a wealthy pure-blood wizarding family and a psychopath; he lives with his wife Narcissa Malfoy (née Black) and their son Draco at the Malfoy Manor in Wiltshire. Lucius was a school governor of Hogwarts before being sacked, and has very close connections at the Ministry of Magic. To maintain his reputation and influence, he makes donations to the Ministry, to charity, and to St Mungo's Hospital. He was educated at Hogwarts, where he was a prefect in Slytherin House."
    },
    {
        name: 'Vincent Crabbe',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Jamie Waylett',
        image: 'http://hp-api.herokuapp.com/images/crabbe.jpg',
        isFav:  false,
        id: 21,
        info: "Vincent Crabbe and Gregory Goyle are Slytherin students in Harry's year; both of their fathers, Crabbe Sr and Goyle Sr, are Death Eaters. Due to their size and strength, the pair act as Draco Malfoy's minions and serve 'to do Malfoy's bidding', especially to intimidate fellow students. Both are entirely lacking in introspection or curiosity, though Crabbe is shown to be significantly smarter than Goyle. They seem unable to make up their own minds or to see things their own way."
    },
    {
        name: 'Gregory Goyle',
        species: 'human',
        gender: 'male',
        faculty: 'Slytherin',
        actor: 'Josh Herdman',
        image: 'http://hp-api.herokuapp.com/images/goyle.jpg',
        isFav:  false,
        id: 22,
        info: "Vincent Crabbe and Gregory Goyle are Slytherin students in Harry's year; both of their fathers, Crabbe Sr and Goyle Sr, are Death Eaters. Due to their size and strength, the pair act as Draco Malfoy's minions and serve 'to do Malfoy's bidding', especially to intimidate fellow students. Both are entirely lacking in introspection or curiosity, though Crabbe is shown to be significantly smarter than Goyle. They seem unable to make up their own minds or to see things their own way."
    },
    {
        name: 'Mrs Norris',
        species: 'cat',
        gender: 'female',
        faculty: '',
        actor: 'Maxime, Atlanis and Tommy the cats',
        image: 'http://hp-api.herokuapp.com/images/norris.JPG',
        isFav:  false,
        id: 23,
        info: "Filch has a cat named Mrs Norris to whom he has a particular and possessive attachment. She acts as a hallway monitor or spy for Filch. If she observes students engaging in suspicious activity or out of bed after curfew, she finds Filch and he arrives in seconds. She has been known to follow Hagrid everywhere he goes in the school, apparently under Filch's orders. According to J.K. Rowling, there is nothing particularly magical about Mrs Norris, other than her being 'just an intelligent (and unpleasant) cat.' It's the ambition of many Hogwarts students to 'give her a good kick'. In the Chamber of Secrets incident, Mrs Norris is temporarily petrified by the Basilisk, which causes Filch extreme distress."
    },
    {
        name: 'Argus Filch',
        species: 'human',
        gender: 'male',
        faculty: '',
        actor: 'David Bradley',
        image: 'http://hp-api.herokuapp.com/images/filch.jpg',
        isFav:  false,
        id: 24,
        info: "Argus Filch is the caretaker of Hogwarts. While he is not an evil character, he is ill-tempered, which makes him unpopular with the student body, and occasionally causes tension or exasperation with teachers and other staff. His knowledge of the secrets and short-cuts of the castle is almost unparalleled, except perhaps by the users of the Marauder's Map (the Weasley twins, Harry, Ron and Hermione), and Voldemort himself. He tends to favor almost sadistically harsh punishments, and gleefully allies himself with Umbridge when she prescribes such punishments on students. He has an obsessive dislike of mud, animate toys, and all other things that might interfere with his desire for an immaculately clean and orderly Hogwarts. He is also portrayed as having a constant antagonism towards Peeves the poltergeist and often tells Dumbledore that Peeves should be thrown out of Hogwarts. He also likes to wander Hogwarts corridors at night, presumably in the hope of catching a student out of bed."
    },
    {
        name: 'Fred Weasley',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'James Phelps',
        image: 'https://pbs.twimg.com/profile_images/1334581987030523916/BoGhYhc6.jpg',
        isFav:  false,
        id: 25,
        info: "Fred and George Weasley are fictional characters in the Harry Potter book series written by J. K. Rowling. The characters are the identical twin brothers of the Weasley family, making them the older brothers to Ron and Ginny and friends of Harry Potter. They are initial members of Dumbledore's Army later joining the Order of the Phoenix after their departure from Hogwarts. They are also the founders of Weasleys' Wizard Wheezes in Diagon Alley, a shop they opened post graduation to sell their mischievous pranks. The brothers were played by identical twins James and Oliver Phelps."
    },
    {
        name: 'George Weasley',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Oliver Phelps',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/3/34/George.jpg/revision/latest/top-crop/width/360/height/450?cb=20111113145725&path-prefix=ru',
        isFav:  false,
        id: 26,
        info: "Fred and George Weasley are fictional characters in the Harry Potter book series written by J. K. Rowling. The characters are the identical twin brothers of the Weasley family, making them the older brothers to Ron and Ginny and friends of Harry Potter. They are initial members of Dumbledore's Army later joining the Order of the Phoenix after their departure from Hogwarts. They are also the founders of Weasleys' Wizard Wheezes in Diagon Alley, a shop they opened post graduation to sell their mischievous pranks. The brothers were played by identical twins James and Oliver Phelps."
    },
    {
        name: 'Dobby',
        species: 'house-elf',
        gender: 'male',
        faculty: '',
        actor: 'Toby Jones',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/2/2c/File_467021.jpg/revision/latest/top-crop/width/360/height/450?cb=20140310113242&path-prefix=ru',
        isFav:  false,
        id: 27,
        info: "Dobby is the Malfoy family's house-elf. He first appears in Harry Potter and the Chamber of Secrets to discourage Harry from returning to Hogwarts. Dobby later tries to keep Harry away from Hogwarts by magically sealing off the hidden entrance to Platform 9¾, only to be foiled when the protagonists pilot Arthur Weasley's flying Ford Anglia to school. During a Quidditch match, Dobby enchants a Bludger to chase Harry, hoping to cause him enough injury to be sent home; but the Bludger only manages to break Harry's arm. Dobby discloses that when an enslaved house-elf is presented with an article of clothing by his or her master, that house-elf is subsequently set free; and when Harry (after returning from the Chamber of Secrets) discovers that Dobby's master is Lucius Malfoy, he tricks Malfoy into setting Dobby free, a feat that secures him the house-elf's undying loyalty. He was now willing to save Harry Potter no matter if it would mean risking his life, because after all, 'Harry Potter set Dobby free!'"
    },
    {
        name: 'Narcissa Malfoy',
        species: 'human',
        gender: 'female',
        faculty: 'Slytherin',
        actor: 'Helen McCrory',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/c/c3/HnG5xqtMlyk.jpg/revision/latest/top-crop/width/360/height/450?cb=20151112205319&path-prefix=ru',
        isFav:  false,
        id: 28,
        info: "Narcissa Malfoy, born Narcissa Black to Cygnus Black III and Druella Rosier, is the youngest of three sisters, her older sisters being Bellatrix Lestrange and Andromeda Tonks. She is a cousin of Sirius and Regulus Black and an aunt to Nymphadora Tonks, Andromeda's daughter. Narcissa attended Hogwarts, where she was in Slytherin. She later married Lucius Malfoy, with whom she has one son, Draco, of whom she is extremely protective. Narcissa is first described as a tall, slim blonde who would have been attractive if not for 'a look that suggested there was a nasty smell under her nose'. Although Narcissa certainly seems to share the Blacks' and her husband's views on blood purity on the outside, her actions indicate she is far more concerned about the welfare of her family than helping Voldemort."
    },
    {
        name: 'Gellert Grindelwald',
        species: 'human',
        gender: 'male',
        faculty: 'School',
        actor: 'Johnny Depp',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/7/76/Gellert_Grindelwald_publicity_still.jpg/revision/latest?cb=20190713163752',
        isFav:  false,
        id: 29,
        info: "Gellert Grindelwald is a dark wizard who, on a list of 'Most Dangerous Dark Wizards of All Time,' would be second only to Voldemort, according to Rita Skeeter's book The Life and Lies of Albus Dumbledore. His name is first mentioned in Philosopher's Stone on a Chocolate Frog card which notes that Dumbledore defeated Grindelwald in 1945."
    },
    {
        name: 'Pansy Parkinson',
        species: 'human',
        gender: 'female',
        faculty: 'Slytherin',
        actor: 'Scarlett Byrne',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/8/81/Pansy_Parkinson_infobox.png/revision/latest?cb=20141024191624',
        isFav:  false,
        id: 30,
        info: "Pansy Parkinson is a Slytherin student who is described as pug-faced and frequently seen with an unnamed gang of Slytherin girls, acting as their leader, or at least spokeswoman. She is first mentioned in the Sorting in Philosopher's Stone, and makes her first appearance in Madam Hooch's flying class, during which she teases Parvati Patil for defending Neville Longbottom after Draco steals Longbottom's Remembrall. In Prisoner of Azkaban, she cries and follows Malfoy to the hospital wing after he is attacked by Buckbeak, and continues to fawn over him despite his deliberate exaggeration of the extent of his injury. They attended the Yule Ball together in Goblet of Fire."
    },
    {
        name: 'Sorting Hat',
        species: 'hat',
        gender: 'male',
        faculty: '',
        actor: 'Leslie Phillips',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/6/62/Sorting_Hat.png/revision/latest/scale-to-width-down/1000?cb=20161120072849',
        isFav:  false,
        id: 31,
        info: "The Sorting Hat is a sapient artefact used at Hogwarts, which uses Legilimency (essentially, the ability to read minds) to determine which of the four school houses – Gryffindor, Hufflepuff, Ravenclaw or Slytherin – each new student is to be assigned for their years at Hogwarts. The hat resembles a dilapidated conical leather wide-brimmed wizard's hat, with folds and tears that make it appear to have eyes and a mouth. During the opening banquet at the beginning of each school year, the Hat is placed on every first-year student's head. The Hat announces its choice aloud, and the student joins the selected house. The Hat speaks to the student while they're being sorted and is willing to take the student's preferences into account when it makes its decision. Sometimes it does not have the need to do so: for instance, the Hat barely touched Draco Malfoy's head before sending him to Slytherin. The Sorting Hat had a difficult time placing Harry, almost placing him into Slytherin house before he requested specifically and emphatically not to be. The Hat instead placed him into Gryffindor, the house of his parents."
    },
    {
        name: 'Hedwig',
        species: 'owl',
        gender: 'female',
        faculty: '',
        actor: 'Gizmo',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/1/1e/Hedwig_Snowy_Owl_PM.png/revision/latest/scale-to-width-down/936?cb=20161123234010',
        isFav:  false,
        id: 32,
        info: "Hedwig (d. 27 July 1997) was Harry Potter's pet snowy owl. Hedwig was an eleventh birthday gift from Rubeus Hagrid to Harry. Hagrid purchased her at the Eeylops Owl Emporium. In addition to delivering mail, the typical use owls are put to, Hedwig was also a close companion to Harry. She remained one of his closest friends right up to her death during the Battle of the Seven Potters at the height of the Second Wizarding War."
    },
    {
        name: 'Peter Pettigrew',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Timothy Spall',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/e/e4/Pettigrew_DH1.jpg/revision/latest/scale-to-width-down/252?cb=20160531030113',
        isFav:  false,
        id: 33,
        info: "Peter Pettigrew, nicknamed Wormtail, is the only Death Eater known to have been in a House other than Slytherin (Gryffindor) while at Hogwarts. There, he was a close friend of Sirius Black, James Potter, and Remus Lupin, although he was the least intelligent and least talented of the group. With Sirius and James' help, Pettigrew becomes an Animagus, with the ability to transform at will into a rat. After leaving Hogwarts, Pettigrew joins forces with Voldemort, and in exchange for his own life becomes Voldemort's spy within the Order of the Phoenix, of which Pettigrew is a member. When the Potters know that their son, Harry, is Voldemort's target, Sirius suggests to them to use Pettigrew as Secret-Keeper because he does not believe Voldemort would ever suspect a 'weak, talentless thing' like Pettigrew. Pettigrew betrays the secret to Voldemort, an act that leads to James and Lily's death (and ironically, Voldemort's near-destruction). Sirius seeks revenge on Pettigrew, but during the confrontation, Pettigrew publicly accuses Sirius of the Potters' deaths, murders twelve Muggles, and cuts off his own index finger before transforming into a rat, thereby framing Sirius for the betrayal of the Potters, as well as for his own murder and that of the bystanders. Despite having done these above treacherous acts, Pettigrew genuinely felt remorse to a certain extent for his betrayal. Pettigrew is (seemingly posthumously) awarded the Order of Merlin, and hides during the next twelve years. Wanting to keep an eye on the wizarding world, he masquerades as a rat, first as Percy Weasley's pet, and then as Ron Weasley's. In this form (named 'Scabbers' by the family), he is missing a toe from one paw due to the finger he cut off."
    },
    {
        name: 'Nymphadora Tonks',
        species: 'human',
        gender: 'female',
        faculty: 'Hufflepuff',
        actor: 'Natalia Tena',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/1/18/Tonks_%281%29.jpg/revision/latest/scale-to-width-down/1000?cb=20170217163322&path-prefix=ru',
        isFav:  false,
        id: 34,
        info: "Nymphadora Tonks is a Metamorphmagus and an Auror. Her name means 'Gift of the Nymphs'. She despises her given name and prefers to be called by her surname alone. She is still referred to as 'Tonks' by her peers even after her marriage. She is described as having 'a pale heart-shaped face, dark twinkling eyes', and is usually depicted with different hair colours, which she can change at will. Tonks is seen to be notoriously clumsy and unskilled at household spells. Nymphadora is the only daughter of Ted and Andromeda Tonks, the latter being sister to Bellatrix Lestrange and Narcissa Malfoy; Nymphadora is therefore Draco Malfoy's first cousin yet she never addresses him as family, alluding to him simply as 'the Malfoy boy'. Tonks is sorted into Hufflepuff,[29] and graduates from Hogwarts one year before Harry enters, after which she begins three years of Auror training; under Moody's tutelage, she qualifies as an Auror one year before her first appearance in Order of the Phoenix."
    },
    {
        name: 'Albus Dumbledore',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Michael Gambon',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg/revision/latest/scale-to-width-down/1000?cb=20150822232849',
        isFav:  false,
        id: 35,
        info: "Albus Percival Wulfric Brian Dumbledore[1] is a fictional character in J. K. Rowling's Harry Potter series. For most of the series, he is the headmaster of the wizarding school Hogwarts. As part of his backstory, it is revealed that he is the founder and leader of the Order of the Phoenix, an organisation dedicated to fighting Lord Voldemort, the main antagonist of the series."
    },
    {
        name: 'Lily J. Potter',
        species: 'human',
        gender: 'female',
        faculty: 'Gryffindor',
        actor: 'Geraldine Somerville',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/c/ce/Lily_Potter1.jpg/revision/latest/scale-to-width-down/350?cb=20140712171247',
        isFav:  false,
        id: 36,
        info: "Lily Potter is the mother of Harry Potter. She is described as being very pretty, with startlingly green almond-shaped eyes and thick, long, dark auburn hair. She is one of the 'all-time favorite students' of star collector Horace Slughorn, who describes her as 'vivacious', 'charming', 'cheeky', and 'very funny' and recalls that he 'often told her she should have been in Slytherin'. In addition, Slughorn says Lily is one of the brightest students he ever taught, with a natural and intuitive ability at Potions. Rowling describes Lily as being 'a bit of a catch'; she was a popular girl for whom many boys had romantic feelings. Although Lily is Muggle-born, she is an extremely gifted witch at the top of her class. She became Head Girl in her seventh year. Lily's sister Petunia Dursley despised her for being a witch and viewed her as a 'freak', although Petunia is later revealed to have been envious of her abilities. Rowling stated that Lily did receive warning letters for testing the limits of the Statute of Secrecy. Lily's Patronus is a doe, presumably to pair with James' Animagus shape of a stag (also the form of Harry's Patronus)."
    },
    {
        name: 'Alastor Moody',
        species: 'human',
        gender: 'male',
        faculty: '',
        actor: 'Brendan Gleeson',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/4/4d/MoodyProfile.png/revision/latest/scale-to-width-down/473?cb=20200418003242',
        isFav:  false,
        id: 37,
        info: "Alastor 'Mad-Eye' Moody is perhaps the most famous Auror in the modern times of the Wizarding World, single-handedly responsible for capturing numerous wizard criminals. He is also said never to have killed his quarry, even when permitted to do so, unless he had no other choice. Moody's face is badly scarred; he has lost several body parts while fighting Dark wizards, including his left eye, lower left leg, and part of his nose; and he is cautious – some characters might say paranoid – in that he refuses to eat or drink anything which he himself did not prepare. He has replaced his missing eye with a magical one that can rotate 360 degrees and see through almost everything (including walls, doors, Invisibility Cloaks, and the back of his own head). He walks with a pronounced limp due to his prosthetic leg and uses a walking staff. He frequently exclaims 'Constant vigilance!'' to encourage wizards to be on their guard against the dark arts, and keeps a number of devices in his office to alert him to the presence of potential enemies. Before his retirement from the Aurors' Office, he was Nymphadora Tonks' mentor, and still regards her as his protégée."
    },
    {
        name: 'Dudley Dursley',
        species: 'human',
        gender: 'male',
        faculty: '',
        actor: 'Harry Melling',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/1/19/Dudley_DH.png/revision/latest/scale-to-width-down/270?cb=20200413050209',
        isFav:  false,
        id: 38,
        info: "Dudley Dursley is the child of Vernon and Petunia Dursley, and Harry's only cousin. Described as a very large, blond boy (though dark-haired in the films), Dudley is given his way in almost everything, and shows the symptoms of a spoiled brat. Dudley is a cold-hearted bully and the leader of a gang of thugs with whom he regularly beats up Harry and younger children on the flimsiest of excuses. For this purpose, he is described early in the first novel as the reason for Harry being friendless before enrolling at Hogwarts, as even though Harry was good at sports and got good grades, he was the favorite victim of Dudley's bullying, rendering classmates too scared to admit to liking him. He is only one month older than Harry, meaning that his birthday must be sometime in late June. The same year Harry starts at Hogwarts, Dudley is enrolled at his father's old private boarding school, Smeltings."
    },
    {
        name: 'Myrtle Warren',
        species: 'human',
        gender: 'female',
        faculty: 'Ravenclaw',
        actor: 'Shirley Henderson',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/b/b8/Myrtle_Warren_profile.png/revision/latest/scale-to-width-down/1000?cb=20170113020338',
        isFav:  false,
        id: 39,
        info: "Moaning Myrtle (born Myrtle Elizabeth Warren) is a ghost that haunts the second-floor girls' lavatory at Hogwarts. True to her nickname, she has a tendency to moan, sob, whine, wail and complain, especially upon the mention of death. Her constant moping and wailing causes plumbing problems in the lavatory she haunts. In Chamber of Secrets, it is established that the character is the ghost of a Muggle-born witch who died while a student at Hogwarts, fifty years before the events in the book. Myrtle was hiding in the second-floor girls' lavatory to elude Olive Hornby, a classmate who perpetually tormented her about her glasses, when the Chamber of Secrets was opened and the basilisk emerged and killed her. Tom Riddle used her death to create his first Horcrux: his diary. After death, Myrtle haunted Olive everywhere she went, until Olive complained to the Ministry of Magic, which ordered Myrtle to return to Hogwarts. Myrtle has since sulkily haunted the same lavatory where she died, but despite her miserable disposition, she is often flirtatious with Harry."
    },
    {
        name: 'Dean Thomas',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Alfred Enoch',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Alfred-enoch-dean-thomas-devon-1688249-2000x2669.jpg/revision/latest?cb=20170617152228&path-prefix=ru',
        isFav:  false,
        id: 40,
        info: "Dean Thomas is a Gryffindor student in Harry's year, and is Seamus Finnigan's best friend. He is a Half-blood: his mother is a Muggle and his father was a pure blood wizard who kept his blood status a secret. Dean's father left his family when Dean was very young in an attempt to protect them against the Death Eaters, and was slain when he refused to join them. Dean originally prefers football over Quidditch, and has a West Ham United poster in his dormitory. Dean was subsequently raised by his mother and stepfather, and has several half-brothers and sisters. Dean was named 'Gary' in the original drafts of Philosopher's Stone. Rowling omitted his physical description ('a black boy taller than Ron') from the British version of the book following her editor's request to reduce the length of the chapter, but it was included in the American edition. His backstory was originally expanded in Chamber of Secrets, but she ultimately cut it due to her inability to work it into the storyline."
    },
    {
        name: 'Sybill Trelawney',
        species: 'human',
        gender: 'female',
        faculty: 'Ravenclaw',
        actor: 'Emma Thompson',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/d/d5/Trelawney.jpg/revision/latest?cb=20090911062559&path-prefix=ru',
        isFav:  false,
        id: 41,
        info: "Sybill Patricia Trelawney is the Divination teacher. She is the great-great-granddaughter of the celebrated Seer, Cassandra Trelawney, and has inherited some of her ancestor's talent. Trelawney is described as a slight woman resembling an insect, draped in a large spangled shawl and many gaudy bangles and rings. She speaks in a whispy voice and wears thick glasses, which cause her eyes to appear greatly magnified. Her odd classroom in the North Tower of Hogwarts is a cross between 'someone's attic and an old-fashioned tea shop'; it can only be reached by climbing to the top of the stairs and then up a ladder through a trapdoor set in the ceiling. This dim, heavily scented, and 'stiflingly' warm room often affects students' wakefulness."
    },
    {
        name: 'Oliver Wood',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Sean Biggerstaff',
        image: 'http://pm1.narvii.com/7054/d8294880d521244b570811cb356f23a211a5f6ecr1-1200-1116v2_uhq.jpg',
        isFav: false,
        id: 42,
        info: "Oliver Wood is Captain and keeper of the Gryffindor Quidditch team in the first three novels and was first introduced in Harry Potter and the Philosopher's Stone. He is simply described as being big and burly. Wood is a talented and keen player and a born leader as captain, but also tends to act as a taskmaster due to his obsession with the game; he never cancels practices, poor weather conditions notwithstanding, and holds training sessions in early morning hours. Although Oliver is in general a nice person, he lacks tact. Oliver appears briefly in Goblet of Fire, when he excitedly introduces Harry to his parents at the Quidditch World Cup and announces that he joined the Puddlemere United reserve team. He is one of many Hogwarts students, past and present, who take part in the Battle of Hogwarts in Deathly Hallows, and is among the survivors of the first clash; Harry sees him assisting Neville Longbottom in carrying the body of Colin Creevey. He is four years above Harry in Gryffindor."
    },
    {
        name: 'Seamus Finnigan',
        species: 'human',
        gender: 'male',
        faculty: 'Gryffindor',
        actor: 'Devon Murray',
        image: 'https://static.wikia.nocookie.net/harrypotter/images/7/7c/DevonMurray07.jpg/revision/latest?cb=20110622051233&path-prefix=ru',
        isFav: false,
        id: 43,
        info: "Seamus Finnigan is an Irish Gryffindor student in Harry's year who is described as having sandy hair. His mother is a witch and his father a Muggle, who only found out his wife's secret after their marriage. His best friend is Dean Thomas, whom he is housemates with. In Order of the Phoenix, Seamus is initially influenced by the Ministry's smear campaign against Harry, and his mother nearly prevents him from returning to Hogwarts. However, he later realises his mistake, offers his apologies to Harry, and becomes a late addition to the D.A. In Half-Blood Prince, Seamus refuses to allow his mother to take him home before Dumbledore's funeral. In Deathly Hallows, it is stated that Seamus is taking shelter in the Room of Requirement along with several D.A. members; his face is bruised so badly after being punished by the Carrows that Harry initially fails to recognise him until he speaks. During the battle, he, Luna, and Ernie help Harry fight the Dementors by conjuring their respective Patronuses. He is last seen entering the Great Hall to take part in the final stage of the battle, when Harry shields him and Hannah Abbott from one of Voldemort's curses."
    },

]

// DOM
const container = document.querySelector('.data-container');
let nameInput = document.querySelector('.nameInput');
let facultyInput = document.querySelector('.facultyInput');


// Window loading
window.addEventListener('load', () => {
    if(!localStorage.getItem('base')){
        localStorage.setItem('base', JSON.stringify(database));
        window.location.reload()
    }else{
        const base = JSON.parse(localStorage.getItem('base'));

        // const newBase = base.map((item, index) => {
        //     return {...item, id: index}
        // })
        // localStorage.setItem('todos',JSON.stringify(newBase));
        showCards(base)
    }
})

// Функция
function showCards(arr){
    const cards = arr.map(({name, species, gender, faculty, actor, image, id, info}) => {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 item card_item" data-id="${id}">
                <div class="card-header">
                    <h5 class="card-title text-center">${name}</h5>
                </div>
                <div class="card-body">
                    <div class="card-body-front">
                        <div class="card-image" style="background: url('${image}') top / cover no-repeat"></div>
                        <div class="card_body_list">
                            <ul>
                                <li>Species: ${species}</li>
                                <li>Gender: ${gender}</li>
                                <li>Faculty: ${faculty}</li>
                                <li>Actor: ${actor}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body-back">
                        <h6>${info}</h6>
                        <div class="bottom_block"><a href="https://en.wikipedia.org/wiki/${actor}" target="_blank">About Actor</a></div>
                        <button onclick = "addFav(${id})" class="addFav"><i class="addFavBtn fas fa-heart"></i></button>
                    </div>
                </div> 
            </div>
        `
    }).join('');

    container.innerHTML = cards
}

// Search

nameInput.addEventListener('input', e => {
    const value = e.target.value.toUpperCase();
    facultyInput = "";

    const filteredArr = database.filter(({name}) => name.toUpperCase().includes(value))
    showCards(filteredArr)
})

facultyInput.addEventListener('input', e => {
    const value = e.target.value.toUpperCase();
    nameInput = "";

    const filteredArr = database.filter(({faculty}) => faculty.toUpperCase().includes(value))
    showCards(filteredArr)
})

function addFav(id){
    const base = JSON.parse(localStorage.getItem('base'));
    const newBase = base.map(item => {
        if(item.id === id){
            return {
                ...item,
                isFav: !item.isFav
            }
        }else{
            return item
        }
    })

    const filteredBase = newBase.filter(item => item.isFav);
    localStorage.setItem('favBase', JSON.stringify(filteredBase));
    localStorage.setItem('base', JSON.stringify(newBase));
    
}
