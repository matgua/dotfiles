eval "$(starship init zsh)"

source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh

source /usr/share/zsh/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh

# source /usr/share/zsh/plugins/zsh

# zle widget to paste from system clipboard.
_paste() {
    LBUFFER="${LBUFFER}$(xsel -ob)"
}
zle -N paste _paste

# Vi mode with working backspace (https://superuser.com/a/533685).
vi-search-fix() {
    zle vi-cmd-mode
    zle .vi-history-search-backward
}
autoload vi-search-fix
zle -N vi-search-fix
bindkey -M viins '\e/' vi-search-fix
bindkey "^?" backward-delete-char
bindkey "^W" backward-kill-word
# Control-h also deletes the previous char
bindkey "^H" backward-delete-char
bindkey "^U" backward-kill-line
bindkey "^V" paste

# Misc options.
setopt INTERACTIVE_COMMENTS

# Syntax highlighting.
local green="#b8bb26"
local orange="#fe8019"
local gray="#928374"
typeset -A ZSH_HIGHLIGHT_STYLES
ZSH_HIGHLIGHT_STYLES[command]="fg=white,bold"
ZSH_HIGHLIGHT_STYLES[single-hyphen-option]="fg=${gray}"
ZSH_HIGHLIGHT_STYLES[double-hyphen-option]="fg=${gray}"
ZSH_HIGHLIGHT_STYLES[commandseparator]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[globbing]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[redirection]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[reserved-word]="fg=white,bold"
ZSH_HIGHLIGHT_STYLES[builtin]="fg=white,bold"
ZSH_HIGHLIGHT_STYLES[alias]="fg=white,bold,underline"
ZSH_HIGHLIGHT_STYLES[single-quoted-argument]="fg=${green}"
ZSH_HIGHLIGHT_STYLES[double-quoted-argument]="fg=${green}"
ZSH_HIGHLIGHT_STYLES[command-substitution-delimiter]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[dollar-double-quoted-argument]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[dollar-quoted-argument]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[dollar-quoted-argument-unclosed]="fg=yellow,bold"
ZSH_HIGHLIGHT_STYLES[comment]="fg=black,bold"
ZSH_HIGHLIGHT_STYLES[precommand]="fg=${orange},bold"
ZSH_HIGHLIGHT_STYLES[unknown-token]="fg=red,bold"
# This controls even the $(...).
ZSH_HIGHLIGHT_STYLES[back-quoted-argument-delimiter]="fg=yellow,bold"
export ZSH_HIGHLIGHT_MAXLENGTH=60
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Env-vars.
export LC_ALL='en_US.UTF-8'
export LANG='en_US.UTF-8'
export EDITOR='/usr/bin/nvim'
export BROWSER='/usr/bin/chromium'
export TERMINAL='/usr/bin/alacritty'
export TERM='alacritty'
export STATUSBAR='/usr/bin/polybar'
export SXHKD_SHELL='/usr/bin/dash'
export KAKOUNE_POSIX_SHELL='/usr/bin/bash'
export DOTNET_CLI_TELEMETRY_OPTOUT='true'
export XDG_CONFIG_HOME='/home/agnipau/.config'
export ANDROID_SDK_ROOT='/opt/android-sdk'
export ANDROID_HOME="${ANDROID_SDK_ROOT}"
export ANDROID_NDK_ROOT='/opt/android-sdk/ndk/21.0.6113669'
export JAVA_OPTS='-XX:+IgnoreUnrecognizedVMOptions'
export JAVA_HOME='/usr/lib/jvm/java-8-openjdk'
export _JAVA_AWT_WM_NONREPARENTING='1'
export LD_LIBRARY_PATH='/usr/local/lib'
export FZF_DEFAULT_COMMAND='fd --type f --hidden --follow --exclude .git'
export FZF_DEFAULT_OPTS="
  --multi --inline-info --height 95%
  --color fg:8,hl:7,fg+:6,bg+:0,hl+:7
  --color info:0,prompt:6,spinner:6,pointer:6,marker:6
"
export GOPATH='/home/agnipau/go'
export PATH="/home/agnipau/bin:/home/agnipau/pbin:/home/agnipau/dev/flutter/bin:/home/agnipau/.cargo/bin:/home/agnipau/.npm-packages/bin:${GOPATH}/bin:/home/agnipau/.luarocks/bin:/home/agnipau/.pub-cache/bin:${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/emulator:/home/agnipau/.local/bin:${PATH}"

# Aliases.
alias tmux='tmux -u'
alias uupd='yay --color=auto -Syyuv'
alias uupda='yay --color=auto -Syyuv; rustup update; flutter upgrade --force --verbose; flutter config --no-analytics'
alias upd='yay --color=auto -Syuv'
alias autorem='yay --color=auto -R $(yay -Qdtq)'
alias installed='yay --color=auto -Qe'
alias src='yay --color=auto -Ss'
alias ins='yay -S --needed --noconfirm'
alias pinfo='yay -Qi --color=auto'
alias rpinfo='yay -Si --color=auto'
alias rem='yay -R --noconfirm'
# alias ssrc='nix-env -qaP'
# alias src='nix search'
# alias rem='sudo nix-env -e'
# alias upd='sudo nix-channel --update'
# alias uupd='sudo nixos-rebuild switch'
# alias enix='sudo nvim /etc/nixos/configuration.nix'
# alias nixs='nix-shell --run fish'
# alias reload='. $HOME/.config/fish/config.fish'
alias ref='sudo reflector --verbose --sort rate --save /etc/pacman.d/mirrorlist'
alias mkdir='mkdir -p'
# alias pygm='pygmentize -f png -O "font_name=Input Mono Narrow,font_size=32" -o pygmentscreen.png script.py'
alias ls='exa -lh -s type'
alias la='exa -lah -s type'
alias ggg='git add . && git commit -m Update && git push origin master'
alias dl='curl -LOC -'
alias cpp='rsync -ah --progress'
alias glog='git log --no-color'
alias rm='trash --'
alias rml='trash-list'
alias rmr='trash-restore'
alias k='xset r rate 200 40; sudo localectl set-x11-keymap it pc105 us caps:ctrl_modifier'
# alias kg='gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 40; gsettings set org.gnome.desktop.peripherals.keyboard delay 200'
alias reboot='read "?Do you want to reboot? " && systemctl reboot'
alias poweroff='read "?Do you want to shutdown? " && systemctl poweroff'
alias suspend='read "?Do you want to suspend? " && systemctl suspend'
alias bar='killall polybar; polybar main &disown'
alias scheck='shellcheck --enable=all'
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m \"\"'
alias gp='git push'
alias mpv='devour-hide mpv'
alias pcmanfm='devour-hide pcmanfm'
alias sxiv='devour-hide sxiv'
# alias emacsd='emacs --daemon'
# alias emacsc='emacsclient -c &disown'
# alias emacsq='emacsclient -e "$(kill-emacs)"'
alias cardib='cargo b'

# Start tmux automatically whenever a new terminal instance is opened.
[[ -z "${TMUX}" && -z "${IN_NEOVIM}" && -z "${INSIDE_EMACS}" && -n "${DISPLAY}" && -o interactive ]] && tmux

# Start X automatically only if in tty1.
[[ -z "${DISPLAY}" && "$(tty)" == "/dev/tty1" ]] && startx

