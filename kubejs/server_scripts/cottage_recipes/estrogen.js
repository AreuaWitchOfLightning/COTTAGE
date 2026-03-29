if (Platform.isLoaded("createestrogen")) {
    ServerEvents.recipes(event => {
// event.remove({id: 'createestrogen:centrifuge'})
        event.replaceInput(
            {id: 'createestrogen:centrifuge'},
            'create:precision_mechanism',
            'kubejs:sealed_mechanism'
        )

    })
}