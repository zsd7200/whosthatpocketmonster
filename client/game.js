window.onload = () => {
    // get dom elements and make some variables
    let monMobile = document.querySelector("#mon-mobile");
    let monDesktop = document.createElement("img");
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
        ["Abra.webp", "Aerodactyl-Mega.webp", "Aerodactyl.webp", "Alakazam-Mega.webp", "Alakazam.webp", "Arbok.webp", "Arcanine.webp", "Articuno-Galar.webp", "Articuno.webp", "Beedrill-Mega.webp", "Beedrill.webp", "Bellsprout.webp", "Blastoise-Gigantamax.webp", "Blastoise-Mega.webp", "Blastoise.webp", "Bulbasaur.webp", "Butterfree-Gigantamax.webp", "Butterfree.webp", "Caterpie.webp", "Chansey.webp", "Charizard-Gigantamax.webp", "Charizard-Mega_X.webp", "Charizard-Mega_Y.webp", "Charizard.webp", "Charmander.webp", "Charmeleon.webp", "Clefable.webp", "Clefairy.webp", "Cloyster.webp", "Cubone.webp", "Dewgong.webp", "Diglett-Alola.webp", "Diglett.webp", "Ditto.webp", "Dodrio.webp", "Doduo.webp", "Dragonair.webp", "Dragonite.webp", "Dratini.webp", "Drowzee.webp", "Dugtrio-Alola.webp", "Dugtrio.webp", "Eevee-Gigantamax.webp", "Eevee.webp", "Ekans.webp", "Electabuzz.webp", "Electrode.webp", "Exeggcute.webp", "Exeggutor-Alola.webp", "Exeggutor.webp", "Farfetchd.webp", "Farfetchd-Galar.webp", "Fearow.webp", "Flareon.webp", "Gastly.webp", "Gengar-Gigantamax.webp", "Gengar.webp", "Geodude-Alola.webp", "Geodude.webp", "Gloom.webp", "Golbat.webp", "Goldeen.webp", "Golduck.webp", "Golem-Alola.webp", "Golem.webp", "Graveler-Alola.webp", "Graveler.webp", "Grimer-Alola.webp", "Grimer.webp", "Growlithe.webp", "Gyarados-Mega.webp", "Gyarados.webp", "Haunter.webp", "Hitmonchan.webp", "Hitmonlee.webp", "Horsea.webp", "Hypno.webp", "Ivysaur.webp", "Jigglypuff.webp", "Jolteon.webp", "Jynx.webp", "Kabuto.webp", "Kabutops.webp", "Kadabra.webp", "Kakuna.webp", "Kangaskhan-Mega.webp", "Kangaskhan.webp", "Kingler-Gigantamax.webp", "Kingler.webp", "Koffing.webp", "Krabby.webp", "Lapras.webp", "Lickitung.webp", "Machamp-Gigantamax.webp", "Machamp.webp", "Machoke.webp", "Machop.webp", "Magikarp.webp", "Magmar.webp", "Magnemite.webp", "Magneton.webp", "Mankey.webp", "Marowak-Alola.webp", "Marowak.webp", "Meowth-Alola.webp", "Meowth-Gigantamax.webp", "Meowth.webp", "Metapod.webp", "Mew.webp", "Mewtwo-Mega_X.webp", "Mewtwo-Mega_Y.webp", "Mewtwo.webp", "Moltres-Galar.webp", "Moltres.webp", "Mr._Mime-Galar.webp", "Mr._Mime.webp", "Muk-Alola.webp", "Muk.webp", "Nidoking.webp", "Nidoqueen.webp", "Nidoran-Female.webp", "Nidoran-Male.webp", "Nidorina.webp", "Nidorino.webp", "Ninetales-Alola.webp", "Ninetales.webp", "Oddish.webp", "Omanyte.webp", "Omastar.webp", "Onix.webp", "Paras.webp", "Parasect.webp", "Persian-Alola.webp", "Persian.webp", "Pidgeot-Mega.webp", "Pidgeot.webp", "Pidgeotto.webp", "Pidgey.webp", "Pikachu.webp", "Pinsir-Mega.webp", "Pinsir.webp", "Poliwag.webp", "Poliwhirl.webp", "Poliwrath.webp", "Ponyta-Galar.webp", "Ponyta.webp", "Porygon.webp", "Primeape.webp", "Psyduck.webp", "Raichu.webp", "Rapidash-Galar.webp", "Rapidash.webp", "Raticate-Alola.webp", "Raticate.webp", "Rattata-Alola.webp", "Rattata.webp", "Rhydon.webp", "Rhyhorn.webp", "Sandshrew-Alola.webp", "Sandshrew.webp", "Sandslash-Alola.webp", "Sandslash.webp", "Scyther.webp", "Seadra.webp", "Seaking.webp", "Seel.webp", "Shellder.webp", "Slowbro.webp", "Slowpoke-Galar.webp", "Slowpoke.webp", "Snorlax-Gigantamax.webp", "Snorlax.webp", "Spearow.webp", "Squirtle.webp", "Starmie.webp", "Staryu.webp", "Tangela.webp", "Tauros.webp", "Tentacool.webp", "Tentacruel.webp", "Vaporeon.webp", "Venomoth.webp", "Venonat.webp", "Venusaur-Gigantamax.webp", "Venusaur-Mega.webp", "Venusaur.webp", "Victreebel.webp", "Vileplume.webp", "Voltorb.webp", "Vulpix-Alola.webp", "Vulpix.webp", "Wartortle.webp", "Weedle.webp", "Weepinbell.webp", "Weezing-Galar.webp", "Weezing.webp", "Wigglytuff.webp", "Zapdos-Galar.webp", "Zapdos.webp", "Zubat.webp",],
        ["Aipom.webp", "Ampharos-Mega.webp", "Ampharos.webp", "Ariados.webp", "Azumarill.webp", "Bayleef.webp", "Bellossom.webp", "Blissey.webp", "Celebi.webp", "Chikorita.webp", "Chinchou.webp", "Cleffa.webp", "Corsola-Galar.webp", "Corsola.webp", "Crobat.webp", "Croconaw.webp", "Cyndaquil.webp", "Delibird.webp", "Donphan.webp", "Dunsparce.webp", "Elekid.webp", "Entei.webp", "Espeon.webp", "Feraligatr.webp", "Forretress.webp", "Furret.webp", "Girafarig.webp", "Gligar.webp", "Granbull.webp", "Heracross-Mega.webp", "Heracross.webp", "Hitmontop.webp", "Ho-Oh.webp", "Hoothoot.webp", "Hoppip.webp", "Houndoom.webp", "Houndour.webp", "Igglybuff.webp", "Jumpluff.webp", "Kingdra.webp", "Lanturn.webp", "Larvitar.webp", "Ledian.webp", "Ledyba.webp", "Lugia.webp", "Magby.webp", "Magcargo.webp", "Mantine.webp", "Mareep.webp", "Marill.webp", "Meganium.webp", "Miltank.webp", "Misdreavus.webp", "Murkrow.webp", "Natu.webp", "Noctowl.webp", "Octillery.webp", "Phanpy.webp", "Pichu.webp", "Piloswine.webp", "Pineco.webp", "Politoed.webp", "Porygon2.webp", "Pupitar.webp", "Quagsire.webp", "Quilava.webp", "Qwilfish.webp", "Raikou.webp", "Remoraid.webp", "Scizor-Mega.webp", "Scizor.webp", "Sentret.webp", "Shuckle.webp", "Skarmory.webp", "Skiploom.webp", "Slowking.webp", "Slugma.webp", "Smeargle.webp", "Smoochum.webp", "Sneasel.webp", "Snubbull.webp", "Spinarak.webp", "Stantler.webp", "Steelix-Mega.webp", "Steelix.webp", "Sudowoodo.webp", "Suicune.webp", "Sunflora.webp", "Sunkern.webp", "Swinub.webp", "Teddiursa.webp", "Togepi.webp", "Togetic.webp", "Totodile.webp", "Typhlosion.webp", "Tyranitar-Mega.webp", "Tyranitar.webp", "Tyrogue.webp", "Umbreon.webp", "Unown.webp", "Ursaring.webp", "Wobbuffet.webp", "Wooper.webp", "Xatu.webp", "Yanma.webp",],
        ["Absol.webp", "Aggron-Mega.webp", "Aggron.webp", "Altaria-Mega.webp", "Altaria.webp", "Anorith.webp", "Armaldo.webp", "Aron.webp", "Azurill.webp", "Bagon.webp", "Baltoy.webp", "Banette-Mega.webp", "Banette.webp", "Barboach.webp", "Beautifly.webp", "Beldum.webp", "Blaziken-Mega.webp", "Blaziken.webp", "Breloom.webp", "Cacnea.webp", "Cacturne.webp", "Camerupt-Mega.webp", "Camerupt.webp", "Carvanha.webp", "Cascoon.webp", "Castform.webp", "Chimecho.webp", "Clamperl.webp", "Claydol.webp", "Combusken.webp", "Corphish.webp", "Cradily.webp", "Crawdaunt.webp", "Delcatty.webp", "Deoxys-Attack.webp", "Deoxys-Defense.webp", "Deoxys-Speed.webp", "Deoxys.webp", "Dusclops.webp", "Duskull.webp", "Dustox.webp", "Electrike.webp", "Exploud.webp", "Feebas.webp", "Flygon.webp", "Gardevoir-Mega.webp", "Gardevoir.webp", "Glalie-Mega.webp", "Glalie.webp", "Gorebyss.webp", "Groudon-Primal.webp", "Groudon.webp", "Grovyle.webp", "Grumpig.webp", "Gulpin.webp", "Hariyama.webp", "Huntail.webp", "Illumise.webp", "Jirachi.webp", "Kecleon.webp", "Kirlia.webp", "Kyogre-Primal.webp", "Kyogre.webp", "Lairon.webp", "Latias-Mega.webp", "Latias.webp", "Latios-Mega.webp", "Latios.webp", "Lileep.webp", "Linoone-Galar.webp", "Linoone.webp", "Lombre.webp", "Lotad.webp", "Loudred.webp", "Ludicolo.webp", "Lunatone.webp", "Luvdisc.webp", "Makuhita.webp", "Manectric-Mega.webp", "Manectric.webp", "Marshtomp.webp", "Masquerain.webp", "Mawile-Mega.webp", "Mawile.webp", "Medicham-Mega.webp", "Medicham.webp", "Meditite.webp", "Metagross-Mega.webp", "Metagross.webp", "Metang.webp", "Mightyena.webp", "Milotic.webp", "Minun.webp", "Mudkip.webp", "Nincada.webp", "Ninjask.webp", "Nosepass.webp", "Numel.webp", "Nuzleaf.webp", "Pelipper.webp", "Plusle.webp", "Poochyena.webp", "Ralts.webp", "Rayquaza-Mega.webp", "Rayquaza.webp", "Regice.webp", "Regirock.webp", "Registeel.webp", "Relicanth.webp", "Roselia.webp", "Sableye-Mega.webp", "Sableye.webp", "Salamence-Mega.webp", "Salamence.webp", "Sceptile-Mega.webp", "Sceptile.webp", "Sealeo.webp", "Seedot.webp", "Seviper.webp", "Sharpedo-Mega.webp", "Sharpedo.webp", "Shedinja.webp", "Shelgon.webp", "Shiftry.webp", "Shroomish.webp", "Shuppet.webp", "Silcoon.webp", "Skitty.webp", "Slaking.webp", "Slakoth.webp", "Snorunt.webp", "Solrock.webp", "Spheal.webp", "Spinda.webp", "Spoink.webp", "Surskit.webp", "Swablu.webp", "Swalot.webp", "Swampert-Mega.webp", "Swampert.webp", "Swellow.webp", "Taillow.webp", "Torchic.webp", "Torkoal.webp", "Trapinch.webp", "Treecko.webp", "Tropius.webp", "Vibrava.webp", "Vigoroth.webp", "Volbeat.webp", "Wailmer.webp", "Wailord.webp", "Walrein.webp", "Whiscash.webp", "Whismur.webp", "Wingull.webp", "Wurmple.webp", "Wynaut.webp", "Zangoose.webp", "Zigzagoon-Galar.webp", "Zigzagoon.webp",],
        ["Abomasnow-Mega.webp", "Abomasnow.webp", "Ambipom.webp", "Arceus.webp", "Azelf.webp", "Bastiodon.webp", "Bibarel.webp", "Bidoof.webp", "Bonsly.webp", "Bronzong.webp", "Bronzor.webp", "Budew.webp", "Buizel.webp", "Buneary.webp", "Burmy.webp", "Carnivine.webp", "Chatot.webp", "Cherrim-Overcast.webp", "Cherrim-Sunny.webp", "Cherubi.webp", "Chimchar.webp", "Chingling.webp", "Combee.webp", "Cranidos.webp", "Cresselia.webp", "Croagunk.webp", "Darkrai.webp", "Dialga.webp", "Drapion.webp", "Drifblim.webp", "Drifloon.webp", "Dusknoir.webp", "Electivire.webp", "Empoleon.webp", "Finneon.webp", "Floatzel.webp", "Froslass.webp", "Gabite.webp", "Gallade-Mega.webp", "Gallade.webp", "Garchomp-Mega.webp", "Garchomp.webp", "Gastrodon-East.webp", "Gastrodon-West.webp", "Gible.webp", "Giratina-Altered.webp", "Glaceon.webp", "Glameow.webp", "Gliscor.webp", "Grotle.webp", "Happiny.webp", "Heatran.webp", "Hippopotas.webp", "Hippowdon.webp", "Honchkrow.webp", "Infernape.webp", "Kricketot.webp", "Kricketune.webp", "Leafeon.webp", "Lickilicky.webp", "Lopunny-Mega.webp", "Lopunny.webp", "Lucario-Mega.webp", "Lucario.webp", "Lumineon.webp", "Luxio.webp", "Luxray.webp", "Magmortar.webp", "Magnezone.webp", "Mamoswine.webp", "Manaphy.webp", "Mantyke.webp", "Mesprit.webp", "Mime_Jr.webp", "Mismagius.webp", "Monferno.webp", "Mothim.webp", "Munchlax.webp", "Pachirisu.webp", "Palkia.webp", "Phione.webp", "Piplup.webp", "Porygon-Z.webp", "Prinplup.webp", "Probopass.webp", "Purugly.webp", "Rampardos.webp", "Regigigas.webp", "Rhyperior.webp", "Riolu.webp", "Roserade.webp", "Rotom-Fan.webp", "Rotom-Frost.webp", "Rotom-Heat.webp", "Rotom-Mow.webp", "Rotom-Wash.webp", "Rotom.webp", "Shaymin-Land.webp", "Shaymin-Sky.webp", "Shellos-East.webp", "Shellos-West.webp", "Shieldon.webp", "Shinx.webp", "Skorupi.webp", "Skuntank.webp", "Snover.webp", "Spiritomb.webp", "Staraptor.webp", "Staravia.webp", "Starly.webp", "Stunky.webp", "Tangrowth.webp", "Togekiss.webp", "Torterra.webp", "Toxicroak.webp", "Turtwig.webp", "Uxie.webp", "Vespiquen.webp", "Weavile.webp", "Wormadam.webp", "Yanmega.webp",],
        ["Accelgor.webp", "Alomomola.webp", "Amoonguss.webp", "Archen.webp", "Archeops.webp", "Audino-Mega.webp", "Audino.webp", "Axew.webp", "Basculin-Red.webp", "Beartic.webp", "Beheeyem.webp", "Bisharp.webp", "Blitzle.webp", "Boldore.webp", "Bouffalant.webp", "Braviary.webp", "Carracosta.webp", "Chandelure.webp", "Cinccino.webp", "Cobalion.webp", "Cofagrigus.webp", "Conkeldurr.webp", "Cottonee.webp", "Crustle.webp", "Cryogonal.webp", "Cubchoo.webp", "Darmanitan-Galar.webp", "Darmanitan.webp", "Darumaka-Galar.webp", "Darumaka.webp", "Deerling-Spring.webp", "Deino.webp", "Dewott.webp", "Drilbur.webp", "Druddigon.webp", "Ducklett.webp", "Duosion.webp", "Durant.webp", "Dwebble.webp", "Eelektrik.webp", "Eelektross.webp", "Elgyem.webp", "Emboar.webp", "Emolga.webp", "Escavalier.webp", "Excadrill.webp", "Ferroseed.webp", "Ferrothorn.webp", "Foongus.webp", "Fraxure.webp", "Frillish-Female.webp", "Frillish-Male.webp", "Galvantula.webp", "Garbodor-Gigantamax.webp", "Garbodor.webp", "Gigalith.webp", "Golett.webp", "Golurk.webp", "Gothita.webp", "Gothitelle.webp", "Gothorita.webp", "Gurdurr.webp", "Haxorus.webp", "Heatmor.webp", "Herdier.webp", "Hydreigon.webp", "Jellicent-Female.webp", "Jellicent-Male.webp", "Joltik.webp", "Karrablast.webp", "Keldeo-Resolute.webp", "Keldeo.webp", "Klang.webp", "Klink.webp", "Klinklang.webp", "Krokorok.webp", "Krookodile.webp", "Kyurem-Black.webp", "Kyurem-White.webp", "Lampent.webp", "Landorus-Therian.webp", "Landorus.webp", "Larvesta.webp", "Leavanny.webp", "Liepard.webp", "Lilligant.webp", "Lillipup.webp", "Litwick.webp", "Mandibuzz.webp", "Maractus.webp", "Mienfoo.webp", "Mienshao.webp", "Minccino.webp", "Munna.webp", "Musharna.webp", "Oshawott.webp", "Palpitoad.webp", "Panpour.webp", "Pansage.webp", "Pansear.webp", "Patrat.webp", "Pawniard.webp", "Petilil.webp", "Pidove.webp", "Pignite.webp", "Purrloin.webp", "Reshiram.webp", "Reuniclus.webp", "Roggenrola.webp", "Rufflet.webp", "Samurott.webp", "Sandile.webp", "Sawk.webp", "Sawsbuck-Spring.webp", "Scolipede.webp", "Scrafty.webp", "Scraggy.webp", "Seismitoad.webp", "Serperior.webp", "Servine.webp", "Sewaddle.webp", "Shelmet.webp", "Sigilyph.webp", "Simipour.webp", "Simisage.webp", "Simisear.webp", "Snivy.webp", "Solosis.webp", "Stoutland.webp", "Stunfisk-Galar.webp", "Stunfisk.webp", "Swadloon.webp", "Swanna.webp", "Swoobat.webp", "Tepig.webp", "Terrakion.webp", "Throh.webp", "Thundurus-Therian.webp", "Thundurus.webp", "Timburr.webp", "Tirtouga.webp", "Tornadus-Therian.webp", "Tornadus.webp", "Tranquill.webp", "Trubbish.webp", "Tympole.webp", "Tynamo.webp", "Unfezant-Female.webp", "Unfezant-Male.webp", "Vanillish.webp", "Vanillite.webp", "Vanilluxe.webp", "Venipede.webp", "Victini.webp", "Virizion.webp", "Volcarona.webp", "Vullaby.webp", "Watchog.webp", "Whimsicott.webp", "Whirlipede.webp", "Woobat.webp", "Yamask.webp", "Zebstrika.webp", "Zekrom.webp", "Zoroark.webp", "Zorua.webp", "Zweilous.webp",],
        ["Aegislash-Blade.webp", "Aegislash-Shield.webp", "Amaura.webp", "Aromatisse.webp", "Aurorus.webp", "Avalugg.webp", "Barbaracle.webp", "Bergmite.webp", "Binacle.webp", "Braixen.webp", "Bunnelby.webp", "Carbink.webp", "Chesnaught.webp", "Chespin.webp", "Clauncher.webp", "Clawitzer.webp", "Dedenne.webp", "Delphox.webp", "Diancie.webp", "Diggersby.webp", "Doublade.webp", "Dragalge.webp", "Espurr.webp", "Fennekin.webp", "Flabebe.webp", "Fletchinder.webp", "Fletchling.webp", "Floette.webp", "Florges.webp", "Froakie.webp", "Frogadier.webp", "Furfrou.webp", "Gogoat.webp", "Goodra.webp", "Goomy.webp", "Gourgeist.webp", "Greninja.webp", "Hawlucha.webp", "Heliolisk.webp", "Helioptile.webp", "Honedge.webp", "Hoopa-Unbound.webp", "Hoopa.webp", "Inkay.webp", "Klefki.webp", "Litleo.webp", "Malamar.webp", "Meowstic-Female.webp", "Meowstic-Male.webp", "Noibat.webp", "Noivern.webp", "Pancham.webp", "Pangoro.webp", "Phantump.webp", "Pumpkaboo.webp", "Pyroar.webp", "Quilladin.webp", "Scatterbug.webp", "Skiddo.webp", "Skrelp.webp", "Sliggoo.webp", "Slurpuff.webp", "Spewpa.webp", "Spritzee.webp", "Swirlix.webp", "Sylveon.webp", "Talonflame.webp", "Trevenant.webp", "Tyrantrum.webp", "Tyrunt.webp", "Vivillon.webp", "Volcanion.webp", "Xerneas.webp", "Yveltal.webp", "Zygarde-10Percent.webp", "Zygarde-Complete.webp", "Zygarde.webp",],
        ["Araquanid.webp", "Bewear.webp", "Blacephalon.webp", "Bounsweet.webp", "Brionne.webp", "Bruxish.webp", "Buzzwole.webp", "Celesteela.webp", "Charjabug.webp", "Comfey.webp", "Cosmoem.webp", "Cosmog.webp", "Crabominable.webp", "Crabrawler.webp", "Cutiefly.webp", "Dartrix.webp", "Decidueye.webp", "Dewpider.webp", "Dhelmise.webp", "Drampa.webp", "Fomantis.webp", "Golisopod.webp", "Grubbin.webp", "Gumshoos.webp", "Guzzlord.webp", "Hakamo-o.webp", "Incineroar.webp", "Jangmo-o.webp", "Kartana.webp", "Komala.webp", "Kommo-o.webp", "Litten.webp", "Lunala.webp", "Lurantis.webp", "Lycanroc-Dusk.webp", "Lycanroc-Midnight.webp", "Magearna.webp", "Mareanie.webp", "Marshadow.webp", "Melmetal.webp", "Meltan.webp", "Mimikyu.webp", "Minior.webp", "Morelull.webp", "Mudbray.webp", "Mudsdale.webp", "Naganadel.webp", "Necrozma-Dawn_Wings.webp", "Necrozma-Dusk_Mane.webp", "Necrozma-Ultra.webp", "Necrozma.webp", "Nihilego.webp", "Oranguru.webp", "Oricorio-Baile.webp", "Oricorio-Pau.webp", "Oricorio-Pom-Pom.webp", "Oricorio-Sensu.webp", "Palossand.webp", "Passimian.webp", "Pheromosa.webp", "Pikipek.webp", "Poipole.webp", "Popplio.webp", "Primarina.webp", "Pyukumuku.webp", "Ribombee.webp", "Rockruff.webp", "Rowlet.webp", "Salandit.webp", "Salazzle.webp", "Sandygast.webp", "Shiinotic.webp", "Silvally.webp", "Solgaleo.webp", "Stakataka.webp", "Steenee.webp", "Stufful.webp", "Tapu_Bulu.webp", "Tapu_Fini.webp", "Tapu_Koko.webp", "Tapu_Lele.webp", "Togedemaru.webp", "Torracat.webp", "Toucannon.webp", "Toxapex.webp", "Trumbeak.webp", "Tsareena.webp", "Turtonator.webp", "Type_Null.webp", "Vikavolt.webp", "Wimpod.webp", "Wishiwashi-School.webp", "Wishiwashi-Solo.webp", "Xurkitree.webp", "Yungoos.webp", "Zeraora.webp",],
        ["Alcremie-Gigantamax.webp", "Alcremie.webp", "Appletun.webp", "Applin.webp", "Arctovish.webp", "Arctozolt.webp", "Arrokuda.webp", "Barraskewda.webp", "Blipbug.webp", "Boltund.webp", "Carkol.webp", "Centiskorch-Gigantamax.webp", "Centiskorch.webp", "Chewtle.webp", "Cinderace-Gigantamax.webp", "Cinderace.webp", "Clobbopus.webp", "Coalossal-Gigantamax.webp", "Coalossal.webp", "Copperajah-Gigantamax.webp", "Copperajah.webp", "Corviknight-Gigantamax.webp", "Corviknight.webp", "Corvisquire.webp", "Cramorant.webp", "Cufant.webp", "Cursola.webp", "Dottler.webp", "Dracovish.webp", "Dracozolt.webp", "Dragapult.webp", "Drakloak.webp", "Drednaw-Gigantamax.webp", "Drednaw.webp", "Dreepy.webp", "Drizzile.webp", "Dubwool.webp", "Duraludon-Gigantamax.webp", "Duraludon.webp", "Eiscue.webp", "Eldegoss.webp", "Eternatus.webp", "Falinks.webp", "Flapple-Gigantamax.webp", "Flapple.webp", "Frosmoth.webp", "Gossifleur.webp", "Grapploct.webp", "Greedent.webp", "Grimmsnarl-Gigantamax.webp", "Grimmsnarl.webp", "Grookey.webp", "Hatenna.webp", "Hatterene-Gigantamax.webp", "Hatterene.webp", "Hattrem.webp", "Impidimp.webp", "Indeedee-Female.webp", "Indeedee-Male.webp", "Inteleon-Gigantamax.webp", "Inteleon.webp", "Kubfu.webp", "Milcery.webp", "Morgrem.webp", "Morpeko-Full.webp", "Mr._Rime.webp", "Nickit.webp", "Obstagoon.webp", "Orbeetle-Gigantamax.webp", "Orbeetle.webp", "Perrserker.webp", "Pincurchin.webp", "Polteageist.webp", "Raboot.webp", "Rillaboom-Gigantamax.webp", "Rillaboom.webp", "Rolycoly.webp", "Rookidee.webp", "Runerigus.webp", "Sandaconda-Gigantamax.webp", "Sandaconda.webp", "Scorbunny.webp", "Silicobra.webp", "Sinistea.webp", "Sirfetchd.webp", "Sizzlipede.webp", "Skwovet.webp", "Snom.webp", "Sobble.webp", "Stonjourner.webp", "Thievul.webp", "Thwackey.webp", "Toxel.webp", "Toxtricity-Amped.webp", "Toxtricity-Gigantamax.webp", "Toxtricity-Low_Key.webp", "Urshifu-Gigantamax_Rapid_Strike.webp", "Urshifu-Gigantamax_Single_Strike.webp", "Urshifu-Rapid_Strike.webp", "Wooloo.webp", "Yamper.webp", "Zacian.webp", "Zamazenta.webp", "Zarude.webp",],
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        // check if mobile and select element accordingly
        const isMobileRes = isMobile();
        let img = (isMobileRes) ? monMobile : monDesktop;
        
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
        pkmnName = imgsArr[randGen][randMon].split('.webp')[0];
        formattedName = formatString(pkmnName);
        
        if(isMobileRes)
            img.style.visibility = "hidden";
        
        // wait for image to load and draw it
        img.onload = () => {
            // clear canvas first (if applicable)
            if(!isMobileRes)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // change draw mode based on radio buttons
            if(mode === "0") {
                if(isMobileRes) {
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
    
    let showMon = () => {
        // check if mobile and select element accordingly
        const isMobileRes = isMobile();
        let img = (isMobileRes) ? monMobile : monDesktop;
        
        // remove silhoutte class if mobile, otherwise
        // change ctx filter
        if(isMobileRes) {
            img.classList.remove("silhouette");
            img.style.transform = "scale(1)";
        } else {
            ctx.filter = "brightness(100%)";
            scaleToFit(img);
        }
    };
    
    let submitGuess = () => {
        // if input value is nothing, then don't do anything
        if(input.value === "") {
            return;
        }
        
        // use string-similarity to be a bit more lax with
        // spell-checking names
        if(stringSimilarity.compareTwoStrings(formatString(input.value), formattedName) > 0.5) {
            // show mon and increment score
            showMon();
            score++;
            
            // green box around text box, then get a new mon
            input.classList.add("correct");
            setTimeout(() => {
                input.classList.remove("correct");
                randomImg(images, imagesPath);
            }, 750);
            
        } else {           
            // shake text box
            input.classList.add("error");
            setTimeout(() => {
                input.classList.remove("error");
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
        let str = images[randGen][randMon].split('.webp')[0];
        
        // there's a handful of pokemon that have underscores in their filenames,
        // so we replace that with an underscore here
        str = str.replace("_", " ");
        
        return str;
    };
    
    // set a placeholder
    input.placeholder = getPlaceholder();
};