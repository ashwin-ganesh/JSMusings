// Composition over inheritance

const barker = (state) => ({

  bark: () => console.log('Woof , I am ' + state.name)

});

const driver = (state) => ({

  drive: () => state.position = state.position + state.speed
});

// barker({name : 'karo'}).bark();

const killer = (state) => ({

  kill: () => console.log('Killing ',state.number , 'dogs')

});


const murderRobotDog = () => {

  let state = {

    // Define all state props here.


  }

  return Object.assign(
    {},
    barker(state),
    driver(state),
    killer(state)
  )
}


var dog = murderRobotDog();
