#!/usr/bin/env python3
"""Delegate candidate synchronization to the game canonical renderer."""
import argparse
import subprocess
import sys
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--game-root', required=True, type=Path)
mode = parser.add_mutually_exclusive_group(required=True)
mode.add_argument('--check', action='store_true')
mode.add_argument('--write-candidate', action='store_true')
mode.add_argument('--write-published', action='store_true')
args = parser.parse_args()
site = Path(__file__).resolve().parents[1]
command = [sys.executable, str(args.game_root/'tools/sync_privacy_policy.py'), '--site-root', str(site)]
if args.write_candidate:
    command.append('--write')
elif args.write_published:
    command.append('--write-published')
subprocess.run(command, cwd=args.game_root, check=True)
