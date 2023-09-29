if ($args.Count -gt 0) {
  $frame = $args[0];
  $parts = $frame.Split('=')
  $frame = $parts[0];

  if ($frame -eq '--angular') {
    $value = @{
      url = "http://localhost:4200"
    }
  }
  elseif ($frame -eq '--vue') {
    $value = @{
      url = "http://localhost:3000"
    }
  }
  elseif ($frame -eq '--next') {
    $value = @{
      url = "http://localhost:3000"
    }
  }
  elseif ($frame -eq '--url') {
    Write-Host "URL Selected: " $parts[1];
    $value = @{
      url = $parts[1]
    }
  }
  else {
    $value = @{
      url = "https://www.npmjs.com/package/mini-browser"
    }
  }
}
else {
  $value = @{
    url = "https://www.npmjs.com/package/mini-browser"
  }
}

$json = $value | ConvertTo-Json
$Env:browser = $json;

Start-Sleep -Seconds 2;
Start-Process -FilePath "./dist/mini-browser-win32-x64/mini-browser.exe" -Wait