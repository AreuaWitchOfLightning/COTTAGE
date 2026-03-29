if (Platform.isLoaded("gag") && Platform.isLoaded("estrogen")) {
    ServerEvents.recipes(event => {
        // time pouch
        event.remove({id: "gag:time_sand_pouch"})
        event.shaped(
            Item.of('gag:time_sand_pouch', 1),
            [
                "ABA",
                "CDC",
                "CEC"
            ],
            {
                A: 'minecraft:echo_shard',
                B: 'estrogen:moth_fuzz',
                C: 'minecraft:leather',
                D: 'minecraft:heart_of_the_sea',
                E: 'minecraft:rabbit_hide'
            }
        )

        // escape rope
        event.replaceInput(
            {id: 'gag:escape_rope'},
            'minecraft:chain',
            'minecraft:string'
        )
        event.replaceInput(
            {id: 'gag:escape_rope'},
            'minecraft:lead',
            '#forge:ingots/iron'
        )

        // heartstone
        event.remove({id: "gag:hearthstone"})
        event.shaped(
            Item.of('gag:hearthstone', 1),
            [
                "ABA",
                "BCB",
                "ABA"
            ],
            {
                A: '#forge:ingots/silver',
                B: 'minecraft:amethyst_shard',
                C: 'minecraft:ender_pearl'
            }
        )

        // labels
        event.remove({id: "gag:labeling_tool"})
        event.shaped(
            Item.of('gag:labeling_tool', 1),
            [
                ' AB',
                'CDB',
                ' EE'
            ],
            {
                A: 'sophisticatedstorage:packing_tape',
                B: 'minecraft:paper',
                C: 'minecraft:name_tag',
                D: 'create:precision_mechanism',
                E: '#forge:ingots/iron'
            }
        )
    })
}