"""Cloudmesh Drive.

Usage:
  cmdrive.py (ls | dir)
  cmdrive.py (-h | --help)
  cmdrive.py --version

Options:
  -h --help     Show this screen.
  --version     Show version.

"""

from os import environ
from docopt import docopt
from CloudFile import CloudFile
from db.LocalDBProvider import LocalDBProvider

def main():
    arguments = docopt(__doc__, version='Cloudmesh Drive 0.1')
    
    print("Enter main")
    
    localdb = LocalDBProvider()

    localdb.list_files()

    print("done")

if __name__ == "__main__":
    main()
