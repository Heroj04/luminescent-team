# (874) _RESET_SYS_FLAG

## Effect

Resets a System Flag to false.

A list of all System Flags can be found [here](../../../dictionary/system-flags.md).

:::info
System Flags are remembered when closing the game.
:::

## Syntax

```c
_RESET_SYS_FLAG(flag)
```

| Argument | Description | Types | Required |
| - | - | - | - |
| **flag** | The System flag to reset | SysFlag | Required |

## Example

```c
ev_dummy:
_SET_SYS_FLAG($SYS_FLAG_AUTOSAVE_STOP)
; my code
_RESET_SYS_FLAG($SYS_FLAG_AUTOSAVE_STOP)
```

The above script will disable then enable the auto save feature.

