window.onload = () => {
    // get dom elements and make some variables
    let monMobile = document.querySelector('#mon-mobile');
    let monDesktop = document.createElement('img');
    let mobileContainer = document.querySelector('#mobile-container');
    let canvas = document.querySelector('#mon');
    let ctx = canvas.getContext('2d');
    let input = document.querySelector('#guess');
    let enter = document.querySelector('#enter');
    let newMon = document.querySelector('#new-mon');
    let modeForm = document.querySelector('#mode-form');
    let scoreDisp = document.querySelector('#score-display');
    let guessesDisp = document.querySelector('#guesses-left');
    let gameOverDisp = document.querySelector('#game-over');
    let wrongMon = document.querySelector('#wrong-mon');
    let pass = document.querySelector('#pass');
    let passedMon = document.querySelector('#passed-mon');
    let playAgain = document.querySelector('#play-again');
    let genModifiers = [
        document.querySelector('#gen1'),
        document.querySelector('#gen2'),
        document.querySelector('#gen3'),
        document.querySelector('#gen4'),
        document.querySelector('#gen5'),
        document.querySelector('#gen6'),
        document.querySelector('#gen7'),
        document.querySelector('#gen8'),
        document.querySelector('#gen9'),
    ];
    let formModifiers = {
        'mega'  : document.querySelector('#mega'),
        'gmax'  : document.querySelector('#gmax'),
        'alola' : document.querySelector('#alola'),
        'galar' : document.querySelector('#galar'),
        'hisui' : document.querySelector('#hisui'),
    };
    const IMAGE_PATH = 'assets/img/gen';
    const IMAGE_ARR = [
        ['Abra', 'Aerodactyl-Mega', 'Aerodactyl', 'Alakazam-Mega', 'Alakazam', 'Arbok', 'Arcanine', 'Arcanine-Hisui', 'Articuno-Galar', 'Articuno', 'Beedrill-Mega', 'Beedrill', 'Bellsprout', 'Blastoise-Gigantamax', 'Blastoise-Mega', 'Blastoise', 'Bulbasaur', 'Butterfree-Gigantamax', 'Butterfree', 'Caterpie', 'Chansey', 'Charizard-Gigantamax', 'Charizard-Mega_X', 'Charizard-Mega_Y', 'Charizard', 'Charmander', 'Charmeleon', 'Clefable', 'Clefairy', 'Cloyster', 'Cubone', 'Dewgong', 'Diglett-Alola', 'Diglett', 'Ditto', 'Dodrio', 'Doduo', 'Dragonair', 'Dragonite', 'Dratini', 'Drowzee', 'Dugtrio-Alola', 'Dugtrio', 'Eevee-Gigantamax', 'Eevee', 'Ekans', 'Electabuzz', 'Electrode', 'Electrode-Hisui', 'Exeggcute', 'Exeggutor-Alola', 'Exeggutor', 'Farfetchd', 'Farfetchd-Galar', 'Fearow', 'Flareon', 'Gastly', 'Gengar-Gigantamax', 'Gengar', 'Geodude-Alola', 'Geodude', 'Gloom', 'Golbat', 'Goldeen', 'Golduck', 'Golem-Alola', 'Golem', 'Graveler-Alola', 'Graveler', 'Grimer-Alola', 'Grimer', 'Growlithe', 'Growlithe-Hisui', 'Gyarados-Mega', 'Gyarados', 'Haunter', 'Hitmonchan', 'Hitmonlee', 'Horsea', 'Hypno', 'Ivysaur', 'Jigglypuff', 'Jolteon', 'Jynx', 'Kabuto', 'Kabutops', 'Kadabra', 'Kakuna', 'Kangaskhan-Mega', 'Kangaskhan', 'Kingler-Gigantamax', 'Kingler', 'Koffing', 'Krabby', 'Lapras', 'Lickitung', 'Machamp-Gigantamax', 'Machamp', 'Machoke', 'Machop', 'Magikarp', 'Magmar', 'Magnemite', 'Magneton', 'Mankey', 'Marowak-Alola', 'Marowak', 'Meowth-Alola', 'Meowth-Gigantamax', 'Meowth', 'Metapod', 'Mew', 'Mewtwo-Mega_X', 'Mewtwo-Mega_Y', 'Mewtwo', 'Moltres-Galar', 'Moltres', 'Mr._Mime-Galar', 'Mr._Mime', 'Muk-Alola', 'Muk', 'Nidoking', 'Nidoqueen', 'Nidoran-Female', 'Nidoran-Male', 'Nidorina', 'Nidorino', 'Ninetales-Alola', 'Ninetales', 'Oddish', 'Omanyte', 'Omastar', 'Onix', 'Paras', 'Parasect', 'Persian-Alola', 'Persian', 'Pidgeot-Mega', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pikachu', 'Pinsir-Mega', 'Pinsir', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Ponyta-Galar', 'Ponyta', 'Porygon', 'Primeape', 'Psyduck', 'Raichu', 'Rapidash-Galar', 'Rapidash', 'Raticate-Alola', 'Raticate', 'Rattata-Alola', 'Rattata', 'Rhydon', 'Rhyhorn', 'Sandshrew-Alola', 'Sandshrew', 'Sandslash-Alola', 'Sandslash', 'Scyther', 'Seadra', 'Seaking', 'Seel', 'Shellder', 'Slowbro', 'Slowpoke-Galar', 'Slowpoke', 'Snorlax-Gigantamax', 'Snorlax', 'Spearow', 'Squirtle', 'Starmie', 'Staryu', 'Tangela', 'Tauros', 'Tentacool', 'Tentacruel', 'Vaporeon', 'Venomoth', 'Venonat', 'Venusaur-Gigantamax', 'Venusaur-Mega', 'Venusaur', 'Victreebel', 'Vileplume', 'Voltorb', 'Voltorb-Hisui', 'Vulpix-Alola', 'Vulpix', 'Wartortle', 'Weedle', 'Weepinbell', 'Weezing-Galar', 'Weezing', 'Wigglytuff', 'Zapdos-Galar', 'Zapdos', 'Zubat',],
        ['Aipom', 'Ampharos-Mega', 'Ampharos', 'Ariados', 'Azumarill', 'Bayleef', 'Bellossom', 'Blissey', 'Celebi', 'Chikorita', 'Chinchou', 'Cleffa', 'Corsola-Galar', 'Corsola', 'Crobat', 'Croconaw', 'Cyndaquil', 'Delibird', 'Donphan', 'Dunsparce', 'Elekid', 'Entei', 'Espeon', 'Feraligatr', 'Forretress', 'Furret', 'Girafarig', 'Gligar', 'Granbull', 'Heracross-Mega', 'Heracross', 'Hitmontop', 'Ho-Oh', 'Hoothoot', 'Hoppip', 'Houndoom', 'Houndour', 'Igglybuff', 'Jumpluff', 'Kingdra', 'Lanturn', 'Larvitar', 'Ledian', 'Ledyba', 'Lugia', 'Magby', 'Magcargo', 'Mantine', 'Mareep', 'Marill', 'Meganium', 'Miltank', 'Misdreavus', 'Murkrow', 'Natu', 'Noctowl', 'Octillery', 'Phanpy', 'Pichu', 'Piloswine', 'Pineco', 'Politoed', 'Porygon2', 'Pupitar', 'Quagsire', 'Quilava', 'Qwilfish', 'Qwilfish-Hisui', 'Raikou', 'Remoraid', 'Scizor-Mega', 'Scizor', 'Sentret', 'Shuckle', 'Skarmory', 'Skiploom', 'Slowking', 'Slugma', 'Smeargle', 'Smoochum', 'Sneasel', 'Sneasel-Hisui', 'Snubbull', 'Spinarak', 'Stantler', 'Steelix-Mega', 'Steelix', 'Sudowoodo', 'Suicune', 'Sunflora', 'Sunkern', 'Swinub', 'Teddiursa', 'Togepi', 'Togetic', 'Totodile', 'Typhlosion', 'Typhlosion-Hisui', 'Tyranitar-Mega', 'Tyranitar', 'Tyrogue', 'Umbreon', 'Unown', 'Ursaring', 'Wobbuffet', 'Wooper', 'Xatu', 'Yanma',],
        ['Absol', 'Aggron-Mega', 'Aggron', 'Altaria-Mega', 'Altaria', 'Anorith', 'Armaldo', 'Aron', 'Azurill', 'Bagon', 'Baltoy', 'Banette-Mega', 'Banette', 'Barboach', 'Beautifly', 'Beldum', 'Blaziken-Mega', 'Blaziken', 'Breloom', 'Cacnea', 'Cacturne', 'Camerupt-Mega', 'Camerupt', 'Carvanha', 'Cascoon', 'Castform', 'Chimecho', 'Clamperl', 'Claydol', 'Combusken', 'Corphish', 'Cradily', 'Crawdaunt', 'Delcatty', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Deoxys', 'Dusclops', 'Duskull', 'Dustox', 'Electrike', 'Exploud', 'Feebas', 'Flygon', 'Gardevoir-Mega', 'Gardevoir', 'Glalie-Mega', 'Glalie', 'Gorebyss', 'Groudon-Primal', 'Groudon', 'Grovyle', 'Grumpig', 'Gulpin', 'Hariyama', 'Huntail', 'Illumise', 'Jirachi', 'Kecleon', 'Kirlia', 'Kyogre-Primal', 'Kyogre', 'Lairon', 'Latias-Mega', 'Latias', 'Latios-Mega', 'Latios', 'Lileep', 'Linoone-Galar', 'Linoone', 'Lombre', 'Lotad', 'Loudred', 'Ludicolo', 'Lunatone', 'Luvdisc', 'Makuhita', 'Manectric-Mega', 'Manectric', 'Marshtomp', 'Masquerain', 'Mawile-Mega', 'Mawile', 'Medicham-Mega', 'Medicham', 'Meditite', 'Metagross-Mega', 'Metagross', 'Metang', 'Mightyena', 'Milotic', 'Minun', 'Mudkip', 'Nincada', 'Ninjask', 'Nosepass', 'Numel', 'Nuzleaf', 'Pelipper', 'Plusle', 'Poochyena', 'Ralts', 'Rayquaza-Mega', 'Rayquaza', 'Regice', 'Regirock', 'Registeel', 'Relicanth', 'Roselia', 'Sableye-Mega', 'Sableye', 'Salamence-Mega', 'Salamence', 'Sceptile-Mega', 'Sceptile', 'Sealeo', 'Seedot', 'Seviper', 'Sharpedo-Mega', 'Sharpedo', 'Shedinja', 'Shelgon', 'Shiftry', 'Shroomish', 'Shuppet', 'Silcoon', 'Skitty', 'Slaking', 'Slakoth', 'Snorunt', 'Solrock', 'Spheal', 'Spinda', 'Spoink', 'Surskit', 'Swablu', 'Swalot', 'Swampert-Mega', 'Swampert', 'Swellow', 'Taillow', 'Torchic', 'Torkoal', 'Trapinch', 'Treecko', 'Tropius', 'Vibrava', 'Vigoroth', 'Volbeat', 'Wailmer', 'Wailord', 'Walrein', 'Whiscash', 'Whismur', 'Wingull', 'Wurmple', 'Wynaut', 'Zangoose', 'Zigzagoon-Galar', 'Zigzagoon',],
        ['Abomasnow-Mega', 'Abomasnow', 'Ambipom', 'Arceus', 'Azelf', 'Bastiodon', 'Bibarel', 'Bidoof', 'Bonsly', 'Bronzong', 'Bronzor', 'Budew', 'Buizel', 'Buneary', 'Burmy', 'Carnivine', 'Chatot', 'Cherrim-Overcast', 'Cherrim-Sunny', 'Cherubi', 'Chimchar', 'Chingling', 'Combee', 'Cranidos', 'Cresselia', 'Croagunk', 'Darkrai', 'Dialga', 'Drapion', 'Drifblim', 'Drifloon', 'Dusknoir', 'Electivire', 'Empoleon', 'Finneon', 'Floatzel', 'Froslass', 'Gabite', 'Gallade-Mega', 'Gallade', 'Garchomp-Mega', 'Garchomp', 'Gastrodon-East', 'Gastrodon-West', 'Gible', 'Giratina-Altered', 'Glaceon', 'Glameow', 'Gliscor', 'Grotle', 'Happiny', 'Heatran', 'Hippopotas', 'Hippowdon', 'Honchkrow', 'Infernape', 'Kricketot', 'Kricketune', 'Leafeon', 'Lickilicky', 'Lopunny-Mega', 'Lopunny', 'Lucario-Mega', 'Lucario', 'Lumineon', 'Luxio', 'Luxray', 'Magmortar', 'Magnezone', 'Mamoswine', 'Manaphy', 'Mantyke', 'Mesprit', 'Mime_Jr', 'Mismagius', 'Monferno', 'Mothim', 'Munchlax', 'Pachirisu', 'Palkia', 'Phione', 'Piplup', 'Porygon-Z', 'Prinplup', 'Probopass', 'Purugly', 'Rampardos', 'Regigigas', 'Rhyperior', 'Riolu', 'Roserade', 'Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash', 'Rotom', 'Shaymin-Land', 'Shaymin-Sky', 'Shellos-East', 'Shellos-West', 'Shieldon', 'Shinx', 'Skorupi', 'Skuntank', 'Snover', 'Spiritomb', 'Staraptor', 'Staravia', 'Starly', 'Stunky', 'Tangrowth', 'Togekiss', 'Torterra', 'Toxicroak', 'Turtwig', 'Uxie', 'Vespiquen', 'Weavile', 'Wormadam', 'Yanmega',],
        ['Accelgor', 'Alomomola', 'Amoonguss', 'Archen', 'Archeops', 'Audino-Mega', 'Audino', 'Axew', 'Basculin-Red', 'Beartic', 'Beheeyem', 'Bisharp', 'Blitzle', 'Boldore', 'Bouffalant', 'Braviary', 'Braviary-Hisui', 'Carracosta', 'Chandelure', 'Cinccino', 'Cobalion', 'Cofagrigus', 'Conkeldurr', 'Cottonee', 'Crustle', 'Cryogonal', 'Cubchoo', 'Darmanitan-Galar', 'Darmanitan', 'Darumaka-Galar', 'Darumaka', 'Deerling-Spring', 'Deino', 'Dewott', 'Drilbur', 'Druddigon', 'Ducklett', 'Duosion', 'Durant', 'Dwebble', 'Eelektrik', 'Eelektross', 'Elgyem', 'Emboar', 'Emolga', 'Escavalier', 'Excadrill', 'Ferroseed', 'Ferrothorn', 'Foongus', 'Fraxure', 'Frillish-Female', 'Frillish-Male', 'Galvantula', 'Garbodor-Gigantamax', 'Garbodor', 'Gigalith', 'Golett', 'Golurk', 'Gothita', 'Gothitelle', 'Gothorita', 'Gurdurr', 'Haxorus', 'Heatmor', 'Herdier', 'Hydreigon', 'Jellicent-Female', 'Jellicent-Male', 'Joltik', 'Karrablast', 'Keldeo-Resolute', 'Keldeo', 'Klang', 'Klink', 'Klinklang', 'Krokorok', 'Krookodile', 'Kyurem-Black', 'Kyurem-White', 'Lampent', 'Landorus-Therian', 'Landorus', 'Larvesta', 'Leavanny', 'Liepard', 'Lilligant', 'Lilligant-Hisui', 'Lillipup', 'Litwick', 'Mandibuzz', 'Maractus', 'Mienfoo', 'Mienshao', 'Minccino', 'Munna', 'Musharna', 'Oshawott', 'Palpitoad', 'Panpour', 'Pansage', 'Pansear', 'Patrat', 'Pawniard', 'Petilil', 'Pidove', 'Pignite', 'Purrloin', 'Reshiram', 'Reuniclus', 'Roggenrola', 'Rufflet', 'Samurott', 'Samurott-Hisui', 'Sandile', 'Sawk', 'Sawsbuck-Spring', 'Scolipede', 'Scrafty', 'Scraggy', 'Seismitoad', 'Serperior', 'Servine', 'Sewaddle', 'Shelmet', 'Sigilyph', 'Simipour', 'Simisage', 'Simisear', 'Snivy', 'Solosis', 'Stoutland', 'Stunfisk-Galar', 'Stunfisk', 'Swadloon', 'Swanna', 'Swoobat', 'Tepig', 'Terrakion', 'Throh', 'Thundurus-Therian', 'Thundurus', 'Timburr', 'Tirtouga', 'Tornadus-Therian', 'Tornadus', 'Tranquill', 'Trubbish', 'Tympole', 'Tynamo', 'Unfezant-Female', 'Unfezant-Male', 'Vanillish', 'Vanillite', 'Vanilluxe', 'Venipede', 'Victini', 'Virizion', 'Volcarona', 'Vullaby', 'Watchog', 'Whimsicott', 'Whirlipede', 'Woobat', 'Yamask', 'Zebstrika', 'Zekrom', 'Zoroark', 'Zoroark-Hisui', 'Zorua', 'Zorua-Hisui', 'Zweilous',],
        ['Aegislash-Blade', 'Aegislash-Shield', 'Amaura', 'Aromatisse', 'Aurorus', 'Avalugg', 'Avalugg-Hisui', 'Barbaracle', 'Bergmite', 'Binacle', 'Braixen', 'Bunnelby', 'Carbink', 'Chesnaught', 'Chespin', 'Clauncher', 'Clawitzer', 'Dedenne', 'Delphox', 'Diancie', 'Diggersby', 'Doublade', 'Dragalge', 'Espurr', 'Fennekin', 'Flabebe', 'Fletchinder', 'Fletchling', 'Floette', 'Florges', 'Froakie', 'Frogadier', 'Furfrou', 'Gogoat', 'Goodra', 'Goodra-Hisui', 'Goomy', 'Gourgeist', 'Greninja', 'Hawlucha', 'Heliolisk', 'Helioptile', 'Honedge', 'Hoopa-Unbound', 'Hoopa', 'Inkay', 'Klefki', 'Litleo', 'Malamar', 'Meowstic-Female', 'Meowstic-Male', 'Noibat', 'Noivern', 'Pancham', 'Pangoro', 'Phantump', 'Pumpkaboo', 'Pyroar', 'Quilladin', 'Scatterbug', 'Skiddo', 'Skrelp', 'Sliggoo', 'Sliggoo-Hisui', 'Slurpuff', 'Spewpa', 'Spritzee', 'Swirlix', 'Sylveon', 'Talonflame', 'Trevenant', 'Tyrantrum', 'Tyrunt', 'Vivillon', 'Volcanion', 'Xerneas', 'Yveltal', 'Zygarde-10Percent', 'Zygarde-Complete', 'Zygarde',],
        ['Araquanid', 'Bewear', 'Blacephalon', 'Bounsweet', 'Brionne', 'Bruxish', 'Buzzwole', 'Celesteela', 'Charjabug', 'Comfey', 'Cosmoem', 'Cosmog', 'Crabominable', 'Crabrawler', 'Cutiefly', 'Dartrix', 'Decidueye', 'Decidueye-Hisui', 'Dewpider', 'Dhelmise', 'Drampa', 'Fomantis', 'Golisopod', 'Grubbin', 'Gumshoos', 'Guzzlord', 'Hakamo-o', 'Incineroar', 'Jangmo-o', 'Kartana', 'Komala', 'Kommo-o', 'Litten', 'Lunala', 'Lurantis', 'Lycanroc-Dusk', 'Lycanroc-Midnight', 'Magearna', 'Mareanie', 'Marshadow', 'Melmetal', 'Meltan', 'Mimikyu', 'Minior', 'Morelull', 'Mudbray', 'Mudsdale', 'Naganadel', 'Necrozma-Dawn_Wings', 'Necrozma-Dusk_Mane', 'Necrozma-Ultra', 'Necrozma', 'Nihilego', 'Oranguru', 'Oricorio-Baile', 'Oricorio-Pau', 'Oricorio-Pom-Pom', 'Oricorio-Sensu', 'Palossand', 'Passimian', 'Pheromosa', 'Pikipek', 'Poipole', 'Popplio', 'Primarina', 'Pyukumuku', 'Ribombee', 'Rockruff', 'Rowlet', 'Salandit', 'Salazzle', 'Sandygast', 'Shiinotic', 'Silvally', 'Solgaleo', 'Stakataka', 'Steenee', 'Stufful', 'Tapu_Bulu', 'Tapu_Fini', 'Tapu_Koko', 'Tapu_Lele', 'Togedemaru', 'Torracat', 'Toucannon', 'Toxapex', 'Trumbeak', 'Tsareena', 'Turtonator', 'Type_Null', 'Vikavolt', 'Wimpod', 'Wishiwashi-School', 'Wishiwashi-Solo', 'Xurkitree', 'Yungoos', 'Zeraora',],
        ['Alcremie-Gigantamax', 'Alcremie', 'Appletun', 'Applin', 'Arctovish', 'Arctozolt', 'Arrokuda', 'Barraskewda', 'Basculegion', 'Blipbug', 'Boltund', 'Calyrex', 'Calyrex-Ice_Rider', 'Calyrex-Shadow_Rider', 'Carkol', 'Centiskorch-Gigantamax', 'Centiskorch', 'Chewtle', 'Cinderace-Gigantamax', 'Cinderace', 'Clobbopus', 'Coalossal-Gigantamax', 'Coalossal', 'Copperajah-Gigantamax', 'Copperajah', 'Corviknight-Gigantamax', 'Corviknight', 'Corvisquire', 'Cramorant', 'Cufant', 'Cursola', 'Dottler', 'Dracovish', 'Dracozolt', 'Dragapult', 'Drakloak', 'Drednaw-Gigantamax', 'Drednaw', 'Dreepy', 'Drizzile', 'Dubwool', 'Duraludon-Gigantamax', 'Duraludon', 'Eiscue', 'Eldegoss', 'Enamorus', 'Enamorus-Therian', 'Eternatus', 'Falinks', 'Flapple-Gigantamax', 'Flapple', 'Frosmoth', 'Glastrier', 'Gossifleur', 'Grapploct', 'Greedent', 'Grimmsnarl-Gigantamax', 'Grimmsnarl', 'Grookey', 'Hatenna', 'Hatterene-Gigantamax', 'Hatterene', 'Hattrem', 'Impidimp', 'Indeedee-Female', 'Indeedee-Male', 'Inteleon-Gigantamax', 'Inteleon', 'Kleavor', 'Kubfu', 'Milcery', 'Morgrem', 'Morpeko-Full', 'Mr._Rime', 'Nickit', 'Obstagoon', 'Orbeetle-Gigantamax', 'Orbeetle', 'Overqwil', 'Perrserker', 'Pincurchin', 'Polteageist', 'Raboot', 'Regidrago', 'Regieleki', 'Rillaboom-Gigantamax', 'Rillaboom', 'Rolycoly', 'Rookidee', 'Runerigus', 'Sandaconda-Gigantamax', 'Sandaconda', 'Scorbunny', 'Silicobra', 'Sinistea', 'Sirfetchd', 'Sizzlipede', 'Skwovet', 'Sneasler', 'Snom', 'Sobble', 'Spectrier', 'Stonjourner', 'Thievul', 'Thwackey', 'Toxel', 'Toxtricity-Amped', 'Toxtricity-Gigantamax', 'Toxtricity-Low_Key', 'Ursaluna', 'Urshifu-Gigantamax_Rapid_Strike', 'Urshifu-Gigantamax_Single_Strike', 'Urshifu-Rapid_Strike', 'Urshifu-Single_Strike', 'Wooloo', 'Wyrdeer', 'Yamper', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zarude',],
        ['Annihilape', 'Arboliva', 'Archaludon', 'Arctibax', 'Armarouge', 'Baxcalibur', 'Bellibolt', 'Bombirdier', 'Brambleghast', 'Bramblin', 'Brute_Bonnet', 'Capsakid', 'Ceruledge', 'Cetitan', 'Cetoddle', 'Charcadet', 'Chi-Yu', 'Chien-Pao', 'Clodsire', 'Crocalor', 'Cyclizar', 'Dachsbun', 'Dipplin', 'Dolliv', 'Dondozo', 'Dudunsparce', 'Espathra', 'Farigiraf', 'Fezandipiti', 'Fidough', 'Finizen', 'Flamigo', 'Flittle', 'Floragato', 'Flutter_Mane', 'Frigibax', 'Fuecoco', 'Garganacl', 'Gholdengo', 'Gimmighoul', 'Glimmet', 'Glimmora', 'Grafaiai', 'Great_Tusk', 'Greavard', 'Houndstone', 'Hydrapple', 'Iron_Boulder', 'Iron_Bundle', 'Iron_Crown', 'Iron_Hands', 'Iron_Jugulis', 'Iron_Leaves', 'Iron_Moth', 'Iron_Thorns', 'Iron_Treads', 'Iron_Valiant', 'Kilowattrel', 'Kingambit', 'Klawf', 'Koraidon', 'Lechonk', 'Lokix', 'Mabosstiff', 'Maschiff', 'Maushold', 'Meowscarada', 'Miraidon', 'Munkidori', 'Nacli', 'Naclstack', 'Nymble', 'Ogerpon', 'Oinkologne', 'Okidogi', 'Orthworm', 'Palafin', 'Pawmi', 'Pawmo', 'Pawmot', 'Pecharunt', 'Poltchageist', 'Quaquaval', 'Quaxly', 'Quaxwell', 'Rabsca', 'Raging_Bolt', 'Rellor', 'Revavroom', 'Roaring_Moon', 'Sandy_Shocks', 'Scovillain', 'Scream_Tail', 'Shroodle', 'Sinistcha', 'Skeledirge', 'Slither_Wing', 'Smoliv', 'Spidops', 'Sprigatito', 'Squawkabilly', 'Tadbulb', 'Tandemaus', 'Tarountula', 'Tatsugiri', 'Terapagos-Terastal', 'Terapagos', 'Ting-Lu', 'Tinkatink', 'Tinkaton', 'Tinkatuff', 'Toedscool', 'Toedscruel', 'Ursaluna-Bloodmoon', 'Varoom', 'Veluza', 'Walking_Wake', 'Wattrel', 'Wiglett', 'Wo-Chien', 'Wugtrio'],
    ];
    const IMAGE_EXT = '.webp';
    let pkmnName, formattedName, score = 0, guessesLeft = 5, mode = '0';

    // helper function to get a random int
    let rand = (num) => { return Math.floor(Math.random() * num); }

    // helper func to determine if the device is mobile using userAgent
    let isMobile = () => {
        if( navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i))
            return true;
        else
            return false;
    };

    // func to remove special characters
    let formatString = (str) => {
        str = str.toLowerCase();
        str = str.replace(/[^a-zA-Z ]/g, '');   // remove special characters
        str = str.replace(/\s/g, '');           // remove spaces

        // replace some pokemon naming stuff
        // with shorter equivalents
        str = str.replace('gigantamax', 'gmax');
        str = str.replace('mega', 'm');
        str = str.replace('therian', 't');
        str = str.replace('é', 'e');
        str = str.replace('male', 'm');
        str = str.replace('female', 'f');
        str = str.replace('10percent', '10');
        str = str.replace('unbound', 'u');
        str = str.replace('dawnwings', 'dawn');
        str = str.replace('duskmane', 'dusk');
        str = str.replace('ultra', 'u');
        str = str.replace('crowned', 'c');
        str = str.replace('singlestrike', 'single');
        str = str.replace('rapid', 'rapid');
        str = str.replace('icerider', 'ice');
        str = str.replace('shadowrider', 'shadow');
        str = str.replace('bloodmoon', 'blood');
        str = str.replace('terastal', 'tera');
        str = str.replace('galar', 'g');
        str = str.replace('galarian', 'g');
        str = str.replace('alola', 'a');
        str = str.replace('alolan', 'a');
        str = str.replace('hisui', 'h');
        str = str.replace('hisuian', 'h');
        return str;
    };

    // scale image to fit canvas size (used for silhouette mode)
    let scaleToFit = (img) => {
        let scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        let x = (canvas.width / 2) - (img.width / 2) * scale;
        let y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.scale(1, 1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // get a random part of the image to crop (random part mode)
    let randomCrop = (img) => {
        // need to determine where to draw that isn't going to be at least 30% transparent
        let transparencyCheck = (x = 0, y = 0) => {
            if(ctx.getImageData(x, y, 150, 150).data[3] === 0 || ctx.getImageData(x + 100, y + 100, 150, 150).data[3] === 0 )
                return true;
            else
                return false;
        };

        let similarityCheck = () => {
            let r = [];
            let g = [];
            let b = [];
            const range = 25;
            const x = [0, 250, 499];
            const y = [[0, 100, 0], [450, 350, 450]];
            let data, totalTrue = 0, rAvg = 0, gAvg = 0, bAvg = 0;

            // loop for y, as y has top array [0] and bottom array [1]
            // reset avg values
            for(let i = 0; i < y.length; i++) {
                rAvg = 0;
                gAvg = 0;
                bAvg = 0;

                // fill rgb arrays
                for (let j = 0; j < x.length; j++) {
                    data = ctx.getImageData(x[j], y[i][j], 1, 1).data;
                    r[j] = data[0];
                    g[j] = data[1];
                    b[j] = data[2];

                    rAvg += r[j];
                    gAvg += g[j];
                    bAvg += b[j];
                }

                // find averages
                rAvg /= r.length;
                gAvg /= g.length;
                bAvg /= b.length;

                // find if average is similar to rgb values
                for(let j = 0; j < r.length; j++) {
                    if(((r[j] - range) <= rAvg && (r[j] + range) >= rAvg) &&
                       ((g[j] - range) <= gAvg && (g[j] + range) >= gAvg) &&
                       ((b[j] - range) <= bAvg && (b[j] + range) >= bAvg))
                                totalTrue++;
                    else {
                        /*
                        console.log('y: ' + i);
                        console.log('j: ' + j);
                        console.log('r[j]: ' + r[j]);
                        console.log('g[j]: ' + g[j]);
                        console.log('b[j]: ' + b[j]);
                        console.log('rAvg: ' + rAvg);
                        console.log('gAvg: ' + gAvg);
                        console.log('bAvg: ' + bAvg);
                        console.log('----------');
                        */
                    }
                }
            }

            // reroll if conditions are met
            if(totalTrue >= 4 || (totalTrue >= 3 && rand(3) == 1))
                return true;
            else
                return false;
        };

        // create variables for locaiton on image
        let sx, sy;

        do {
            sx = rand(img.width - 100);
            sy = rand(img.height - 100);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, sx, sy, 100, 100, 0, 0, 500, 500);
        }
        while (transparencyCheck() || similarityCheck());
    };

    // handle random part mode when using an img instead of a canvas
    // TODO: try to figure out a way to get a random part that is not super transparent
    //       because as of now it just scales the center of the image
    let randomCropMobile = (img) => {
        if(img.style.transform === 'scale(1)')
            img.style.transform = 'scale(5)';
    };

    // gets random image
    let randomImg = (imgsArr, imgsPath) => {
        // check if mobile and select element accordingly
        const isMobileRes = isMobile();
        let img = (isMobileRes) ? monMobile : monDesktop;

        // more necessary variables
        let randGen = rand(imgsArr.length);
        let randMon, loop = false, formArr = [];

        // swap visibility of canvas and mobile container
        if(isMobileRes) {
            canvas.style.display = 'none';
            mobileContainer.style.display = 'flex';
        }

        // make sure there's at least one checkbox selected before rerolling
        for(let i = 0; i < genModifiers.length; i++) {
            if(genModifiers[i].checked === true) {
                loop = true;
                break;
            }
        }

        // reroll randGen if necessary
        while(genModifiers[randGen].checked === false && loop) {
            randGen = rand(imgsArr.length);
        }

        // reroll randMon as many times as necessary
        do {
            randMon = rand(imgsArr[randGen].length);

            if(imgsArr[randGen][randMon].indexOf('Mega') > 0 && formModifiers['mega'].checked === false)
                formArr[0] = false;
            else
                formArr[0] = true;

            if(imgsArr[randGen][randMon].indexOf('Gigantamax') > 0 && formModifiers['gmax'].checked === false)
                formArr[1] = false;
            else
                formArr[1] = true;

            if(imgsArr[randGen][randMon].indexOf('Alola') > 0 && formModifiers['alola'].checked === false)
                formArr[2] = false;
            else
                formArr[2] = true;

            if(imgsArr[randGen][randMon].indexOf('Galar') > 0 && formModifiers['galar'].checked === false)
                formArr[3] = false;
            else
                formArr[3] = true;

            if(imgsArr[randGen][randMon].indexOf('Hisui') > 0 && formModifiers['hisui'].checked === false)
                formArr[4] = false;
            else
                formArr[4] = true;

            for(let i = 0; i < formArr.length; i++) {
                if(formArr[i] === false) {
                    loop = true;
                    break;
                } else {
                    loop = false;
                }
            }
        }
        while (loop);

        // set src of img to random pokemon img
        img.src = imgsPath + (randGen + 1) + '/' + imgsArr[randGen][randMon] + IMAGE_EXT;

        // get name of random pokemon
        pkmnName = imgsArr[randGen][randMon];
        formattedName = formatString(pkmnName);

        if(isMobileRes)
            img.style.visibility = 'hidden';

        // wait for image to load and draw it
        img.onload = () => {
            // clear canvas first (if applicable)
            if(!isMobileRes)
                ctx.clearRect(0, 0, canvas.width, canvas.height);

            // change draw mode based on radio buttons
            if(mode === '0') {
                if(isMobileRes) {
                    img.style.transform = 'scale(1)';
                    img.classList.add('silhouette');
                    img.style.visibility = 'visible';
                }
                else {
                    ctx.filter = 'brightness(0%)';
                    scaleToFit(img);
                }

            } else {
                if(isMobileRes) {
                    randomCropMobile(img);
                    img.classList.remove('silhouette');
                    img.style.visibility = 'visible';
                } else {
                    ctx.filter = 'brightness(100%)';
                    randomCrop(img);
                }
            }
        };

        // focus input
        if(!isMobileRes)
            input.focus();
    };

    let showMon = () => {
        // check if mobile and select element accordingly
        const isMobileRes = isMobile();
        let img = (isMobileRes) ? monMobile : monDesktop;

        // remove silhoutte class if mobile, otherwise
        // change ctx filter
        if(isMobileRes) {
            img.classList.remove('silhouette');
            img.style.transform = 'scale(1)';
        } else {
            ctx.filter = 'brightness(100%)';
            scaleToFit(img);
        }
    };

    let submitGuess = () => {
        // if input value is nothing, then don't do anything
        if(input.value === '') {
            return;
        }

        // use string-similarity to be a bit more lax with
        // spell-checking names
        if(stringSimilarity.compareTwoStrings(formatString(input.value), formattedName) > 0.5) {
            // show mon and increment score
            showMon();
            score++;

            // green box around text box, then get a new mon
            input.classList.add('correct');
            setTimeout(() => {
                input.classList.remove('correct');
                randomImg(IMAGE_ARR, IMAGE_PATH);
            }, 750);

        } else {
            // shake text box
            input.classList.add('error');
            setTimeout(() => {
                input.classList.remove('error');
            }, 200);

            // decrement guesses
            guessesLeft--;
            switch(guessesLeft) {
                case 0:
                    gameOver();
                    break;
                case 1:
                    newMon.disabled = true;
                    break;
                default:
                    break;
            }
        }

        // reset input and focus
        input.value = '';
        input.placeholder = '';
        if(!isMobile())
            input.focus();

        // display score and guesses left
        scoreDisp.innerHTML = score;
        guessesDisp.innerHTML = guessesLeft;
    };

    let gameOver = () => {
        gameOverDisp.hidden = false;
        input.disabled = true;
        enter.disabled = true;
        wrongMon.innerHTML = pkmnName;
        showMon();
        playAgain.focus();
    };

    let resetGame = () => {
        gameOverDisp.hidden = true;
        input.disabled = false;
        enter.disabled = false;
        newMon.disabled = false;

        score = 0;
        guessesLeft = 5;

        scoreDisp.innerHTML = score;
        guessesDisp.innerHTML = guessesLeft;

        if(!isMobile())
            input.focus();

        randomImg(IMAGE_ARR, IMAGE_PATH);
    };

    // call randomImg
    randomImg(IMAGE_ARR, IMAGE_PATH);

    // add event listeners for buttons
    enter.onclick = submitGuess;
    playAgain.onclick = resetGame;
    newMon.onclick = () => {
        guessesLeft--;
        guessesDisp.innerHTML = guessesLeft;

        showMon();
        passedMon.innerHTML = pkmnName;
        pass.hidden = false;

        setTimeout(() => {
            switch(guessesLeft) {
                case 0:
                    gameOver();
                    break;
                case 1:
                    newMon.disabled = true;
                    randomImg(IMAGE_ARR, IMAGE_PATH);
                    break;
                default:
                    randomImg(IMAGE_ARR, IMAGE_PATH);
                    break;
            }

            pass.hidden = true;
        }, 1250);
    };

    // add support for enter on input
    input.onkeyup = (e) => {
        if(e.keyCode == 13) {
            e.preventDefault();
            enter.click();
        }
    };

    // add onchange handlers for the game mode radio buttons
    for(let i = 0; i < modeForm.elements.length; i++) {

        modeForm.elements[i].onchange = () => {
            // set game mode, reset score, force reroll
            mode = modeForm.elements[i].id.split('mode')[1];
            resetGame();
        };
    }

    // add onchange handlers for checkboxes
    for(let i = 0; i < genModifiers.length; i++) { genModifiers[i].onchange = resetGame; }
    for(let key in formModifiers) { formModifiers[key].onchange = resetGame; }

    // return any pokemon name as a placeholder
    let getPlaceholder = () => {
        let randGen = rand(IMAGE_ARR.length);
        let randMon = rand(IMAGE_ARR[randGen].length);
        let str = IMAGE_ARR[randGen][randMon];

        // there's a handful of pokemon that have underscores in their filenames,
        // so we replace that with an underscore here
        str = str.replace('_', ' ');

        return str;
    };

    // set a placeholder
    input.placeholder = getPlaceholder();
};