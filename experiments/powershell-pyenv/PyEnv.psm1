$pyEnvPath = if ($env:PYENV_PATH -eq $null) { "c:\pythons" } else { $env:PYENV_PATH }

function Add-PyEnv {
  param($envName)
  $envPath = "$pyEnvPath\$envName"
  Write-Host "Creating $envName in $pyEnvPath"
  New-Item -ItemType Directory -Force -Path $pyEnvPath | Out-Null
  python -m venv $envPath
  Write-Host "Done"
}

function Set-PyEnv {
  param($envName)
  . $pyEnvPath\$envName\Scripts\Activate.ps1 
}

function Remove-PyEnv {
  param($envName)
  Remove-Item "$pyEnvPath\$envName" -Recurse -Force
}

function Clear-PyEnv {
  deactivate
}

function Get-PyEnv {
  Get-ChildItem $pyEnvPath -Directory | Select-Object -ExpandProperty Name 
}


# function Select-PyEnv {
#   # Todo: Menu choice
# }
