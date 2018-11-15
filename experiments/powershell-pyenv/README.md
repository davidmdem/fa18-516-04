PowerShell PyEnv
===

A Python virtual environment management commands.

## Installation

**Set a path**


Use the `PYENV_PATH` environment variable to control where new environments are created.

If not set, new environments will be created in `C:\pythons` by default.

```
$path = "C:\pytons"
[System.Environment]::SetEnvironmentVariable("PYENV_PATH", $path, "User")
```

**Basic import**

The module can be imported into any PowerShell script:

```
Import-Module $PathToScript\PyEnv.psm1
```

**Global (recommended)**

1. Navigate to or create `~\Documents\WindowsPowerShell`
1. Put `PyEnv.psm1` here (recommended - it can go anywhere)
1. Create or modify `Microsoft.PowerShell_provile.ps1`
1. Add `Import-Module $PSScriptRoot\PyEnv.psm1`

The PyEnv commands should now be available in regular PowerShell command windows. 