## Core

observable： 被 MobX跟踪的状态。

action：允许修改状态的方法，在严格模式下只有 action 方法被允许修改状态。

computed：根据现有状态衍生出来的状态。 

flow：执行副作用，它是 generator 函数。可以更改状态值。

## Process

![MobX unidirectional flow](mobx.assets/flow2.png)

## Mobx and React

1. applicatiopn state
2. derivations: any value that can be computed automatically from the stat
3. *Reactions*: run automatically to perform some task
4. Actions

