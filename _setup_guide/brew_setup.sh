/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew update
brew upgrade

brew tap homebrew/cask-fonts
brew install --cask font-jetbrains-mono

brew install \
    git \
    go \
    nvm \
    cloc \
    youtube-dl \
    thefuck \
    openjdk \
    gradle \
    htop \
    imagemagick \
    zsh-syntax-highlighting


brew install --cask \
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
    asset-catalog-tinkerer