if (Platform.isLoaded("createestrogen")) {
    ServerEvents.recipes(event => {
        event.remove({id: "echochest:echo_chest"})

        event.shaped(
            Item.of('echochest:echo_chest', 1),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:echo_shard',
                B: 'minecraft:polished_deepslate',
                C: 'kubejs:enderium_machine'
            }

        )
    })
}