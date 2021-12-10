/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew upgrade

brew tap homebrew/cask-fonts

brew install \
    git \
    go \
    nvm \
    youtube-dl \
    thefuck \
    htop \
    imagemagick

brew install --cask \
    font-jetbrains-mono \
    iterm2 \
    textmate \
    visual-studio-code \
    jetbrains-toolbox \
    coconutbattery \
    gpg-suite-no-mail \
    iina \
    keka \
    openinterminal \
    postman \
    suspicious-package \
    adobe-acrobat-reader \
    android-platform-tools \
    asset-catalog-tinkerer \
    rectangle
