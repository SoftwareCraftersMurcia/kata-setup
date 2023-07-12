### Requirements
* Python 3.9
* [pipenv](https://pipenv-fork.readthedocs.io/en/latest/install.html)

### Installation
This project could be run with [pyenv](https://github.com/pyenv/pyenv).
```shell
pyenv install 3.9.11
```

This project uses [pipenv](https://pipenv.pypa.io/en/latest/) to handle package management and virtual environments.

```bash
pipenv install
```

As a developer is likely that you want to install also the development packages. For doing that execute the next
command:
```bash
pipenv install --dev
```

To run commands manually in the virtualenv set up by `pipenv` you can either use `pipenv run <command>` or
`pipenv shell` for a Bash prompt.

## Scripts
Run all test
```shell
pipenv run test 
```

# Some issues with the environment
[ValueError: Path not found or generated](https://github.com/pypa/pipenv/issues/4942)
```bash
pipenv shell
exit
pipenv --rm
pipenv install
```
