# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt appendhistory autocd nomatch notify
unsetopt beep
bindkey -v
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/zach/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

export PS1='(%~)$ '
export EDITOR=nvim
export VIRTUAL_ENV_DISABLE_PROMPT=True

alias vi=nvim
alias ls='ls --color=auto'
alias lsd='ls -hAlF'
alias cls=clear
alias we='curl wttr.in/14850'
alias grep="grep --color=auto"
alias diff="diff --color=auto"
alias py="python -m"
alias feh="feh --auto-rotate --recursive --scale-down"

# Special git repository for dotfiles
alias conf="git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
conf config status.showUntrackedFiles no

source $HOME/venv/py381/bin/activate

#export GREP_COLOR='1;33'  # yellow

# Set term title to shortened current directory, e.g. '/U/zach', '~/g/tapedeck'
shpwd() {
  echo ${${:-/${(j:/:)${(M)${(s:/:)${(D)PWD:h}}#(|.)[^.]}}/${PWD:t}}//\/~/\~}
}
precmd () {print -Pn "\e]0;$(pwd)\a"}

man() {
    LESS_TERMCAP_md=$'\e[01;31m' \
    LESS_TERMCAP_me=$'\e[0m' \
    LESS_TERMCAP_se=$'\e[0m' \
    LESS_TERMCAP_so=$'\e[01;44;33m' \
    LESS_TERMCAP_ue=$'\e[0m' \
    LESS_TERMCAP_us=$'\e[01;32m' \
    command man "$@"
}

# opam configuration
test -r /home/zach/.opam/opam-init/init.zsh && . /home/zach/.opam/opam-init/init.zsh > /dev/null 2> /dev/null || true

# pip zsh completion start
function _pip_completion {
  local words cword
  read -Ac words
  read -cn cword
  reply=( $( COMP_WORDS="$words[*]" \
             COMP_CWORD=$(( cword-1 )) \
             PIP_AUTO_COMPLETE=1 $words[1] 2>/dev/null ))
}
compctl -K _pip_completion pip
# pip zsh completion end
