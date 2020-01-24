#!/bin/sh
(dumpkeys | grep keymaps; echo "keycode 58 = Control") | loadkeys
