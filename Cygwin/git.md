Install the Cygwin provided version of git  

Use the .gitconfig under ``/home/userName/``

Set the following configurations:  

```
User.name  
User.email  
http.proxy  
https.proxy  
core.autocrlf = true  
credential.helper = store // Warning: literally stores the password in a clear text file
git config --global credential.helper 'cache --timeout=36000' // Remembers passwords for 10 hours
```