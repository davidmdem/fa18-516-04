$pyEnvPath = if ($env:PYENV_PATH -eq $null) { "c:\pythons" } else { $env:PYENV_PATH }

function PyEnv-Add {
  param($envName)
  $envPath = "$pyEnvPath\$envName"
  Write-Host "Creating $envName in $pyEnvPath"
  New-Item -ItemType Directory -Force -Path $pyEnvPath | Out-Null
  python -m venv $envPath
  Write-Host "Done"
}

function PyEnv-Get {
  Get-ChildItem $pyEnvPath -Directory | Select-Object -ExpandProperty Name 
}

function PyEnv-Set {
  param($envName)
  . $pyEnvPath\$envName\Scripts\Activate.ps1 
}

function PyEnv-Remove {
  param($envName)
  Remove-Item "$pyEnvPath\$envName" -Recurse -Force
}

function PyEnv-Clear {
  deactivate
}

# function PyEnv-Select {
#   # Todo: Menu choice
# }
