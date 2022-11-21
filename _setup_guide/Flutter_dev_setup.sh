mkdir ~/development
cd ~/development
git clone https://github.com/flutter/flutter.git -b stable

### Manual
echo "Add the following lines to your '.zshrc'"
echo '
export PATH="$PATH":"$HOME/development/flutter/bin"
export PATH="$PATH":"$HOME/.pub-cache/bin"
alias fpg="flutter pub get"
'

source ~/.zshrc

if type flutter &> /dev/null; then
  echo "Flutter successfully installed"
else
  echo "ERROR: Flutter installation was not successful"
fi
read -p "Press Enter to continue or ctl+c to exit" < /dev/tty

flutter config --no-analytics
flutter precache
flutter doctor

brew install scrcpy
