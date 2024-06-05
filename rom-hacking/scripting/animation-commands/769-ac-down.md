# (769) _AC_DOWN

## Effect

Moves the entity of the animation down over a given amount of frames per tile.

If the **frames** argument is negative, 16 is used.

If the **idle_animation** argument is provided, the entity will move while in its idle animation.

Starts the stepping sound effect.

:::info

This command only moves the entity. It does not turn the entity in the moving direction.

:::

## Syntax

```c
_AC_DOWN(tiles, time, idle_animation?)
```

| Argument | Description | Types | Required |
| - | - | - | - |
| **tiles** | The amount of tiles | Float | Required |
| **time** | The amount of time to move per tile, in frames | Float | Required |
| **idle_animation** | Whether to use the idle animation | Any | Optional |

## Example

```c
anm_dummy:
_AC_DIR_D(8)
_AC_DOWN(3, 8)
_ACMD_END()
```

The above script will turn the entity down and then move it down 3 tiles over 8 frames per tile.
