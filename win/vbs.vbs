Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "C:\start_operation_utilities_server.bat" & Chr(34), 0
Set WshShell = Nothing