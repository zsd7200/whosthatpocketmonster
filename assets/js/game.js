window.onload = () => {
    // get dom elements and make some variables
    let monMobile = document.querySelector("#mon-mobile");
    let mobileContainer = document.querySelector("#mobile-container");
    let canvas = document.querySelector("#mon");
    let ctx = canvas.getContext("2d");
    let input = document.querySelector("#guess");
    let enter = document.querySelector("#enter");
    let newMon = document.querySelector("#new-mon");
    let modeForm = document.querySelector("#mode-form");
    let scoreDisp = document.querySelector("#score-display");
    let guessesDisp = document.querySelector("#guesses-left");
    let gameOverDisp = document.querySelector("#game-over");
    let wrongMon = document.querySelector("#wrong-mon");
    let playAgain = document.querySelector("#play-again");
    let genModifiers = [
        document.querySelector("#gen1"),
        document.querySelector("#gen2"),
        document.querySelector("#gen3"),
        document.querySelector("#gen4"),
        document.querySelector("#gen5"),
        document.querySelector("#gen6"),
        document.querySelector("#gen7"),
        document.querySelector("#gen8"),
    ];
    let formModifiers = {
        "mega"  : document.querySelector("#mega"),
        "gmax"  : document.querySelector("#gmax"),
        "alola" : document.querySelector("#alola"),
        "galar" : document.querySelector("#galar"),
    };
    const imagesPath = "assets/img/gen";
    const images = [
        ["Abra.png", "Aerodactyl-Mega.png", "Aerodactyl.png", "Alakazam-Mega.png", "Alakazam.png", "Arbok.png", "Arcanine.png", "Articuno-Galar.png", "Articuno.png", "Beedrill-Mega.png", "Beedrill.png", "Bellsprout.png", "Blastoise-Gigantamax.png", "Blastoise-Mega.png", "Blastoise.png", "Bulbasaur.png", "Butterfree-Gigantamax.png", "Butterfree.png", "Caterpie.png", "Chansey.png", "Charizard-Gigantamax.png", "Charizard-Mega_X.png", "Charizard-Mega_Y.png", "Charizard.png", "Charmander.png", "Charmeleon.png", "Clefable.png", "Clefairy.png", "Cloyster.png", "Cubone.png", "Dewgong.png", "Diglett-Alola.png", "Diglett.png", "Ditto.png", "Dodrio.png", "Doduo.png", "Dragonair.png", "Dragonite.png", "Dratini.png", "Drowzee.png", "Dugtrio-Alola.png", "Dugtrio.png", "Eevee-Gigantamax.png", "Eevee.png", "Ekans.png", "Electabuzz.png", "Electrode.png", "Exeggcute.png", "Exeggutor-Alola.png", "Exeggutor.png", "Farfetchd.png", "Farfetchd-Galar.png", "Fearow.png", "Flareon.png", "Gastly.png", "Gengar-Gigantamax.png", "Gengar.png", "Geodude-Alola.png", "Geodude.png", "Gloom.png", "Golbat.png", "Goldeen.png", "Golduck.png", "Golem-Alola.png", "Golem.png", "Graveler-Alola.png", "Graveler.png", "Grimer-Alola.png", "Grimer.png", "Growlithe.png", "Gyarados-Mega.png", "Gyarados.png", "Haunter.png", "Hitmonchan.png", "Hitmonlee.png", "Horsea.png", "Hypno.png", "Ivysaur.png", "Jigglypuff.png", "Jolteon.png", "Jynx.png", "Kabuto.png", "Kabutops.png", "Kadabra.png", "Kakuna.png", "Kangaskhan-Mega.png", "Kangaskhan.png", "Kingler-Gigantamax.png", "Kingler.png", "Koffing.png", "Krabby.png", "Lapras.png", "Lickitung.png", "Machamp-Gigantamax.png", "Machamp.png", "Machoke.png", "Machop.png", "Magikarp.png", "Magmar.png", "Magnemite.png", "Magneton.png", "Mankey.png", "Marowak-Alola.png", "Marowak.png", "Meowth-Alola.png", "Meowth-Gigantamax.png", "Meowth.png", "Metapod.png", "Mew.png", "Mewtwo-Mega_X.png", "Mewtwo-Mega_Y.png", "Mewtwo.png", "Moltres-Galar.png", "Moltres.png", "Mr._Mime-Galar.png", "Mr._Mime.png", "Muk-Alola.png", "Muk.png", "Nidoking.png", "Nidoqueen.png", "Nidoran-Female.png", "Nidoran-Male.png", "Nidorina.png", "Nidorino.png", "Ninetales-Alola.png", "Ninetales.png", "Oddish.png", "Omanyte.png", "Omastar.png", "Onix.png", "Paras.png", "Parasect.png", "Persian-Alola.png", "Persian.png", "Pidgeot-Mega.png", "Pidgeot.png", "Pidgeotto.png", "Pidgey.png", "Pikachu.png", "Pinsir-Mega.png", "Pinsir.png", "Poliwag.png", "Poliwhirl.png", "Poliwrath.png", "Ponyta-Galar.png", "Ponyta.png", "Porygon.png", "Primeape.png", "Psyduck.png", "Raichu.png", "Rapidash-Galar.png", "Rapidash.png", "Raticate-Alola.png", "Raticate.png", "Rattata-Alola.png", "Rattata.png", "Rhydon.png", "Rhyhorn.png", "Sandshrew-Alola.png", "Sandshrew.png", "Sandslash-Alola.png", "Sandslash.png", "Scyther.png", "Seadra.png", "Seaking.png", "Seel.png", "Shellder.png", "Slowbro.png", "Slowpoke-Galar.png", "Slowpoke.png", "Snorlax-Gigantamax.png", "Snorlax.png", "Spearow.png", "Squirtle.png", "Starmie.png", "Staryu.png", "Tangela.png", "Tauros.png", "Tentacool.png", "Tentacruel.png", "Vaporeon.png", "Venomoth.png", "Venonat.png", "Venusaur-Gigantamax.png", "Venusaur-Mega.png", "Venusaur.png", "Victreebel.png", "Vileplume.png", "Voltorb.png", "Vulpix-Alola.png", "Vulpix.png", "Wartortle.png", "Weedle.png", "Weepinbell.png", "Weezing-Galar.png", "Weezing.png", "Wigglytuff.png", "Zapdos-Galar.png", "Zapdos.png", "Zubat.png",],
        ["Aipom.png", "Ampharos-Mega.png", "Ampharos.png", "Ariados.png", "Azumarill.png", "Bayleef.png", "Bellossom.png", "Blissey.png", "Celebi.png", "Chikorita.png", "Chinchou.png", "Cleffa.png", "Corsola-Galar.png", "Corsola.png", "Crobat.png", "Croconaw.png", "Cyndaquil.png", "Delibird.png", "Donphan.png", "Dunsparce.png", "Elekid.png", "Entei.png", "Espeon.png", "Feraligatr.png", "Forretress.png", "Furret.png", "Girafarig.png", "Gligar.png", "Granbull.png", "Heracross-Mega.png", "Heracross.png", "Hitmontop.png", "Ho-Oh.png", "Hoothoot.png", "Hoppip.png", "Houndoom.png", "Houndour.png", "Igglybuff.png", "Jumpluff.png", "Kingdra.png", "Lanturn.png", "Larvitar.png", "Ledian.png", "Ledyba.png", "Lugia.png", "Magby.png", "Magcargo.png", "Mantine.png", "Mareep.png", "Marill.png", "Meganium.png", "Miltank.png", "Misdreavus.png", "Murkrow.png", "Natu.png", "Noctowl.png", "Octillery.png", "Phanpy.png", "Pichu.png", "Piloswine.png", "Pineco.png", "Politoed.png", "Porygon2.png", "Pupitar.png", "Quagsire.png", "Quilava.png", "Qwilfish.png", "Raikou.png", "Remoraid.png", "Scizor-Mega.png", "Scizor.png", "Sentret.png", "Shuckle.png", "Skarmory.png", "Skiploom.png", "Slowking.png", "Slugma.png", "Smeargle.png", "Smoochum.png", "Sneasel.png", "Snubbull.png", "Spinarak.png", "Stantler.png", "Steelix-Mega.png", "Steelix.png", "Sudowoodo.png", "Suicune.png", "Sunflora.png", "Sunkern.png", "Swinub.png", "Teddiursa.png", "Togepi.png", "Togetic.png", "Totodile.png", "Typhlosion.png", "Tyranitar-Mega.png", "Tyranitar.png", "Tyrogue.png", "Umbreon.png", "Unown.png", "Ursaring.png", "Wobbuffet.png", "Wooper.png", "Xatu.png", "Yanma.png",],
        ["Absol.png", "Aggron-Mega.png", "Aggron.png", "Altaria-Mega.png", "Altaria.png", "Anorith.png", "Armaldo.png", "Aron.png", "Azurill.png", "Bagon.png", "Baltoy.png", "Banette-Mega.png", "Banette.png", "Barboach.png", "Beautifly.png", "Beldum.png", "Blaziken-Mega.png", "Blaziken.png", "Breloom.png", "Cacnea.png", "Cacturne.png", "Camerupt-Mega.png", "Camerupt.png", "Carvanha.png", "Cascoon.png", "Castform.png", "Chimecho.png", "Clamperl.png", "Claydol.png", "Combusken.png", "Corphish.png", "Cradily.png", "Crawdaunt.png", "Delcatty.png", "Deoxys-Attack.png", "Deoxys-Defense.png", "Deoxys-Speed.png", "Deoxys.png", "Dusclops.png", "Duskull.png", "Dustox.png", "Electrike.png", "Exploud.png", "Feebas.png", "Flygon.png", "Gardevoir-Mega.png", "Gardevoir.png", "Glalie-Mega.png", "Glalie.png", "Gorebyss.png", "Groudon-Primal.png", "Groudon.png", "Grovyle.png", "Grumpig.png", "Gulpin.png", "Hariyama.png", "Huntail.png", "Illumise.png", "Jirachi.png", "Kecleon.png", "Kirlia.png", "Kyogre-Primal.png", "Kyogre.png", "Lairon.png", "Latias-Mega.png", "Latias.png", "Latios-Mega.png", "Latios.png", "Lileep.png", "Linoone-Galar.png", "Linoone.png", "Lombre.png", "Lotad.png", "Loudred.png", "Ludicolo.png", "Lunatone.png", "Luvdisc.png", "Makuhita.png", "Manectric-Mega.png", "Manectric.png", "Marshtomp.png", "Masquerain.png", "Mawile-Mega.png", "Mawile.png", "Medicham-Mega.png", "Medicham.png", "Meditite.png", "Metagross-Mega.png", "Metagross.png", "Metang.png", "Mightyena.png", "Milotic.png", "Minun.png", "Mudkip.png", "Nincada.png", "Ninjask.png", "Nosepass.png", "Numel.png", "Nuzleaf.png", "Pelipper.png", "Plusle.png", "Poochyena.png", "Ralts.png", "Rayquaza-Mega.png", "Rayquaza.png", "Regice.png", "Regirock.png", "Registeel.png", "Relicanth.png", "Roselia.png", "Sableye-Mega.png", "Sableye.png", "Salamence-Mega.png", "Salamence.png", "Sceptile-Mega.png", "Sceptile.png", "Sealeo.png", "Seedot.png", "Seviper.png", "Sharpedo-Mega.png", "Sharpedo.png", "Shedinja.png", "Shelgon.png", "Shiftry.png", "Shroomish.png", "Shuppet.png", "Silcoon.png", "Skitty.png", "Slaking.png", "Slakoth.png", "Snorunt.png", "Solrock.png", "Spheal.png", "Spinda.png", "Spoink.png", "Surskit.png", "Swablu.png", "Swalot.png", "Swampert-Mega.png", "Swampert.png", "Swellow.png", "Taillow.png", "Torchic.png", "Torkoal.png", "Trapinch.png", "Treecko.png", "Tropius.png", "Vibrava.png", "Vigoroth.png", "Volbeat.png", "Wailmer.png", "Wailord.png", "Walrein.png", "Whiscash.png", "Whismur.png", "Wingull.png", "Wurmple.png", "Wynaut.png", "Zangoose.png", "Zigzagoon-Galar.png", "Zigzagoon.png",],
        ["Abomasnow-Mega.png", "Abomasnow.png", "Ambipom.png", "Arceus.png", "Azelf.png", "Bastiodon.png", "Bibarel.png", "Bidoof.png", "Bonsly.png", "Bronzong.png", "Bronzor.png", "Budew.png", "Buizel.png", "Buneary.png", "Burmy.png", "Carnivine.png", "Chatot.png", "Cherrim-Overcast.png", "Cherrim-Sunny.png", "Cherubi.png", "Chimchar.png", "Chingling.png", "Combee.png", "Cranidos.png", "Cresselia.png", "Croagunk.png", "Darkrai.png", "Dialga.png", "Drapion.png", "Drifblim.png", "Drifloon.png", "Dusknoir.png", "Electivire.png", "Empoleon.png", "Finneon.png", "Floatzel.png", "Froslass.png", "Gabite.png", "Gallade-Mega.png", "Gallade.png", "Garchomp-Mega.png", "Garchomp.png", "Gastrodon-East.png", "Gastrodon-West.png", "Gible.png", "Giratina-Altered.png", "Glaceon.png", "Glameow.png", "Gliscor.png", "Grotle.png", "Happiny.png", "Heatran.png", "Hippopotas.png", "Hippowdon.png", "Honchkrow.png", "Infernape.png", "Kricketot.png", "Kricketune.png", "Leafeon.png", "Lickilicky.png", "Lopunny-Mega.png", "Lopunny.png", "Lucario-Mega.png", "Lucario.png", "Lumineon.png", "Luxio.png", "Luxray.png", "Magmortar.png", "Magnezone.png", "Mamoswine.png", "Manaphy.png", "Mantyke.png", "Mesprit.png", "Mime_Jr.png", "Mismagius.png", "Monferno.png", "Mothim.png", "Munchlax.png", "Pachirisu.png", "Palkia.png", "Phione.png", "Piplup.png", "Porygon-Z.png", "Prinplup.png", "Probopass.png", "Purugly.png", "Rampardos.png", "Regigigas.png", "Rhyperior.png", "Riolu.png", "Roserade.png", "Rotom-Fan.png", "Rotom-Frost.png", "Rotom-Heat.png", "Rotom-Mow.png", "Rotom-Wash.png", "Rotom.png", "Shaymin-Land.png", "Shaymin-Sky.png", "Shellos-East.png", "Shellos-West.png", "Shieldon.png", "Shinx.png", "Skorupi.png", "Skuntank.png", "Snover.png", "Spiritomb.png", "Staraptor.png", "Staravia.png", "Starly.png", "Stunky.png", "Tangrowth.png", "Togekiss.png", "Torterra.png", "Toxicroak.png", "Turtwig.png", "Uxie.png", "Vespiquen.png", "Weavile.png", "Wormadam.png", "Yanmega.png",],
        ["Accelgor.png", "Alomomola.png", "Amoonguss.png", "Archen.png", "Archeops.png", "Audino-Mega.png", "Audino.png", "Axew.png", "Basculin-Red.png", "Beartic.png", "Beheeyem.png", "Bisharp.png", "Blitzle.png", "Boldore.png", "Bouffalant.png", "Braviary.png", "Carracosta.png", "Chandelure.png", "Cinccino.png", "Cobalion.png", "Cofagrigus.png", "Conkeldurr.png", "Cottonee.png", "Crustle.png", "Cryogonal.png", "Cubchoo.png", "Darmanitan-Galar.png", "Darmanitan.png", "Darumaka-Galar.png", "Darumaka.png", "Deerling-Spring.png", "Deino.png", "Dewott.png", "Drilbur.png", "Druddigon.png", "Ducklett.png", "Duosion.png", "Durant.png", "Dwebble.png", "Eelektrik.png", "Eelektross.png", "Elgyem.png", "Emboar.png", "Emolga.png", "Escavalier.png", "Excadrill.png", "Ferroseed.png", "Ferrothorn.png", "Foongus.png", "Fraxure.png", "Frillish-Female.png", "Frillish-Male.png", "Galvantula.png", "Garbodor-Gigantamax.png", "Garbodor.png", "Gigalith.png", "Golett.png", "Golurk.png", "Gothita.png", "Gothitelle.png", "Gothorita.png", "Gurdurr.png", "Haxorus.png", "Heatmor.png", "Herdier.png", "Hydreigon.png", "Jellicent-Female.png", "Jellicent-Male.png", "Joltik.png", "Karrablast.png", "Keldeo-Resolute.png", "Keldeo.png", "Klang.png", "Klink.png", "Klinklang.png", "Krokorok.png", "Krookodile.png", "Kyurem-Black.png", "Kyurem-White.png", "Lampent.png", "Landorus-Therian.png", "Landorus.png", "Larvesta.png", "Leavanny.png", "Liepard.png", "Lilligant.png", "Lillipup.png", "Litwick.png", "Mandibuzz.png", "Maractus.png", "Mienfoo.png", "Mienshao.png", "Minccino.png", "Munna.png", "Musharna.png", "Oshawott.png", "Palpitoad.png", "Panpour.png", "Pansage.png", "Pansear.png", "Patrat.png", "Pawniard.png", "Petilil.png", "Pidove.png", "Pignite.png", "Purrloin.png", "Reshiram.png", "Reuniclus.png", "Roggenrola.png", "Rufflet.png", "Samurott.png", "Sandile.png", "Sawk.png", "Sawsbuck-Spring.png", "Scolipede.png", "Scrafty.png", "Scraggy.png", "Seismitoad.png", "Serperior.png", "Servine.png", "Sewaddle.png", "Shelmet.png", "Sigilyph.png", "Simipour.png", "Simisage.png", "Simisear.png", "Snivy.png", "Solosis.png", "Stoutland.png", "Stunfisk-Galar.png", "Stunfisk.png", "Swadloon.png", "Swanna.png", "Swoobat.png", "Tepig.png", "Terrakion.png", "Throh.png", "Thundurus-Therian.png", "Thundurus.png", "Timburr.png", "Tirtouga.png", "Tornadus-Therian.png", "Tornadus.png", "Tranquill.png", "Trubbish.png", "Tympole.png", "Tynamo.png", "Unfezant-Female.png", "Unfezant-Male.png", "Vanillish.png", "Vanillite.png", "Vanilluxe.png", "Venipede.png", "Victini.png", "Virizion.png", "Volcarona.png", "Vullaby.png", "Watchog.png", "Whimsicott.png", "Whirlipede.png", "Woobat.png", "Yamask.png", "Zebstrika.png", "Zekrom.png", "Zoroark.png", "Zorua.png", "Zweilous.png",],
        ["Aegislash-Blade.png", "Aegislash-Shield.png", "Amaura.png", "Aromatisse.png", "Aurorus.png", "Avalugg.png", "Barbaracle.png", "Bergmite.png", "Binacle.png", "Braixen.png", "Bunnelby.png", "Carbink.png", "Chesnaught.png", "Chespin.png", "Clauncher.png", "Clawitzer.png", "Dedenne.png", "Delphox.png", "Diancie.png", "Diggersby.png", "Doublade.png", "Dragalge.png", "Espurr.png", "Fennekin.png", "Flabebe.png", "Fletchinder.png", "Fletchling.png", "Floette.png", "Florges.png", "Froakie.png", "Frogadier.png", "Furfrou.png", "Gogoat.png", "Goodra.png", "Goomy.png", "Gourgeist.png", "Greninja.png", "Hawlucha.png", "Heliolisk.png", "Helioptile.png", "Honedge.png", "Hoopa-Unbound.png", "Hoopa.png", "Inkay.png", "Klefki.png", "Litleo.png", "Malamar.png", "Meowstic-Female.png", "Meowstic-Male.png", "Noibat.png", "Noivern.png", "Pancham.png", "Pangoro.png", "Phantump.png", "Pumpkaboo.png", "Pyroar.png", "Quilladin.png", "Scatterbug.png", "Skiddo.png", "Skrelp.png", "Sliggoo.png", "Slurpuff.png", "Spewpa.png", "Spritzee.png", "Swirlix.png", "Sylveon.png", "Talonflame.png", "Trevenant.png", "Tyrantrum.png", "Tyrunt.png", "Vivillon.png", "Volcanion.png", "Xerneas.png", "Yveltal.png", "Zygarde-10Percent.png", "Zygarde-Complete.png", "Zygarde.png",],
        ["Araquanid.png", "Bewear.png", "Blacephalon.png", "Bounsweet.png", "Brionne.png", "Bruxish.png", "Buzzwole.png", "Celesteela.png", "Charjabug.png", "Comfey.png", "Cosmoem.png", "Cosmog.png", "Crabominable.png", "Crabrawler.png", "Cutiefly.png", "Dartrix.png", "Decidueye.png", "Dewpider.png", "Dhelmise.png", "Drampa.png", "Fomantis.png", "Golisopod.png", "Grubbin.png", "Gumshoos.png", "Guzzlord.png", "Hakamo-o.png", "Incineroar.png", "Jangmo-o.png", "Kartana.png", "Komala.png", "Kommo-o.png", "Litten.png", "Lunala.png", "Lurantis.png", "Lycanroc-Dusk.png", "Lycanroc-Midnight.png", "Magearna.png", "Mareanie.png", "Marshadow.png", "Melmetal.png", "Meltan.png", "Mimikyu.png", "Minior.png", "Morelull.png", "Mudbray.png", "Mudsdale.png", "Naganadel.png", "Necrozma-Dawn_Wings.png", "Necrozma-Dusk_Mane.png", "Necrozma-Ultra.png", "Necrozma.png", "Nihilego.png", "Oranguru.png", "Oricorio-Baile.png", "Oricorio-Pau.png", "Oricorio-Pom-Pom.png", "Oricorio-Sensu.png", "Palossand.png", "Passimian.png", "Pheromosa.png", "Pikipek.png", "Poipole.png", "Popplio.png", "Primarina.png", "Pyukumuku.png", "Ribombee.png", "Rockruff.png", "Rowlet.png", "Salandit.png", "Salazzle.png", "Sandygast.png", "Shiinotic.png", "Silvally.png", "Solgaleo.png", "Stakataka.png", "Steenee.png", "Stufful.png", "Tapu_Bulu.png", "Tapu_Fini.png", "Tapu_Koko.png", "Tapu_Lele.png", "Togedemaru.png", "Torracat.png", "Toucannon.png", "Toxapex.png", "Trumbeak.png", "Tsareena.png", "Turtonator.png", "Type_Null.png", "Vikavolt.png", "Wimpod.png", "Wishiwashi-School.png", "Wishiwashi-Solo.png", "Xurkitree.png", "Yungoos.png", "Zeraora.png",],
        ["Alcremie-Gigantamax.png", "Alcremie.png", "Appletun.png", "Applin.png", "Arctovish.png", "Arctozolt.png", "Arrokuda.png", "Barraskewda.png", "Blipbug.png", "Boltund.png", "Carkol.png", "Centiskorch-Gigantamax.png", "Centiskorch.png", "Chewtle.png", "Cinderace-Gigantamax.png", "Cinderace.png", "Clobbopus.png", "Coalossal-Gigantamax.png", "Coalossal.png", "Copperajah-Gigantamax.png", "Copperajah.png", "Corviknight-Gigantamax.png", "Corviknight.png", "Corvisquire.png", "Cramorant.png", "Cufant.png", "Cursola.png", "Dottler.png", "Dracovish.png", "Dracozolt.png", "Dragapult.png", "Drakloak.png", "Drednaw-Gigantamax.png", "Drednaw.png", "Dreepy.png", "Drizzile.png", "Dubwool.png", "Duraludon-Gigantamax.png", "Duraludon.png", "Eiscue.png", "Eldegoss.png", "Eternatus.png", "Falinks.png", "Flapple-Gigantamax.png", "Flapple.png", "Frosmoth.png", "Gossifleur.png", "Grapploct.png", "Greedent.png", "Grimmsnarl-Gigantamax.png", "Grimmsnarl.png", "Grookey.png", "Hatenna.png", "Hatterene-Gigantamax.png", "Hatterene.png", "Hattrem.png", "Impidimp.png", "Indeedee-Female.png", "Indeedee-Male.png", "Inteleon-Gigantamax.png", "Inteleon.png", "Kubfu.png", "Milcery.png", "Morgrem.png", "Morpeko-Full.png", "Mr._Rime.png", "Nickit.png", "Obstagoon.png", "Orbeetle-Gigantamax.png", "Orbeetle.png", "Perrserker.png", "Pincurchin.png", "Polteageist.png", "Raboot.png", "Rillaboom-Gigantamax.png", "Rillaboom.png", "Rolycoly.png", "Rookidee.png", "Runerigus.png", "Sandaconda-Gigantamax.png", "Sandaconda.png", "Scorbunny.png", "Silicobra.png", "Sinistea.png", "Sirfetchd.png", "Sizzlipede.png", "Skwovet.png", "Snom.png", "Sobble.png", "Stonjourner.png", "Thievul.png", "Thwackey.png", "Toxel.png", "Toxtricity-Amped.png", "Toxtricity-Gigantamax.png", "Toxtricity-Low_Key.png", "Urshifu-Gigantamax_Rapid_Strike.png", "Urshifu-Gigantamax_Single_Strike.png", "Urshifu-Rapid_Strike.png", "Wooloo.png", "Yamper.png", "Zacian.png", "Zamazenta.png", "Zarude.png",],
    ];
    let pkmnName, formattedName, score = 0, guessesLeft = 5, mode = "0";
    
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
        str = str.replace(/[^a-zA-Z ]/g, "");   // remove special characters
        str = str.replace(/\s/g, '');           // remove spaces
        
        // replace some pokemon naming stuff
        // with shorter equivalents
        str = str.replace("gigantamax", "gmax");
        str = str.replace("mega", "m");
        str = str.replace("therian", "t");
        str = str.replace("é", "e");
        str = str.replace("male", "m");
        str = str.replace("female", "f");
        str = str.replace("10percent", "10");
        str = str.replace("unbound", "u");
        str = str.replace("dawnwings", "dawn");
        str = str.replace("duskmane", "dusk");
        str = str.replace("ultra", "u");
        str = str.replace("galar", "g");
        str = str.replace("galarian", "g");
        str = str.replace("alola", "a");
        str = str.replace("alolan", "a");
        return str;
    };
    
    // scale image to fit canvas size (used for silhouette mode)
    let scaleToFit = (img) => {
        let scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        let x = (canvas.width / 2) - (img.width / 2) * scale;
        let y = (canvas.height / 2) - (img.height / 2) * scale;
        
        ctx.scale(1, 1);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    
    // get a random part of the image to crop (random part mode)
    let randomCrop = (img) => {
        // need to determine where to draw that isn't going to be at least 30% transparent
        let transparencyCheck = (x, y) => {
            if(ctx.getImageData(x, y, 150, 150).data[3] === 0 || ctx.getImageData(x + 100, y + 100, 150, 150).data[3] === 0 )
                return false;
            else
                return true;
        };
        
        // create variables for locaiton on image
        let sx, sy;
        
        do {
            sx = rand(img.width - 100);
            sy = rand(img.height - 100);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, sx, sy, 100, 100, 0, 0, 500, 500);
        }
        while (transparencyCheck(sx, sy) === false);
    };
    
    // handle random part mode when using an img instead of a canvas
    // TODO: try to figure out a way to get a random part that is not super transparent
    //       because as of now it just scales the center of the image
    let randomCropMobile = (img) => {
        if(img.style.transform === "scale(1)")
            img.style.transform = "scale(5)";
    };
    
    // gets random image
    let randomImg = (imgsArr, imgsPath) => {
        // check if mobile
        const isMobileRes = isMobile();
        
        // if using mobile, use the mobile element rather than create a new one
        let img = (isMobileRes) ? monMobile : document.createElement("img");
        
        // more necessary variables
        let randGen = rand(imgsArr.length);
        let randMon, loop = false, formArr = [];
        
        // swap visibility of canvas and mobile container
        if(isMobileRes) {
            canvas.style.display = "none";
            mobileContainer.style.display = "flex";
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
            
            if(imgsArr[randGen][randMon].indexOf("Mega") > 0 && formModifiers["mega"].checked === false)
                formArr[0] = false;
            else
                formArr[0] = true;
        
            if(imgsArr[randGen][randMon].indexOf("Gigantamax") > 0 && formModifiers["gmax"].checked === false)
                formArr[1] = false;
            else
                formArr[1] = true;
            
            if(imgsArr[randGen][randMon].indexOf("Alola") > 0 && formModifiers["alola"].checked === false)
                formArr[2] = false;
            else
                formArr[2] = true;
            
            if(imgsArr[randGen][randMon].indexOf("Galar") > 0 && formModifiers["galar"].checked === false)
                formArr[3] = false;
            else
                formArr[3] = true;
            
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
        img.src = imgsPath + (randGen + 1) + "/" + imgsArr[randGen][randMon];
        
        // get name of random pokemon
        pkmnName = imgsArr[randGen][randMon].split('.png')[0];
        formattedName = formatString(pkmnName);
        
        // wait for image to load and draw it
        img.onload = () => {
            // clear canvas first (if applicable)
            if(!isMobileRes)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // change draw mode based on radio buttons
            if(mode === "0") {
                if(isMobileRes) {
                    img.style.visibility = "hidden";
                    img.style.transform = "scale(1)";
                    img.classList.add("silhouette");
                    setTimeout(() => {
                        img.style.visibility = "visible";
                    }, 50);
                }
                else {
                    ctx.filter = "brightness(0%)";
                    scaleToFit(img);
                }
                
            } else {
                if(isMobileRes) {
                    img.style.visibility = "hidden";
                    randomCropMobile(img);
                    img.classList.remove("silhouette");
                    setTimeout(() => {
                        img.style.visibility = "visible";
                    }, 50);
                } else {
                    ctx.filter = "brightness(100%)";
                    randomCrop(img);
                }
            }
        };
        
        // focus input
        if(!isMobileRes)
            input.focus();
    };
    
    let submitGuess = () => {
        // if input value is nothing, then don't do anything
        if(input.value === "") {
            return;
        }
        
        // use string-similarity to be a bit more lax with
        // spell-checking names
        if(stringSimilarity.compareTwoStrings(formatString(input.value), formattedName) > 0.5) {
            img = randomImg(images, imagesPath);
            score++;
            
            // green box around text box
            input.classList.add("correct");
            setTimeout(() => {
                input.classList.remove("correct");
            }, 400);
            
        } else {
            //console.log(pkmnName);
            
            // shake text box
            input.classList.add("error");
            setTimeout(() => {
                input.classList.remove("error");
            }, 500);
            
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
        input.value = "";
        input.placeholder = "";
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
        
        randomImg(images, imagesPath);
    };
    
    // call randomImg
    randomImg(images, imagesPath);
    
    // add event listeners for buttons
    enter.onclick = submitGuess;
    playAgain.onclick = resetGame;
    newMon.onclick = () => { 
        guessesLeft--; 
        guessesDisp.innerHTML = guessesLeft;
        switch(guessesLeft) {
            case 0:
                gameOver();
                break;
            case 1:
                newMon.disabled = true;
                randomImg(images, imagesPath);
                break;
            default:
                randomImg(images, imagesPath);
                break;
        }
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
            mode = modeForm.elements[i].id.split("mode")[1];
            resetGame();
        };
    }
    
    // add onchange handlers for checkboxes
    for(let i = 0; i < genModifiers.length; i++) { genModifiers[i].onchange = resetGame; }
    for(let key in formModifiers) { formModifiers[key].onchange = resetGame; }
    
    // return any pokemon name as a placeholder
    let getPlaceholder = () => {
        let randGen = rand(images.length);
        let randMon = rand(images[randGen].length);
        
        return images[randGen][randMon].split('.png')[0];
    };
    
    // set a placeholder
    input.placeholder = getPlaceholder();
};